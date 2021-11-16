const exp = require('express');
const app = exp();

app.listen(3000, ()=>{console.log('listen to port 3000')})

app.use('/',exp.static(__dirname + '/public'));


const user = {
    firstName: "John",
    lastName: "Doe",
  };
  
  app.get("/user", (req, res) => {

    res.send(user);
    console.log(user);
  });
  
  app.get("/:id", (req, res) => {
    console.log(req.params);
    res.send(req.params);
  });
  