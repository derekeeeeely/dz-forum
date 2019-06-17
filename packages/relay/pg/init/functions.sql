-- 中文分词插件
create extension zhparser;

-- 中文分词configuration
CREATE TEXT SEARCH CONFIGURATION regnevazhcfg (PARSER = zhparser);
ALTER TEXT SEARCH CONFIGURATION regnevazhcfg ADD MAPPING FOR n,v,a,i,e,l WITH simple;

-- immutable array_to_string
CREATE OR REPLACE FUNCTION my_array_to_string(tags varchar[])
RETURNS text
AS
$$
SELECT array_to_string(tags, ',');
$$
LANGUAGE SQL IMMUTABLE STRICT;

-- 全文搜索 建索引
create index idx_topic_title on topic using gin(to_tsvector('regnevazhcfg',title));
create index idx_topic_content on topic using gin(to_tsvector('regnevazhcfg',content));
create index idx_topic_tags on topic using gin(to_tsvector('regnevazhcfg',my_array_to_string(tags)));

-- 全文搜索
CREATE OR REPLACE FUNCTION get_full_text_search(keyword varchar)
RETURNS SETOF public.topic as $$
BEGIN
  RETURN QUERY
  SELECT * FROM public.topic
    WHERE to_tsvector('regnevazhcfg',title) @@ to_tsquery('regnevazhcfg', keyword)
		  OR to_tsvector('regnevazhcfg',content) @@ to_tsquery('regnevazhcfg', keyword)
        OR to_tsvector('regnevazhcfg',my_array_to_string(tags)) @@ to_tsquery('regnevazhcfg', keyword)
        ORDER BY updated_at desc;

END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- @时关键字查用户列表
CREATE OR REPLACE FUNCTION get_user_by_keyword(keyword varchar)
RETURNS SETOF public.user as $$
BEGIN
  RETURN QUERY
  SELECT * FROM public.user
    WHERE name like '%'||keyword||'%'
      or nickname like '%'||keyword||'%'
        ORDER BY code asc;

END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- 发帖时更新标签库
CREATE OR REPLACE FUNCTION trigger_add_tags()
RETURNS TRIGGER AS $add_tags$
DECLARE
  _tag varchar;
BEGIN
  FOREACH _tag IN ARRAY NEW.tags::varchar[] LOOP
    IF NOT EXISTS(select id from public.tag where name=_tag) THEN
      INSERT INTO public.tag(name) values(_tag);
    END IF;
  END LOOP;
  RETURN NULL;
END;
$add_tags$ LANGUAGE plpgsql;

-- 发帖或更新帖子时插入mention
CREATE OR REPLACE FUNCTION trigger_add_mention()
RETURNS TRIGGER AS $add_mention$
DECLARE
mentions varchar[];
oldmentions varchar[];
t varchar;
BEGIN
  IF (TG_OP = 'INSERT') THEN
    IF NEW.mentionCodes is not NULL THEN
      mentions := NEW.mentionCodes;
      FOREACH t IN ARRAY mentions LOOP
        IF t <> NEW.user_code THEN
          INSERT INTO public.mention (user_code, topic_id, comment_id, parent_id, target_user) values(NEW.user_code, NEW.id, NULL, null, t);
        END IF;
      END LOOP;
    END IF;
  ELSIF (TG_OP = 'UPDATE') THEN
    IF OLD.mentionCodes is NULL THEN
      IF NEW.mentionCodes is not NULL THEN
        mentions := NEW.mentionCodes;
        FOREACH t IN ARRAY mentions LOOP
          IF t <> NEW.user_code THEN
            INSERT INTO public.mention (user_code, topic_id, comment_id, parent_id, target_user) values(NEW.user_code, NEW.id, NULL, null, t);
          END IF;
        END LOOP;
      END IF;
    ELSE
      IF NEW.mentionCodes is not NULL THEN
        mentions := NEW.mentionCodes;
        oldmentions := OLD.mentionCodes;
        FOREACH t IN ARRAY mentions LOOP
          IF t <> NEW.user_code THEN
            IF ARRAY[t] <@ oldmentions THEN
            ELSE
              INSERT INTO public.mention (user_code, topic_id, comment_id, parent_id, target_user) values(NEW.user_code, NEW.id, NULL, null, t);
            END IF;
          END IF;
        END LOOP;
      END IF;
    END IF;
  END IF;
  RETURN NULL;
END;
$add_mention$ LANGUAGE plpgsql;

-- 统计数据：今日、全部
CREATE OR REPLACE FUNCTION get_home_statistics()
RETURNS setof bigint as $$
BEGIN
  return QUERY
  SELECT num from (
    SELECT 'topicTotal' as name, count(*) as num FROM public.topic
    UNION
    SELECT 'topicToday' as name, count(*) as num FROM public.topic
      WHERE created_at >= current_date
    UNION
    SELECT 'commentTotal' as name, count(*) as num FROM public.comment) as total
    order by
      CASE
          WHEN name='topicToday' THEN 1
          WHEN name='topicTotal' THEN 2
          WHEN name='commentTotal' THEN 3
          ELSE 4
      END;
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- 递归查询帖子底下的回复
CREATE OR REPLACE FUNCTION get_topic_received_comments(topicid int)
RETURNS SETOF public.comment as $$
BEGIN
  RETURN QUERY
  WITH RECURSIVE T as(
    select id, user_code, topic_id, parent_id, content, created_at, updated_at, deleted_at, ARRAY[id] AS PATH, read, target_user, mentionCodes from public.comment where parent_id is NULL and topic_id = topicid
    UNION ALL
    select D.id, D.user_code, D.topic_id, D.parent_id, D.content, D.created_at, D.updated_at, D.deleted_at, T.PATH||D.id, D.read, D.target_user, D.mentionCodes from public.comment D join T on D.parent_id = T.id
  )
  SELECT * FROM T ORDER BY PATH, created_at asc;

END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- 获取用户收到的回复
CREATE OR REPLACE FUNCTION get_user_received_comments(usercode varchar)
RETURNS SETOF public.comment as $$
BEGIN
  RETURN QUERY
  SELECT * FROM public.comment
    WHERE target_user = usercode
      ORDER BY read asc, created_at desc;

END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- -- 获取用户未读回复
-- CREATE OR REPLACE FUNCTION get_user_unread_comments(usercode varchar)
-- RETURNS SETOF public.comment as $$
-- BEGIN
--   RETURN QUERY
--   SELECT * FROM public.comment
--     WHERE target_user = usercode
--       AND read IS false
--       ORDER BY read asc, created_at desc;

-- END;
-- $$ LANGUAGE plpgsql IMMUTABLE;

-- 评论点赞
CREATE OR REPLACE FUNCTION like_topic(topicid int, usercode varchar, type varchar)
RETURNS TEXT AS $$
BEGIN
  IF type = 'CANCEL' THEN
    update public.topic
      set like_num = like_num - 1
      where id = topicid;
    delete from public.likes
      where user_code = usercode and topic_id = topicid;
  ELSE
    update public.topic
      set like_num = like_num + 1
      where id = topicid;
    insert into public.likes (topic_id, user_code) values (topicid, usercode);
  END IF;
  RETURN true;
END;
$$ LANGUAGE plpgsql;

-- 标记评论为已读
CREATE OR REPLACE FUNCTION mark_comment_asread(commentid int, usercode varchar)
RETURNS TEXT AS $$
BEGIN
  update public.comment
    set read = true
    where id = commentid;
  -- 用户的未读消息-1
  update public.user
    set unread_comment_num = (SELECT unread_comment_num FROM public.user
    WHERE code = usercode) - 1
  WHERE code = usercode;
  RETURN true;
END;
$$ LANGUAGE plpgsql;

-- 全部评论标记为已读
CREATE OR REPLACE FUNCTION mark_all_comment_asread(usercode varchar)
RETURNS TEXT AS $$
BEGIN
  update public.comment
    set read = true
    where target_user = usercode AND read is false;
  -- 用户的未读消息 = 0
  update public.user
    set unread_comment_num = 0
  WHERE code = usercode;
  RETURN true;
END;
$$ LANGUAGE plpgsql;

-- 标记@为已读
CREATE OR REPLACE FUNCTION mark_mention_asread(mentionid int, usercode varchar)
RETURNS TEXT AS $$
BEGIN
  update public.mention
    set read = true
    where id = mentionid;
  -- 用户的未读消息-1
  update public.user
    set unread_mention_num = (SELECT unread_mention_num FROM public.user
    WHERE code = usercode) - 1
  WHERE code = usercode;
  RETURN true;
END;
$$ LANGUAGE plpgsql;

-- 全部标记@为已读
CREATE OR REPLACE FUNCTION mark_all_mention_asread(usercode varchar)
RETURNS TEXT AS $$
BEGIN
  update public.mention
    set read = true
    where target_user = usercode AND read is false;
  -- 用户的未读消息 = 0
  update public.user
    set unread_mention_num = 0
  WHERE code = usercode;
  RETURN true;
END;
$$ LANGUAGE plpgsql;

-- 根据code查用户
CREATE OR REPLACE FUNCTION get_user_by_code(usercode varchar) RETURNS SETOF public.user as $$

BEGIN
  RETURN QUERY
  SELECT * FROM public.user
    WHERE code = usercode;

END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- 记录更新时间
CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $set_timestamp$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$set_timestamp$ LANGUAGE plpgsql;

-- AFTER USERLOG INSERT
-- 在用户有登陆登出动作时修改用户表里的最后在线时间、ip、是否在线
CREATE OR REPLACE FUNCTION trigger_set_login_logout()
RETURNS TRIGGER AS $set_login_logout$
BEGIN
  IF NEW.action_type = 'login' THEN
    UPDATE public.user
      SET isonline = true,
          last_online_ip = NEW.action_ip
      WHERE code = NEW.user_code;
  END IF;

  IF NEW.action_type = 'logout' THEN
    UPDATE public.user
      SET isonline = false,
          last_online_ip = NEW.action_ip,
          last_online_time = NEW.created_at
      WHERE code = NEW.user_code;
  END IF;
  RETURN NULL;
END;
$set_login_logout$ LANGUAGE plpgsql;


-- AFTER TOPIC INSERT | DELETE
-- 插入、删除帖子时用户的帖子数 +-1
CREATE OR REPLACE FUNCTION trigger_set_user_topic_statistic()
RETURNS TRIGGER AS $set_user_topic_statistic$
BEGIN
  IF (TG_OP = 'INSERT') THEN
    UPDATE public.user
      SET topic_num = topic_num + 1
      WHERE code = NEW.user_code;
  ELSIF (TG_OP = 'DELETE') THEN
    UPDATE public.user
      SET topic_num = topic_num - 1
      WHERE code = NEW.user_code;
  END IF;
  RETURN NULL;
END;
$set_user_topic_statistic$ LANGUAGE plpgsql;

-- after mention insert
-- 插入mention时通知，未读@+1，@+1
CREATE OR REPLACE FUNCTION trigger_notify_mention()
RETURNS TRIGGER AS $notify_mention$
BEGIN
  PERFORM pg_notify('postgraphile:onmention_'||NEW.target_user, '{}');
  update public.user
    set unread_mention_num = unread_mention_num + 1
  WHERE code = NEW.target_user;
  update public.user
    set received_mention_num =  received_mention_num + 1
  WHERE code = NEW.target_user;
  RETURN NULL;
END;
$notify_mention$ LANGUAGE plpgsql;

-- AFTER COMMENT INSERT | DELETE
-- 插入、删除评论时用户的回复、被回复数 +-1
-- 插入评论时通知用户 pg_notify
CREATE OR REPLACE FUNCTION trigger_set_user_comment_statistic()
RETURNS TRIGGER AS $set_user_comment_statistic$
DECLARE
mentions varchar[];
t varchar;
tcode varchar;
BEGIN
  IF (TG_OP = 'DELETE') THEN
    UPDATE public.user
      SET comment_num = comment_num - 1
      WHERE code = NEW.user_code;

     UPDATE public.topic
      SET comment_num = comment_num - 1
      WHERE id = NEW.topic_id;

      -- 回复的是帖子，没有parent_id，给帖子主人收获评论-1
    IF NEW.parent_id is NULL THEN
      UPDATE public.user
        SET received_comment_num = received_comment_num - 1
        WHERE code = NEW.target_user;

    ELSE
    -- 回复的是回复，有parent_id，给回复主人收获评论-1
      UPDATE public.user
        SET received_comment_num = received_comment_num - 1
        WHERE code = NEW.target_user;
    END IF;

  ELSIF (TG_OP = 'INSERT') THEN
    UPDATE public.user
      SET comment_num = comment_num + 1
      WHERE code = NEW.user_code;

    UPDATE public.topic
      SET comment_num = comment_num + 1
      WHERE id = NEW.topic_id;

    -- @人的时候保存一条mention记录
    IF NEW.mentionCodes is not NULL THEN
      mentions := NEW.mentionCodes;
      FOREACH t IN ARRAY mentions LOOP
        IF t <> NEW.user_code THEN
          INSERT INTO public.mention (user_code, topic_id, comment_id, parent_id, target_user) values(NEW.user_code, NEW.topic_id, NEW.id, NEW.parent_id, t);
        END IF;
      END LOOP;
    END IF;

    -- 回复的是帖子，没有parent_id，给帖子主人收获评论+1
    IF NEW.parent_id is NULL THEN

      UPDATE public.user
        SET received_comment_num = received_comment_num + 1
        WHERE code = NEW.target_user;

      -- 排除自己回复自己
      IF NEW.user_code <> NEW.target_user THEN

        PERFORM pg_notify('postgraphile:oncomment_'||NEW.target_user, '{}');
        -- PERFORM pg_notify('postgraphile:oncomment_'||NEW.target_user, json_build_object(
        --   '__node__', json_build_array('public.comment', NEW.id)
        -- )::text);

        -- 用户的未读消息+1
        update public.user
          set unread_comment_num = unread_comment_num + 1
        WHERE code = NEW.target_user;

      END IF;

    ELSE
    -- 回复的是回复，有parent_id，给回复主人收获评论+1
      SELECT user_code into tcode FROM public.comment WHERE id = NEW.parent_id;

      UPDATE public.user
        SET received_comment_num = received_comment_num + 1
        WHERE code = tcode;

      -- 排除自己回复自己
      IF NEW.user_code <> NEW.target_user THEN

        PERFORM pg_notify('postgraphile:oncomment_'||NEW.target_user, '{}');

        -- 用户的未读消息+1
        update public.user
          set unread_comment_num = unread_comment_num + 1
        WHERE code = NEW.target_user;

      END IF;
    END IF;
  END IF;
  RETURN NULL;
END;
$set_user_comment_statistic$ LANGUAGE plpgsql;