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

-- SELECT item,price FROM items ORDER BY price ASC ;

-- 2. Items with a price above 80 (80 included), ordered by price (highest to lowest).
-- SELECT * FROM items WHERE price >= 80 ORDER BY price DESC ;


--3. The first 3 customers in alphabetical order (A-Z) – exclude ‘id’ from the results.
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
-- ON customers.id_customer = customer_id

-- 3. Purchases of the customer with the ID equal to 4.
-- SELECT first_name,last_name,item_id, customers.id_customer FROM purchases
-- INNER JOIN customers 
-- ON customers.id_customer = customer_id 
-- WHERE customer_id > 4

-- .4 Purchases for a large desk AND a small desk
--  SELECT first_name,last_name, item FROM purchases 
-- INNER JOIN customers 
-- ON customers.id_customer = customer_id 
-- INNER JOIN items 
-- ON items.id = item_id WHERE item = 'Large Desk' or item = 'Small Desk'


------------------------ 4
-- Create a purchase for Scott Scott – he bought a hard drive.
-- INSERT INTO items (item, price) VALUES ('Hard Drive','100') RETURNING *;
-- INSERT INTO purchases (customer_id, item_id) VALUES(3,4);



---------------------------5 

-- Use SQL to show all the customers who have made a purchase. Show the following fields/columns:
-- 1. Customer first name
-- 2. Customer last name
-- 3. Item name

-- SELECT first_name,last_name,item FROM customers 
-- INNER JOIN purchases 
-- ON customers.id_customer = customer_id 
-- INNER JOIN items 
-- ON items.id_items = item_id








-- SELECT * FROM purchases;
-- SELECT * FROM customers;
-- SELECT * FROM items;
