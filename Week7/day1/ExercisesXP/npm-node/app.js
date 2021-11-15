const yourAge = require('./ main.js')
const sentence = require('./ main.js')




yourAge.age()
.then((res) => console.log(res))
.catch((e)=> console.log(e))

sentence.sentence()
.then((res) => console.log(res))
.catch((e)=> console.log(e))
