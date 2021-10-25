// Exercise 5 : Is It A String ?
// Write a JavaScript function that checks whether the value of an input is a string or not.



let isString = (type) => {
    return typeof type ===  "string" ;
}


console.log(isString('hello')); 
//true
console.log(isString([1, 2, 4, 0]));
//false