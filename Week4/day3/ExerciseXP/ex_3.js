// Exercise 3 : Star Wars
// 1. Use the reduce() method to combine all of these into a single string.

let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

let newEpic = epic.reduce((a , b) => {
    return a + " " + b
})
console.log(newEpic);


// one line
let newEpic = epic.reduce((a , b) => a + " " + b )
console.log(newEpic);


//1 loop
a = 'a'
b = 'long'
return 'a'+ " " + "b" // a long 

// 2 loop 
a = 'a long'
b = 'time'
return 'a'+ " " + "b" // a long time

// loop 3
a = 'a long time'
b = 'ago'
return 'a'+ " " + "b" // a long time ago 

//ect...


