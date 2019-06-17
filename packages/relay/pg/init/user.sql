CREATE TABLE public.user(
  id SERIAL,
  name VARCHAR(64) NOT NULL,
  code varchar(32) PRIMARY KEY NOT NULL,
  sex int2 DEFAULT NULL,
  age int4 DEFAULT NULL,
  birthday date DEFAULT NULL,
  avatar text DEFAULT NULL,
  nickname  varchar(128) DEFAULT NULL,
  about text DEFAULT NULL,
  signature text DEFAULT NULL,

  topic_num int8 DEFAULT 0,
  comment_num int8 DEFAULT 0,
  like_num int8 DEFAULT 0,
  received_like_num int8 DEFAULT 0,
  received_comment_num int8 DEFAULT 0,
  received_mention_num int8 DEFAULT 0,
  unread_mention_num int8 DEFAULT 0,
  unread_comment_num int8 DEFAULT 0,
  isonline bool DEFAULT false,
  last_online_ip varchar(32) DEFAULT NULL,
  last_online_time TIMESTAMPTZ DEFAULT NULL,

  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON COLUMN public.user.id IS '用户id';
COMMENT ON COLUMN public.user.name IS '用户名';
COMMENT ON COLUMN public.user.code IS '员工号';
COMMENT ON COLUMN public.user.sex IS '性别: 1 男 2 女';
COMMENT ON COLUMN public.user.age IS '年龄';
COMMENT ON COLUMN public.user.birthday IS '生日';
COMMENT ON COLUMN public.user.nickname IS '昵称';
COMMENT ON COLUMN public.user.avatar IS '头像';
COMMENT ON COLUMN public.user.about IS '关于我';
COMMENT ON COLUMN public.user.signature IS '签名';
COMMENT ON COLUMN public.user.topic_num IS '帖子数';
COMMENT ON COLUMN public.user.comment_num IS '回复数';
COMMENT ON COLUMN public.user.like_num IS '点赞数';
COMMENT ON COLUMN public.user.unread_mention_num IS '未读@数';
COMMENT ON COLUMN public.user.unread_comment_num IS '未读评论数';
COMMENT ON COLUMN public.user.received_like_num IS '获得点赞数';
COMMENT ON COLUMN public.user.received_mention_num IS '获得评论数';
COMMENT ON COLUMN public.user.received_comment_num IS '获得评论数';
COMMENT ON COLUMN public.user.isonline IS '是否在线';
COMMENT ON COLUMN public.user.last_online_ip IS '最后在线ip';
COMMENT ON COLUMN public.user.last_online_time IS '最后在线时间';
COMMENT ON COLUMN public.user.created_at IS '创建时间';
COMMENT ON COLUMN public.user.updated_at IS '更新时间';

CREATE INDEX ON public.user USING hash (code);
