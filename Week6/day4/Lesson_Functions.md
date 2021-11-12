-------------------------------

<!-- Return the fullname of the actor -->

-- CREATE or REPLACE FUNCTION fullname_actor(fn varchar(50), lan varchar(100)) 
-- RETURNS VARCHAR(100) AS 
-- $func$
-- DECLARE
--     new_name VARCHAR(100);
-- BEGIN
--    SELECT CONCAT(first_name, ' ', last_name) FROM actors WHERE actors.first_name = fn AND actors.last_name=lan INTO new_name;
--    RETURN new_name;
-- END;
-- $func$ 
-- LANGUAGE plpgsql;

-- SELECT fullname_actor(first_name, last_name) AS fullName FROM actors WHERE actors.first_name = 'George' AND actors.last_name='Clooney';

----------------------------------------------------

<!-- Update the number of oscars -->

-- return void: return nothing

-- CREATE FUNCTION add(numToAdd integer, firstN varchar(20), lastN varchar(20)) 
-- RETURNS void AS 
-- $$
-- BEGIN
--    UPDATE actors SET number_oscars = number_oscars + numToAdd WHERE actors.first_name = firstN AND actors.last_name=lastN;
-- END;
-- $$
-- LANGUAGE 'plpgsql';

-- DROP function add

-- SELECT add(10, 'George', 'Clooney')
-- SELECT * FROM actors;

-- --------------------------------------------------------------------

-- CREATE FUNCTION add_and_return(numToAdd integer, firstN varchar(20), lastN varchar(20)) 
-- RETURNS integer AS 
-- $$
-- DECLARE
--     new_num integer;
-- BEGIN
--    UPDATE actors SET number_oscars = number_oscars + numToAdd WHERE actors.first_name = firstN AND actors.last_name=lastN
--    RETURNING number_oscars INTO new_num;
--    RETURN new_num;
-- END;
-- $$
-- LANGUAGE 'plpgsql';

-- DROP function add_and_return

-- SELECT first_name, last_name, add_and_return(10, first_name, last_name) AS numberOscarsInTenYears FROM actors WHERE actors.first_name = 'George' AND actors.last_name='Clooney';


---

<!-- Exercise -->

Create a function, that returns the number of oscars depending on the first name and last name of the actors

<!-- Exercise -->

Add a column salary to the table, with a default 0
Set the salary of all the actors to 5000
Create a function that updates the salary of an actor depending on his first and last name. You should pass to the function the argument; salary, first name, last name. The salary of the actor should be salary * number of oscars.
Returns the new salary from the function