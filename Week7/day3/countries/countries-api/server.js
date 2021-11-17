const exp = require('express');
const cors = require('cors');
const env = require('dotenv');
const DB = require('./modules/db');

const app = exp();
env.config();
// request => midlleware => response
app.use(cors());
app.use(exp.urlencoded());
app.use(exp.json());

app.use('/', exp.static(__dirname+'/public'))

app.listen(process.env.PORT, () => {
  console.log(`listening to port ${process.env.PORT}`);
})

app.get('/api/countries', (req,res) => {
  DB.getAllCountries()
  .then(countries => {
    res.json(countries)
  })
  .catch(e => {
    console.log(e);
  })
})

app.put('/api/countries/:countryName',(req,res)=>{
  DB.insertCountry(req.params.countryName)
  .then(row => {
    res.json(row)
  })
  .catch(e => {
    console.log(e);
  })
})

app.delete('/api/countries/:countryId',(req,res)=>{
  DB.deleteCountry(req.params.countryId)
  .then(row => {
    res.json(row)
  })
  .catch(e => {
    console.log(e);
  })
})

app.post('/api/countries', (req,res)=> {
  DB.updateCountry(req.body.country_name,req.body.country_id)
  .then(row => {
    res.json(row)
  })
  .catch(e => {
    console.log(e);
  })
})
