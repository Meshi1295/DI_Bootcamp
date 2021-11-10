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
	
-- 	CREATE TABLE students (
-- 	id_students SERIAL NOT NULL,
-- 		first_name VARCHAR (50) NOT NULL,
-- 		last_name VARCHAR (50) NOT NULL,
-- 		birth_date DATE NOT NULL
-- 	); 

-- INSERT
-- 1.	Insert the data seen above to the students table. Find the most efficient way to insert the data.
-- 	INSERT INTO students (first_name,last_name,birth_date)
-- 	VALUES 
-- 	('Marc','Benichou','02/11/1998'),
-- 	('Yoan','Cohen','03/12/2010'),
-- 	('Lea','Benichou','07/27/1987'),
-- 	('Amelia','Dux','07/04/1996'),
-- 	('David','Grez','06/14/2003'),
-- 	('Omer','Simpson','03/10/1980');
	
-- 2.	Insert your last_name, first_name and birth_date to the students table (Take a look at the id given).
-- INSERT INTO students (first_name,last_name,birth_date)
-- VALUES('Meshi', 'Inbal', '11/02/1995');


-- SELECT
-- 1. Fetch all of the data from the table.
-- SELECT * FROM students;

--  2. Fetch all of the students first_names and last_names.
-- SELECT first_name , last_name FROM students;

-- 3. For the following questions, only fetch the first_names and last_names of the students.
----1.Fetch the student which id is equal to 2.
-- SELECT * FROM students WHERE id_students = 2;

---- 2. Fetch the student whose last_name is Benichou AND first_name is Marc.
-- SELECT * FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc';

----3. Fetch the students whose last_names are Benichou OR first_names are Marc.
-- SELECT * FROM students WHERE last_name = 'Benichou' OR first_name = 'Marc';

----4. Fetch the students whose first_names contain the letter a.
-- SELECT * FROM students WHERE first_name LIKE '%a%';

-- SELECT * FROM students WHERE first_name ILIKE 'a%';

-- SELECT * FROM students WHERE first_name LIKE '%a';

----7. Fetch the students whose second to last letter of their first_names are a (Example: Leah).
-- SELECT * FROM students WHERE first_name LIKE  '%a' ;????????

-----8.Fetch the students whose id’s are equal to 1 AND 3 .
-- SELECT * FROM students WHERE id_students = 1 OR id_students = 3;



-- Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).
-- SELECT * FROM students WHERE birth_date = '1/01/2000' OR  birth_date > '1/01/2000';