CREATE TABLE public.tag(
  id SERIAL PRIMARY KEY,
  name varchar(32),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  deleted_at TIMESTAMPTZ DEFAULT NULL
);

COMMENT ON COLUMN public.tag.id IS 'id';
COMMENT ON COLUMN public.tag.name IS '标签名';
