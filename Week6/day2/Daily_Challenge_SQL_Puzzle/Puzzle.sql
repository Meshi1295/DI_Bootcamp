-- What will be the OUTPUT of the following statement?

-- Q1. 
--  SELECT COUNT(*) 
    -- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )
    -- //count 0

-- Q2. 
--  SELECT COUNT(*) 
-- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )
-- // count 2

-- Q3. 
-- SELECT COUNT(*) 
-- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )
    -- //count 0

 
