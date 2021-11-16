const express = require('express')
const app = express()

app.listen(3000, () => console.log('listen to port 3000'))

app.get('/aboutMe/:hobby', (req,res) => {
    if (/^[A-Za-z]*$/gm.test(req.params.hobby)) {
        
        res.send(req.params);
        console.log("my hobby:",req.params.hobby);

      } else {

        res.status(404);
      }
})

app.get('/pic', (req,res) => {
    res.type('jpg')
    res.sendFile(__dirname + "/pic.jpg") 
})

app.use('/form',  express.static(__dirname + "/public"))

app.get('/formData', (req,res) => {
    console.log(req.query);
    res.send(`${req.query.name} from ${req.query.email} sent you a message ${req.query.msg}`)
})
//For example, “john@gmail.com sent you a message “Love your new website”.
