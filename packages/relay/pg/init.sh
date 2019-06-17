#!/bin/bash
POSTGRES_INIT_DIR=$(cd -P -- "$(dirname -- "$0")" && pwd -P)

psql -d regneva -U root -w <<-EOSQL

\echo
\echo 'Initializing database...'
\echo

BEGIN;

DROP TABLE IF EXISTS public.comment CASCADE;
DROP TABLE IF EXISTS public.topic CASCADE;
DROP TABLE IF EXISTS public.section CASCADE;
DROP TABLE IF EXISTS public.userlog CASCADE;
DROP TABLE IF EXISTS public.user CASCADE;


\echo
\echo 'Creating user...'
\echo

\i ${POSTGRES_INIT_DIR}/init/user.sql;


\echo
\echo 'Creating userlog...'
\echo

\i ${POSTGRES_INIT_DIR}/init/userlog.sql;


\echo
\echo 'Creating section...'
\echo

\i ${POSTGRES_INIT_DIR}/init/section.sql;

\echo
\echo 'Creating topic...'
\echo

\i ${POSTGRES_INIT_DIR}/init/topic.sql;

\echo
\echo 'Creating tag...'
\echo

\i ${POSTGRES_INIT_DIR}/init/tag.sql;

\echo
\echo 'Creating topic_tag...'
\echo

\i ${POSTGRES_INIT_DIR}/init/topic_tag.sql;

\echo
\echo 'Creating comment...'
\echo

\i ${POSTGRES_INIT_DIR}/init/comment.sql;

\echo
\echo 'Creating mentions...'
\echo

\i ${POSTGRES_INIT_DIR}/init/mentions.sql;

\echo
\echo 'Creating functions...'
\echo

\i ${POSTGRES_INIT_DIR}/init/functions.sql;

\echo
\echo 'Creating triggers...'
\echo

\i ${POSTGRES_INIT_DIR}/init/trigger.sql;

COMMIT;

\echo
\echo 'success'
\echo

EOSQL