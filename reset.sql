DROP TABLE IF EXISTS items;
DROP TYPE IF EXISTS item_status;

\i /docker-entrypoint-initdb.d/01-init.sql
\i /docker-entrypoint-initdb.d/02-seed.sql

COMMIT;