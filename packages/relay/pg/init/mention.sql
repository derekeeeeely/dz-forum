CREATE TABLE public.mention(
  id SERIAL PRIMARY KEY,
  user_code varchar(32) REFERENCES public.user(code) ON DELETE CASCADE,
  target_user varchar(32),
  topic_id int4 REFERENCES public.topic(id) NOT NULL,
  parent_id int4 DEFAULT NULL,
  comment_id int4 DEFAULT NULL,
  read bool DEFAULT false,

  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  deleted_at TIMESTAMPTZ DEFAULT NULL
);

COMMENT ON COLUMN public.mention.id IS 'mention id';
COMMENT ON COLUMN public.mention.user_code IS '用户code';
COMMENT ON COLUMN public.mention.target_user IS '@到的用户code';
COMMENT ON COLUMN public.mention.topic_id IS '帖子id';
COMMENT ON COLUMN public.mention.comment_id IS '回复id';
COMMENT ON COLUMN public.mention.parent_id IS '回复的父级id，回复回复时存在';
COMMENT ON COLUMN public.mention.created_at IS '创建时间';
COMMENT ON COLUMN public.mention.updated_at IS '更新时间';
COMMENT ON COLUMN public.mention.deleted_at IS '删除时间';
COMMENT ON COLUMN public.mention.read IS '是否已读';
