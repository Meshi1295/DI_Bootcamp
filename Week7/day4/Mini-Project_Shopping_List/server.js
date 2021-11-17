const exp = require('express');
const env = require('dotenv');
const bp = require('body-parser');
const fs = require('fs');
const cors = require('cors')

const app = exp();
env.config();
app.use(cors());

app.use(bp.urlencoded({extended:false}));
app.use(bp.json());

app.use('/', exp.static(__dirname + '/public'))

app.post('/data', (req,res) => {
    console.log( req.body);
    let listShop = [];
    try{
      const f = fs.readFileSync('./shoppingList');
      listShop = JSON.parse(f)
    }
    catch(e){
      console.log(e);
    }
    finally{
        listShop.push(req.body)
    }
  
    fs.writeFile('./shoppingList', JSON.stringify(listShop), err=>{
      if(err){
        console.log('error writing to file');
      }
    })
    res.send({message:'OK'})
  })
   

app.get('/show', (req,res)=> {
    let showList = [];
    try{
      const f = fs.readFileSync('./shoppingList');
      showList = JSON.parse(f);
    }
    catch(e){
      res.send('data not found')
    }
    res.send(showList)
})

app.listen(process.env.PORT, ()=>{
    console.log(`listen to port ${process.env.PORT}`);
})