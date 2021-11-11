	
-- 	1. Create 2 tables : Customer and Customer profile. They have a One to One relationship. Use all the types of Joins to display the data.

-- 	CREATE TABLE customers (
--   customer_id SERIAL PRIMARY KEY,
--   full_name VARCHAR(45) NOT NULL
-- );

-- -- /*
-- --  one to one: a customers has one profile
-- -- */

-- CREATE TABLE customer_profile (
-- 	profile_id SERIAL REFERENCES customers( customer_id) ,
--     first_name VARCHAR(45) NOT NULL,
-- 	last_name VARCHAR(45) NOT NULL,
-- 	 city text NOT NULL,
-- 	customer_date date
-- );

-- INSERT INTO customers(full_name)
-- VALUES ('Meshi Inbal'), ('Amit Asher')


-- INSERT INTO customer_profile(first_name , last_name,city,customer_date)
-- VALUES ('Meshi','Inbal','tal-aviv','02/11/1995')

-- SELECT *  FROM customer_profile;
-- SELECT * FROM customers;
 
-- -- -------------------------------------------------------------------------------------------------------------------------------
-- SELECT *
-- FROM customers
-- FULL OUTER JOIN customer_profile
-- ON customers.customer_id = customer_profile.profile_id;

-- SELECT *
-- FROM customers
-- JOIN customer_profile
-- ON customers.customer_id = customer_profile.profile_id;

-- SELECT *
-- FROM customers
-- LEFT JOIN customer_profile
-- ON customers.customer_id = customer_profile.profile_id;

-- SELECT *
-- FROM customers
-- RIGHT JOIN customer_profile
-- ON customers.customer_id = customer_profile.profile_id;


-- 	2. Create 2 other tables : Product and Order. Order is a table with a Many to Many relationship with the Customer and Product tables. 
-- 		Use all the types of Joins to display the data.

-- -- /*
-- --  Many to Many: Product have alot  Order AND Products have alot Order
-- -- */

-- CREATE TABLE products (
--    product_id SERIAL PRIMARY KEY,
--    title text,
--    price money
-- );

-- INSERT INTO products (title,price) VALUES('computer',100),('phone',50)
-- SELECT * FROM products;

-- CREATE TABLE orders (
--    order_id SERIAL PRIMARY KEY,
--    order_number bigint,
-- 	order_date date
-- 	);

-- INSERT INTO orders ( order_number,order_date) VALUES(123,'11/11/2020'),(456,'12/12/2021');
-- SELECT * FROM orders;


-- CREATE TABLE products_orders(

--    order_id_fk INTEGER  NOT NULL REFERENCES orders (order_id)
--    ON DELETE CASCADE 
--    ON UPDATE CASCADE

--    product_id_fk INTEGER  NOT NULL 
--    REFERENCES products (product_id)
--    ON DELETE CASCADE 
--    ON UPDATE CASCADE
-- );
-- SELECT * FROM products_orders;

-- ---------------------------------------------------------------------
-- INSERT INTO  products_orders (order_id_fk, products_id_fk)
-- VALUES
-- (
-- 	(SELECT order_id FROM orders WHERE order_id = 1),
-- 	(SELECT product_id FROM products WHERE title = 'phone')
-- )

-- SELECT * FROM  products_orders;

-- SELECT title
-- FROM products_orders
-- INNER JOIN products ON product_id  = products_id_fk
-- INNER JOIN orders ON order_id = order_id_fk
-- WHERE title = 'phone'
-- GROUP BY title


