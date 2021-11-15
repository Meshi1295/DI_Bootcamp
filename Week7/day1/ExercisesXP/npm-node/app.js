const yourAge = require('./ main.js')
const sentence = require('./ main.js')
const nodeMon = require('./ main.js')




yourAge.age()
.then((res) => console.log("yourAge",res))
.catch((e)=> console.log(e))

sentence.sentence()
.then((res) => console.log("sentence",res))
.catch((e)=> console.log(e))

nodeMon.mon()
.then(res => console.log("nodeMon",res))
.catch((e)=> console.log(e))
