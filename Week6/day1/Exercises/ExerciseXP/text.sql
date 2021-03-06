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


-- Exercise 1 : Items And Customers------

-- CREATE TABLE items( 
-- 	item VARCHAR(50) NOT NULL,  
-- 	price REAL NOT NULL );
	

-- SELECT * FROM items;

-- INSERT INTO items(item,price)
-- VALUES('Small Desk',100)

-- INSERT INTO items(item,price)
-- VALUES('Large desk',300); 

-- INSERT INTO items(item,price)VALUES('Fan',80);


-- 	CREATE TABLE customers (
-- 	id_customer SERIAL PRIMARY KEY,
-- 	first_name VARCHAR (50) NOT NULL,
-- 	last_name VARCHAR (50) NOT NULL

-- );
	
-- 	SELECT * FROM customers;

-- INSERT INTO customers (first_name,last_name)
-- VALUES ('Greg','Jones'),('Sandra','Jones'),('Scott','Scott'),('Trevor' ,'Green'),('Melanie' ,'Johnson');


-- // 3
-------- Use SQL to fetch the following data from the database:
-- All the items => -- 
-- SELECT * FROM items;

-- All the items with a price above 80 (80 not included).
-- SELECT item FROM items WHERE price > 80;

-- All the items with a price below 300. (300 included)
-- SELECT item FROM items WHERE price <= 300;


-- All customers whose last name is ‘Smith’ (What will be your outcome?).
-- No result will appear because there is no one whose last name is Smith
-- SELECT * FROM customers WHERE last_name = 'Smith';

-- All customers whose last name is ‘Jones’. => 2
-- SELECT * FROM customers WHERE last_name = 'Jones';
-- 1	"Greg"	"Jones"
-- 2	"Sandra"	"Jones"

-- All customers whose firstname is not ‘Scott’. //4
-- SELECT * FROM customers WHERE first_name != 'Scott';
-- 1	"Greg"	"Jones"
-- 2	"Sandra"	"Jones"
-- 4	"Trevor"	"Green"
-- 5	"Melanie"	"Johnson"   \\4



