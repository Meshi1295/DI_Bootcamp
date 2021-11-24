const express = require('express');
const env = require('dotenv');
// const db = require('./module')
const app = express();
env.config();


app.use('/home', express.static((__dirname + '/public')))

app.get('/order_seats/:id', (req,res) => {
     let id = req.params 
     console.log(id);   
  

})


app.listen(process.env.PORT, () => {
     console.log(`listen to port ${process.env.PORT}`)
});