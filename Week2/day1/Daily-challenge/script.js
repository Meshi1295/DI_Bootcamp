//////// Exercise 1: //////
let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

let arr = fruits.shift();
console.log(arr); // Banana
console.log(fruits); // ["Apples", "Oranges", "Blueberries"]

let fruits1 = fruits.push("Kiwi")
console.log(fruits1); //["Apples", "Oranges", "Blueberries","Kiwi"]

/////Remove “Apples” from the array.????//////
fruits.splice(0,1)

let reversed = fruits.reverse();
console.log(reversed); //["Kiwi", "Blueberries", "Oranges", "Apples"]



//////// Exercise 2: //////////
let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
let Oranges = moreFruits[1][1][0]
console.log(Oranges); //"Oranges"