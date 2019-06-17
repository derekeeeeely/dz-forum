DROP TRIGGER IF EXISTS set_timestamp ON public.user;
DROP TRIGGER IF EXISTS set_timestamp ON public.topic;
DROP TRIGGER IF EXISTS set_timestamp ON public.section;
DROP TRIGGER IF EXISTS set_timestamp ON public.comment;
DROP TRIGGER IF EXISTS set_user_topic_statistic ON public.topic;
DROP TRIGGER IF EXISTS set_login_logout ON public.userlog;
DROP TRIGGER IF EXISTS set_user_comment_statistic ON public.comment;

-- 更新时间
CREATE TRIGGER set_timestamp
BEFORE UPDATE ON public.user
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
CREATE TRIGGER set_timestamp
BEFORE UPDATE ON public.topic
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
CREATE TRIGGER set_timestamp
BEFORE UPDATE ON public.comment
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

CREATE TRIGGER set_timestamp
BEFORE UPDATE ON public.section
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
CREATE TRIGGER set_timestamp
BEFORE UPDATE ON public.tag
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();
CREATE TRIGGER set_timestamp
BEFORE UPDATE ON public.mention
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

-- 标签更新
CREATE TRIGGER add_tags
AFTER INSERT ON public.topic
FOR EACH ROW
EXECUTE PROCEDURE trigger_add_tags();

-- mention入库
CREATE TRIGGER add_mention
AFTER INSERT OR UPDATE ON public.topic
FOR EACH ROW
EXECUTE PROCEDURE trigger_add_mention();

-- 用户-帖子统计
CREATE TRIGGER set_user_topic_statistic
AFTER INSERT OR DELETE ON public.topic
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_user_topic_statistic();

-- 用户-登录统计
CREATE TRIGGER set_login_logout
AFTER INSERT ON public.userlog
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_login_logout();

-- 用户-评论统计
CREATE TRIGGER set_user_comment_statistic
AFTER INSERT OR DELETE ON public.comment
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_user_comment_statistic();

-- mention通知
CREATE TRIGGER notify_mention
AFTER INSERT ON public.mention
FOR EACH ROW
EXECUTE PROCEDURE trigger_notify_mention();