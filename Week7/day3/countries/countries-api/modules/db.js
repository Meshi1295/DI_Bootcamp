const knex = require('knex');
const env = require('dotenv');

env.config({path:'./.env'})

/*
* connection string to postgers database
* author: zivuch
* created : 16.11.2021
* update by: meshi
* update date: 17.11.2021
*/
const db = knex({
  client: 'pg',
  connection: {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NANE
  }
})

const getAllCountries = () => {
  return db('country')
  .select('country_id','country')
  .orderBy('country', 'asc')
}
const insertCountry = (country_name) => {
  return db('country')
  .insert({country:country_name})
  .returning(['country_id','country']);
}

const deleteCountry = (country_id) => {
  return db('country')
  .where({country_id:country_id})
  .del()
  .returning('*')
}

const updateCountry = (country_name,country_id) => {
  return db('country')
  .where({country_id:country_id})
  .update({country:country_name})
  .returning('*')
}

module.exports = {
  getAllCountries,
  insertCountry,
  deleteCountry,
  updateCountry
}
