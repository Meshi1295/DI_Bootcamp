-- Database: Hollywood

-- DROP DATABASE IF EXISTS "Hollywood";

-- CREATE DATABASE "Hollywood"
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'en_US.UTF-8'
--     LC_CTYPE = 'en_US.UTF-8'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;

-- 1. Count how many actors are in the table.
-- SELECT * FROM actors
-- SELECT COUNT(*) FROM actors;

-- CREATE INTO actors (first_name, last_name, age, number_oscar)
-- VALUES ('meshi','inbal');

-- Brings an error because i said before there would be NOT NULL