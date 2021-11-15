// Part I:
const num = require('./main.js')
const http = require('http');

const b = 5; 
let newNum;

num.number()
.then((res) => {
     newNum = res + b
    console.log("num is:",newNum)
}).catch((e)=> console.log(e))

// Part II:


// http.createServer((req,res)=>{
// console.log(num.number);
//     res.end(
//         `<p>My Module is:</p>
//         <p>${newNum}</p>
//         <h1>Hi there at the frontend</h1>`
//       );

// }).listen(3000,()=>{
//     console.log('listening to port 3000');
// })

// Part III
http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`<h1>The date and the time are : ${num.time()}</h1>`);
  })
  .listen(8080);