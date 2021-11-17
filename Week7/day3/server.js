// create nodjs server
// connect to db CRUD
// .get('/api/countries') -> all countries
// .put('/api/countries/:countryName') -> insert to table
// .delete('/api/countries/:countryId') -> delete from table
// .post('/api/countries) -> update table


const exp = require('express');
// const env = require('dotenv');
const moduleDb = require('./module.js')

const app = exp()
// env.config();

app.listen(3000, () => {
    console.log('listen to port 3000')
    })

app.use('/' , exp.static(__dirname + '/public'));


app.get('/api/countries', (req,res) => {
    moduleDb.allCountries()
    .then(data => res.json(data))
    .catch(e => console.log(e))
})

app.put('/api/countries/:countryName', (req,res) => {
    moduleDb.insertCountry(req.params.countryName)
    .then(data => res.json(data))
    .catch(e => console.log(e))
})




// const auth = (req, res, next) => {
//     console.log('auth midlleware');
//     const user = req.query.user;
//     console.log(user);
//     if(user == 'admin'){
//       return res.sendFile(__dirname+'/public/about.html');
//       // return res.redirect('/register');
//     }
//     next();
//   }
//   // app.use(auth); // all
//   // app.use('/login', auth) // just for login route
//   app.get('/login', auth, (req,res)=>{
//     res.send('Welcome');
//   })


// db('country')
//  .insert(
//    [
//     {
//       country: 'DI Israel'
//     }
//   ]
// )
// .del()
// .where({country_id:113})
// .orderBy('country_id', 'desc')
// .update({country:'Bangala'})
// .returning('*')
// .then(data => {
//   console.log(data);
// })
// .catch(e => {
//   console.log(e);
// })



// db.select('*').from('country')
// .then(data => {
//   console.log(data);
// })
// .catch(e => {
//   console.log(e);
// })








