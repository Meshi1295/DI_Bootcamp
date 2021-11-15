// Exercise 1 : HTTP

const http = require('http');

const server = http.createServer((req,res)=>{
 
res.setHeader('Content-Type', 'text/html')
res.end('<h1>My first response</h1><h2>My second response</h2><h3>My third response</h3>')

})

server.listen(3000, () => {
  console.log('listening on port 3000');
})


