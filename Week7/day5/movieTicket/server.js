const express = require('express');
const env = require('dotenv');
// const db = require('./module')
const app = express();
env.config();


app.use('/home', express.static((__dirname + '/public')))

app.get('/order_seats', (req,res) => {
     let id = req.params 
     console.log(id);   
  
 
//   .then(row => {
//     res.json(row)
//   })
//   .catch(e => {
//     console.log(e);
//   })

})


app.listen(process.env.PORT, () => {
     console.log(`listen to port ${process.env.PORT}`)
});