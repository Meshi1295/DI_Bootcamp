// Exercise 3 : Star Wars
// 1. Use the reduce() method to combine all of these into a single string.

let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// let newEpic = epic.reduce((a , b) => {
//     return a + " " + b
// })
// console.log(newEpic);


// one line
let newEpic = epic.reduce((a , b) => a + " " + b )
console.log(newEpic);
