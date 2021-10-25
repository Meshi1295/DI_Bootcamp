// Exercise 3 : Currying

// Analyse the code below, and before executing it, predict the outcome of the last line.
//31

const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
console.log(curriedSum(30)(1));