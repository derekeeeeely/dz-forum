#!/bin/bash
POSTGRES_INIT_DIR=$(cd -P -- "$(dirname -- "$0")" && pwd -P)

psql -d regneva -U derekely -w <<-EOSQL

\echo
\echo 'migrate database...'
\echo

BEGIN;

\echo
\echo 'migrate user from uums'
\echo

\i ${POSTGRES_INIT_DIR}/migration/user.sql;

\echo
\echo 'migrate section'
\echo

\i ${POSTGRES_INIT_DIR}/migration/section.sql;

\echo
\echo 'migrate topic'
\echo

\i ${POSTGRES_INIT_DIR}/migration/topic.sql;

\echo
\echo 'migrate comment'
\echo

\i ${POSTGRES_INIT_DIR}/migration/comment.sql;

COMMIT;

\echo
\echo 'success'
\echo

EOSQL