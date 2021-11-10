-- Exercise XP Gold
-- Exercise 1: DVD Rental
-- Database: dvdrental

-- DROP DATABASE IF EXISTS dvdrental;

-- CREATE DATABASE dvdrental
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'en_US.UTF-8'
--     LC_CTYPE = 'en_US.UTF-8'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;
	
--   	Exercise 1: DVD Rental	
-- 1. Find out how many films there are for each rating.
-- SELECT rating ,COUNT(film_id) FROM film GROUP BY rating ;

-- 2. Filter this list further: look for only movies that are under 2 hours long, and whose rental price (rental_rate) is under 3.00. Sort the list alphabetically.
-- SELECT title,rating, length from film 
-- WHERE length<120 
-- AND rental_rate<3 
-- ORDER BY title ASC

-- 3. Find a customer in the customer table, and change his/her details to your details, using SQL UPDATE.
-- SELECT * FROM customer;
-- UPDATE customer
-- SET 
-- first_name = 'Meshi',
-- last_name = 'Inbal',
-- email = 'meshi@mshi.com'
-- WHERE customer_id = 2
-- RETURNING *;


-- 4. Now find the customer’s address, and use UPDATE to change the address to your address (or make one up).
-- UPDATE address
-- SET address = 'jaffa'
-- where address_id= 605
-- RETURNING*


-- UPDATE address
-- SET district = 'shderot',
-- 	postal_code=13954700,
-- 	phone=4444444444
	
-- WHERE address_id= 605
-- RETURNING*