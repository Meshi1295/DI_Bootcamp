// Exercise 2 : Closure

// 1. Analyse the code below, and before executing it, predict the outcome of the last line.


//13
const addTo = x => y => x + y;
var addToTen = addTo(10);
console.log(addToTen(3));
