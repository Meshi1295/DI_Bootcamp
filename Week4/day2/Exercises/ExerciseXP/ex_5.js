// Exercise 5 : Composing
// Analyse the code below, and before executing it, predict the outcome of the last line.

//16
const compose = (me, you) => (sister) => me(you(sister));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;

console.log(compose(add1, add5)(10));