-- Use city_info table, Use aggregate functions
-- 1. How many rows per city does the table have ? 
-- 2. What is the average dust index in the city of Boston between 01/03/2015 and 05/03/2015?
-- 3. How many rows does the table have about the city "San Francisco" ?
-- 4. Where and when (only hour) it's the noisiest in the world?.


-- SELECT city, COUNT(city) FROM city_info GROUP BY city;
-- SELECT ROUND(AVG(dust),2) FROM city_info WHERE city='Boston' AND timestamp BETWEEN '2015-03-01' AND '2015-05-01' 
-- SELECT city, COUNT(*) FROM city_info GROUP BY city HAVING city='San Francisco';
-- SELECT EXTRACT(HOUR from timestamp), city, MAX(sound) FROM city_info GROUP BY city, sound, timestamp ORDER BY sound DESC LIMIT 1;