// const exp = require('express');
// const users = require('./fetchUsers');

// const app = exp();

// app.listen(5000, ()=>{
//   console.log('listen to port 5000');
// })
// // console.log(__dirname);
// app.use('/',exp.static(__dirname + '/public'));

// app.get('/robots',(req,res)=>{
//   users.getUsers()
//   .then(data => {
//     res.json(data);
//   })
//   .catch(e => {
//     console.log(e);
//   })
// })


// -----------login example---------------
const exp = require('express');
// const bp = require('body-parser');

const app = exp();

// // parse application/x-www-form-urlencoded
// app.use(bp.urlencoded({ extended: false }))
// // parse application/json
// app.use(bp.json());
app.use(exp.urlencoded());
app.use(exp.json());

app.listen(5000, ()=>{
  console.log('listen to port 5000');
})
// console.log(__dirname);
app.use('/',exp.static(__dirname + '/public'));

app.get('/login', (req,res)=>{
  console.log(req.headers);
  console.log(req.query.username);
  console.log(req.query.password);
  res.send(`hello ${req.query.username}`);
})

app.post('/login',(req,res)=>{
 
  res.json({name:req.body.username });
})