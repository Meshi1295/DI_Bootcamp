-- Database: public

-- DROP DATABASE IF EXISTS public;

-- CREATE DATABASE public
--     WITH 
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'en_US.UTF-8'
--     LC_CTYPE = 'en_US.UTF-8'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1;

-- -- -- -- -- -- 1
--  1. All items, ordered by price (lowest to highest).

-- SELECT * FROM items ORDER BY small_desk DESC ;

-- 2. Items with a price above 80 (80 included), ordered by price (highest to lowest).
-- SELECT * FROM items ORDER BY small_desk, large_desk, fan >= 80 ASC ;

--3. The first 3 customers in alphabetical order (A-Z) – exclude ‘id’ from the results.
-- SELECT * FROM customers;

-- SELECT * FROM customers ORDER BY first_name ASC LIMIT 3;

-- 4. All last names (no other columns!), in reverse alphabetical order (Z-A)
-- SELECT last_name FROM customers ORDER BY last_name DESC;


-- -- -- -- -- -- 2

-- Create a table named purchases. It should have 2 columns : customer_id and item_id. 
-- These columns are references from the tables customers and items. Edit the data of the purchases table:
--  1. Add a row which references a customer by ID, but does not reference an item by ID (leave it blank). Does this work? Why/why not?

-- CREATE TABLE purchases (
-- 	customer_id SMALLINT ,
-- 	item_id SMALLINT
-- );

-- INSERT INTO purchases(customer_id, item_id) VALUES (4,NULL);
-- -yes its work, because I didn't write NOT null

-- 2. Add 5 rows which reference existing customers and items.
-- INSERT INTO purchases(customer_id, item_id) VALUES (1,3), (2,2), (3,2), (4,1), (5,3);


-- -- -- -- -- -- 3
--  1. All purchases. Is this information useful to us? NO
-- 2. All purchases, joining with the customers table.

-- SELECT first_name,last_name,item_id 
-- FROM purchases 
-- INNER JOIN customers 
-- ON customers.id = customer_id






-- SELECT * FROM purchases;
-- SELECT * FROM customers;
-- SELECT * FROM items;
