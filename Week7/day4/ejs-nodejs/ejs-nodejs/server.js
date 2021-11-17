const exp = require('express');
const env = require('dotenv');
const cors = require('cors');

const app = exp();
env.config();
app.use(cors());
app.set('view engine', 'ejs');

// app.use('/', exp.static(__dirname+'/public'))

app.get('/',(req,res)=>{
  res.render('index');
})

app.get('/about',(req,res)=>{
  res.render('about');
})

app.get('/shop',(req,res)=>{
  const products = [
    {id :1 ,name: 'iPhone', price:800},
    {id :2 ,name: 'iPad', price:650},
    {id :3 ,name: 'iWatch', price:750},
  ]
  res.render('shop', {
    data:products
  });
})

app.listen(process.env.PORT, ()=>{
  console.log(`listening to port ${process.env.PORT}`);
})
