// Exercise 1 : Comparison
// 1. Create a function called compareToTen that takes a number as an argument.

// 2. The function should return a Promise that tests if the value of the given argument is less or greater than 10.

function compareToTen(number){
    return comparison = new Promise(function(resolve, reject){
        if(number > 10){
            resolve(`${number} is greater then 10, success!`)
        } else if(number < 10){
            reject(`${number} is less, error`)
        } else {
            throw new Error('not all items in the arr are numbers')
        }
    })
    
}

compareToTen(11)
.then((res)=> console.log(res))
.catch((err)=> console.log(err))

compareToTen(9)
.then((res)=> console.log(res))
.catch((err)=> console.log(err))

compareToTen("abc")
.then((res)=> console.log(res))
.catch((err)=> console.log(err))
