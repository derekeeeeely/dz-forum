CREATE TABLE public.section(
  id SERIAL PRIMARY KEY,
  level int2 DEFAULT 1,
  parent int4 DEFAULT NULL,
  name varchar(32) NOT NULL,
  sort int4 DEFAULT NULL,
  avatar text DEFAULT NULL,
  description text DEFAULT NULL,

  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON COLUMN public.section.id IS '版块id';
COMMENT ON COLUMN public.section.level IS '版块级别';
COMMENT ON COLUMN public.section.parent IS '父级版块id';
COMMENT ON COLUMN public.section.name IS '版块名';
COMMENT ON COLUMN public.section.sort IS '版块排序值';
COMMENT ON COLUMN public.section.avatar IS '封面图';
COMMENT ON COLUMN public.section.description IS '版块描述';
COMMENT ON COLUMN public.section.created_at IS '创建时间';
COMMENT ON COLUMN public.section.updated_at IS '更新时间';

