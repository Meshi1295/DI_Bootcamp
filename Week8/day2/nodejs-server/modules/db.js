const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
      host:'127.0.0.1',
      port: '5432',
      user: 'postgres',
      password: 'root12345',
      database: 'dvdrental'
    }
  })


  const getCountries = () => {
    return db('country')
    .select('country_id','country')
    .orderBy('country')
  }

  const getCities = (id) => {
    return db('city')
    .select('city_id', 'city')
    .where({country_id:id})
    .orderBy('city')
  }

  module.exports = {
    getCountries,
    getCities
  } 