const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      port: '5432',
      user: 'postgres',
      password: 'root12345',
      database: 'dvdrental'
    }
  })

function allCountries(){
    return db('country')
 }

function insertCountry (name){
return db('country')
 .insert(
   [
    {
      country: name
    }
  ]
)
.returning('*')
}


 module.exports = {
    allCountries,
    insertCountry
 }