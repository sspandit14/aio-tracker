DROP TABLE IF EXISTS items;
DROP TYPE IF EXISTS item_status;

\i migrations/init.sql
\i seed.sql