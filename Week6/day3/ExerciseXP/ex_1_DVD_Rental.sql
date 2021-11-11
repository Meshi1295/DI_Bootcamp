-- Exercise 1: DVD Rental
-- 1. Get a list of all film languages.
--1 SELECT name FROM language;


-- SELECT * FROM film;
-- SELECT * FROM language;



-- 2. Get a list of all films joined with their languages – select the following details : film title, description, and language name. 
--    Try your query with different joins:
-- A. Get all films, even if they don’t have languages.
-- B. Get all languages, even if there are no films in those languages.

-- SELECT film.title, language.name , film.description
-- FROM film
-- LEFT JOIN language
-- ON language.language_id = film.language_id
-- GROUP BY film.title, language.name , film.description


-- SELECT film.title, language.name , film.description
-- FROM film
-- RIGHT JOIN language
-- ON language.language_id = film.language_id
-- GROUP BY film.title, language.name , film.description


-- 3. Create a new table called new_film with the following columns : id, name. Add some new films to the table.

-- CREATE TABLE new_film (
-- 	id SERIAL PRIMARY KEY,
-- 	name text
-- );

-- INSERT INTO new_film (name) 
-- VALUES('Shir HaShemot'),('Bonnie and Clyde'),('Reservoir Dogs');
-- SELECT * FROM new_film;



-- 4. Create a new table called customer_review, which will contain film reviews that customers will make.
--    Think about the DELETE constraint: if a film is deleted, it’s review should be automatically deleted.
--    It should have the following columns:
-- A. review_id – a primary key, non null, auto-increment.
-- B.film_id – references the new_film table. The film that is being reviewed.
-- C. language_id – references the language table. What language the review is in.
-- D. title – the title of the review.
-- E. score – the rating of the review (1-10).
-- F. review_text – the text of the review. No limit on the length.
-- G. last_update – when the review was last updated.
-- SELECT * FROM new_film

-- CREATE TABLE customer_review (
-- 	review_id SERIAL PRIMARY KEY NOT NULL,
-- 	film_id integer REFERENCES	new_film(id) ON DELETE CASCADE,
-- 	language_id SMALLINT ,
-- 	 title TEXT,
-- 	score SMALLINT ,
-- 	review_text text ,
-- 	last_update timestamp
-- );
-- SELECT * FROM  customer_review;
-- SELECT * FROM  new_film;

-- DROP TABLE  new_film

-- 5. Add 2 movie reviews. Make sure you link them to valid objects in the other tables.

-- INSERT INTO customer_review (film_id,language_id,title,score,review_text,last_update)
-- VALUES (6,	1	,(SELECT name FROM new_film WHERE name = 'Reservoir Dogs')  ,1,'Not recommended','2017-07-23  13:10:11'),
-- (5, 1,(SELECT name FROM new_film WHERE name = 'Bonnie and Clyde')  ,1,'Not recommended','2014-07-23  13:10:11');

-- 6. Delete a film that has a review from the new_film table, what happens to the customer_review table?
-- DELETE FROM new_film WHERE id= 5;



