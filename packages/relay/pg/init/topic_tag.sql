CREATE TABLE public.topic_tag(
  id SERIAL PRIMARY KEY,
  topic_id int4 REFERENCES public.topic(id) ON DELETE CASCADE,
  tag_id int4 REFERENCES public.tag(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  deleted_at TIMESTAMPTZ DEFAULT NULL
);

COMMENT ON COLUMN public.topic_tag.id IS 'id';
COMMENT ON COLUMN public.topic_tag.topic_id IS '帖子id';
COMMENT ON COLUMN public.topic_tag.tag_id IS '标签id';
