-- CREATE TABLE countries(
--  	country_id SERIAL ,
-- 	coutry_name VARCHAR (50),
--     country_actors smallint REFERENCES actors(actor_id)
--  )

-- INSERT INTO countries (coutry_name) 
-- VALUES('Israel'),('Marooco'),('India');

-- SELECT * FROM countries;
-- SELECT * FROM actors;

-- SELECT actors.first_name, actors.last_name ,actors.number_oscars , countries.coutry_name
-- FROM actors
-- RIGHT JOIN countries
-- ON actors.actor_id = countries.country_id


-- SELECT * FROM countries;




-- ON DELETE CASCADE/ ON DELETE RESTRICT

-- CREATE TABLE colors(
-- 	color_id SERIAL PRIMARY KEY,
-- 	color_name VARCHAR (20) 
-- );

-- INSERT INTO colors(color_name)VALUES('red'),('blue'),('yellow')
SELECT * FROM colors;

--  CREATE TABLE cars(
-- car_id SERIAL PRIMARY KEY,
-- car_color INTEGER REFERENCES colors (color_id) ON DELETE CASCADE/ ON DELETE RESTRICT,
-- car_name TEXT
-- );

SELECT * FROM cars;

--  INSERT INTO cars (car_color,car_name)
-- VALUES(1,'mazda'),(2,'voolvo'),(3, 'reno')

-- DELETE FROM colors where color_name = 'red';
--  DROP TABLE cars;

SELECT cars.car_name, colors.color_name
FROM cars 
INNER JOIN colors
ON cars.car_color = colors.color_id
GROUP BY cars.car_name, colors.color_name
 HAVING colors.color_name != 'red';






