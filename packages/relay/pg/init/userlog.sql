CREATE TABLE public.userlog(
  id SERIAL PRIMARY KEY,
  user_code varchar(32) REFERENCES public.user(code) NOT NULL,
  action_ip varchar(32) DEFAULT NULL,
  action_type varchar(32) DEFAULT NULL,
  action_content text DEFAULT NULL,

  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON COLUMN public.userlog.user_code IS '用户code';
COMMENT ON COLUMN public.userlog.action_ip IS '用户活动ip';
COMMENT ON COLUMN public.userlog.action_type IS '用户活动类型，如：login logout';
COMMENT ON COLUMN public.userlog.action_content IS '用户活动内容';
COMMENT ON COLUMN public.userlog.created_at IS '创建时间';
