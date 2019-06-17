CREATE TABLE public.likes(
  id SERIAL PRIMARY KEY,
  user_code varchar(32) REFERENCES public.user(code) ON DELETE CASCADE,
  topic_id int4 REFERENCES public.topic(id) NOT NULL,

  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  deleted_at TIMESTAMPTZ DEFAULT NULL
);

COMMENT ON COLUMN public.likes.id IS '点赞 id';
COMMENT ON COLUMN public.likes.user_code IS '用户code';
COMMENT ON COLUMN public.likes.topic_id IS '帖子id';
COMMENT ON COLUMN public.likes.created_at IS '创建时间';
COMMENT ON COLUMN public.likes.updated_at IS '更新时间';
COMMENT ON COLUMN public.likes.deleted_at IS '删除时间';
