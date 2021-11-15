// Exercise 3 : Express

const exp = require('express')

const app = exp();

app.get('/', (req,res) => {
    res.send('<h1>This is an HTML tag</h1>')
})



app.listen(3000, ()=>{
    console.log('listening on port 3000')
});