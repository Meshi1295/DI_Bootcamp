// Exercise 2 : HTTP & JSON

const http = require('http');

 http.createServer((req,res)=>{

    const user = {
        firstName: 'John',
        lastName: 'Doe'
    }

    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(user))

}).listen(8080,() => {
    console.log('listening on port 8080');
})