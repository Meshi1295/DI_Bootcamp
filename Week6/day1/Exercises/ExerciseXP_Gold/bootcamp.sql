-- Exercise 1 : Bootcamp
-- Select

-- Database: bootcamp

-- DROP DATABASE IF EXISTS bootcamp;

-- CREATE DATABASE bootcamp
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'en_US.UTF-8'
--     LC_CTYPE = 'en_US.UTF-8'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;
-- SELECT * FROM students;

-- 1.Fetch the first four students. You have to order the four students alphabetically by last_name.
-- SELECT first_name,last_name,birth_date FROM students ORDER BY last_name LIMIT 4;

-- .2 Fetch the details of the youngest student.
-- SELECT first_name, last_name,birth_date FROM students ORDER BY birth_date ASC LIMIT 1

-- 3. Fetch three students skipping the first two students.
-- SELECT first_name, last_name,birth_date FROM students OFFSET 2 LIMIT 3;




