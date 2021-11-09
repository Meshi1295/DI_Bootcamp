Code of Aggregate Functions
-- AVG() – return the average value.
-- COUNT() – return the number of values.
-- MAX() – return the maximum value.
-- MIN() – return the minimum value.
-- SUM() – return the sum of all or distinct values.

-- We often use the aggregate functions with the GROUP BY clause in the SELECT statement. 
-- In these cases, the GROUP BY clause divides the result set 
-- into groups of rows and the aggregate functions perform a calculation on each group e.g., 
-- maximum, minimum, average, etc.

-- Number of lines : 3 actors in the table
-- SELECT COUNT(*) FROM actors;
-- 2 actors have more than 2 oscars
-- SELECT last_name, COUNT(*) FROM actors WHERE number_oscars > 2 GROUP BY last_name;

-- -- Max and Min
-- SELECT MAX(number_oscars) AS max_oscars, Min(number_oscars) FROM actors;
-- SELECT first_name, last_name FROM actors WHERE number_oscars = (SELECT MAX(number_oscars) FROM actors);

-- --Average
-- SELECT AVG(number_oscars) FROM actors;
-- -- Need to Round it
-- SELECT ROUND(AVG(number_oscars), 2) FROM actors;

-- --Sum
-- SELECT SUM(number_oscars) FROM actors;


-- --Problem
-- -- ERROR:  column "actors.first_name" must appear in the GROUP BY clause or be used in an aggregate function
-- SELECT first_name, last_name, AVG(number_oscars) FROM actors;

-- -- Group By
-- -- The GROUP BY statement groups rows that have the same values into summary rows,
-- -- The GROUP BY statement is often used with aggregate functions (COUNT(), MAX(), MIN(), SUM(), AVG()) 
-- -- to group the result-set by one or more columns.
-- -- The queries that contain the GROUP BY clause are called grouped 
-- -- queries and only return a single row for every grouped item.

-- Add a new column
-- ALTER TABLE actors ADD COLUMN test varchar(50);

-- Change the type of the column
ALTER TABLE actors
ALTER COLUMN test TYPE decimal
USING test::decimal;
-- UPDATE records
-- UPDATE actors
-- SET nationality = 'French', number_oscars = number_oscars*2
-- WHERE actor_id in (1,3)
-- RETURNING *;

-- SELECT nationality, COUNT(*) 
-- FROM actors 
-- GROUP BY nationality 

-- Restricting query results using the HAVING clause
-- It's not always that we will want to perform groupings on all 
-- the data in a given table. There will be times when we will want 
-- to restrict our results to a certain given criteria.  
-- In such cases , we can use the HAVING clause
-- SQL Having Clause is used to restrict the results returned by the GROUP BY clause.
-- The HAVING clause was added to SQL because the WHERE keyword cannot be used with aggregate functions.

-- SELECT column_name(s)
-- FROM table_name
-- WHERE condition
-- GROUP BY column_name(s)
-- HAVING condition
-- ORDER BY column_name(s);

-- SELECT nationality, COUNT(*) FROM actors GROUP BY nationality HAVING nationality='American';
-- SELECT nationality, COUNT(*) FROM actors GROUP BY nationality HAVING COUNT(*) >= 2;



----------------------For the students who finished the exercise, you can do the one below, it's MANDATORY to do it for tomorrow
-- Use city_info table, Use aggregate functions
-- 1. How many rows per city does the table have ? 
-- 2. What is the average dust index in the city of Boston between 01/03/2015 and 05/03/2015?
-- 3. How many rows does the table have about the city "San Francisco" ?
-- 4. Where and when (only hour) it's the noisiest in the world?.