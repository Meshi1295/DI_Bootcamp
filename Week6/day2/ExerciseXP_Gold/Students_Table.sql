-- Exercise 2: Students Table
----------- Update--
-- 1. ‘Lea Benichou’ and ‘Marc Benichou’ are twins, they should have the same birth_dates. Update both their birth_dates to 02/11/1998.

-- SELECT * FROM students;
--  UPDATE students
-- SET birth_date ='02/11/1998'
-- WHERE last_name = 'Benichou' 
-- returning *

-- 2. Change the last_name of David from ‘Grez’ to ‘Guez’.

-- UPDATE students
-- SET last_name = 'Guez'
-- WHERE first_name = 'David'
-- returning *


---------- Delete --
-- 1. Delete the student named ‘Lea Benichou’ from the table.
-- DELETE FROM students
-- WHERE first_name = 'Lea';


---------- Count --
-- 1. Count how many students are in the table.
-- SELECT COUNT(id_students) FROM students AS count_student;

-- 2. Count how many students were born after 1/01/2000.
-- SELECT COUNT(id_students) FROM students WHERE birth_date =  '1/01/2000'



---------- Insert / Alter --
-- 1. Add a column to the student table called math_grade.
-- ALTER TABLE students ADD column math_grade smallint;

-- 2.Add 80 to the student which id is 1.
-- INSERT INTO students (math_grade)
-- VALUES(80),
-- WHERE id_student = 1; .. לא עובד

--  UPDATE students 
-- SET math_grade = 80
-- WHERE id_students = 1
-- returning*;


-- 3. Add 90 to the students which have ids of 2 or 4.
--  UPDATE students
-- SET math_grade = 90
-- WHERE id_students = 2 
-- OR id_students = 4
-- returning*;

-- 4. Add 40 to the student which id is 6.
-- UPDATE students
-- SET math_grade = 40
-- WHERE id_students = 6
-- returning *

-- 5.Count how many students have a grade bigger than 83
-- SELECT COUNT(id_students) FROM students
-- WHERE math_grade > 83


-- 6.Add another student named ‘Omer Simpson’ with the same birth_date as the one already in the table. Give him a grade of 70.
-- INSERT INTO students (first_name, last_name, birth_date, math_grade)
-- VALUES('Omer','Simpson', 
-- 	   (SELECT birth_date FROM students WHERE first_name ='Omer'),70)


-- 7.Now, in the table, ‘Omer Simpson’ should appear twice. It’s the same student, although he received 2 different grades because he retook the math exam.
-- Bonus: Count how many grades each student has.
-- Tip: You should display the first_name, last_name and the number of grades of each student. If you followed the instructions above correctly, all the students should have 1 math grade, except Omer Simpson which has 2.
-- Tip : Use an alias called total_grade to fetch the grades.
-- Hint : Use GROUP BY.

-- SELECT (first_name,last_name)
-- AS full_name, COUNT(math_grade) from students group by full_name



---------- SUM --
-- 1.Find the sum of all the students grades.
-- SELECT SUM(math_grade) FROM students;










