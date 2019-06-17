CREATE TABLE public.topic(
  id SERIAL PRIMARY KEY,
  user_code varchar(32) REFERENCES public.user(code) ON DELETE CASCADE,
  section_id int4 REFERENCES public.section(id) ON DELETE CASCADE,
  title text DEFAULT NULL,
  tags varchar[] DEFAULT NULL,
  content text DEFAULT NULL,
  mentionCodes varchar[] DEFAULT NULL,
  like_num int8 DEFAULT 0,
  comment_num int8 DEFAULT 0,
  type int2 DEFAULT NULL,
  status int2 DEFAULT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  deleted_at TIMESTAMPTZ DEFAULT NULL
);

COMMENT ON COLUMN public.topic.id IS '帖子id';
COMMENT ON COLUMN public.topic.user_code IS '发帖用户code';
COMMENT ON COLUMN public.topic.section_id IS '所属版块id';
COMMENT ON COLUMN public.topic.title IS '帖子标题';
COMMENT ON COLUMN public.topic.content IS '帖子内容';
COMMENT ON COLUMN public.topic.mentionCodes IS '@的人';
COMMENT ON COLUMN public.topic.tags IS '帖子标签';
COMMENT ON COLUMN public.topic.like_num IS '点赞数';
COMMENT ON COLUMN public.topic.comment_num IS '评论数';
COMMENT ON COLUMN public.topic.type IS '帖子类型';
COMMENT ON COLUMN public.topic.status IS '帖子状态';
COMMENT ON COLUMN public.topic.created_at IS '创建时间';
COMMENT ON COLUMN public.topic.updated_at IS '更新时间';
COMMENT ON COLUMN public.topic.deleted_at IS '删除时间';
