let getFile = require('./script.js')

getFile.getFile()
.then(data => console.log(data))
.catch((e)=> console.log(e))

