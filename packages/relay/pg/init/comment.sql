CREATE TABLE public.comment(
  id SERIAL PRIMARY KEY,
  user_code varchar(32) REFERENCES public.user(code) ON DELETE CASCADE,
  target_user varchar(32),
  topic_id int4 REFERENCES public.topic(id) NOT NULL,
  parent_id int4 DEFAULT NULL,
  content text DEFAULT NULL,
  mentionCodes varchar[] DEFAULT NULL,

  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  deleted_at TIMESTAMPTZ DEFAULT NULL,
  path int4[] DEFAULT NULL,
  read bool DEFAULT false
);

COMMENT ON COLUMN public.comment.id IS '回复id';
COMMENT ON COLUMN public.comment.user_code IS '用户code';
COMMENT ON COLUMN public.comment.target_user IS '回复的目标用户code';
COMMENT ON COLUMN public.comment.topic_id IS '回复的帖子id';
COMMENT ON COLUMN public.comment.parent_id IS '回复的父级id，回复回复时存在';
COMMENT ON COLUMN public.comment.content IS '回复内容';
COMMENT ON COLUMN public.comment.mentionCodes IS '@的人';
COMMENT ON COLUMN public.comment.created_at IS '创建时间';
COMMENT ON COLUMN public.comment.updated_at IS '更新时间';
COMMENT ON COLUMN public.comment.deleted_at IS '删除时间';
COMMENT ON COLUMN public.comment.path IS '回复路径';
COMMENT ON COLUMN public.comment.read IS '是否已读';
