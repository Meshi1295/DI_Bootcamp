const express = require('express');
const env = require('dotenv');
const cors = require('cors');
const DB = require('./modules/db')
env.config()

const app = express()
app.use(cors());


app.get('/countries', (req, res) => {
    return DB.getCountries()
    .then(countries => res.json(countries))
    .catch(e => console.log(e))    
})

app.get('/cities/:countryID', (req,res)=>{
    DB.getCities(req.params.countryID)
    .then(cities => res.json(cities))
    .catch(e => console.log(e))   
    
})

app.listen(process.env.PORT, () => {console.log(`listen to port ${process.env.PORT}`)})