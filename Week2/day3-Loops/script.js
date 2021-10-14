for ( let i = 0; i < 15; i++){
    if ( i % 2 == 0 ){
        console.log(`${i} The number is even.`);
    } else {
        console.log(`${i} The number is odd.`);
    }
}

let shopping = ["apple", "pear", "melon", "banana"];
// 1. Loop over this array, and add to the array the word in plural ("s" at the end) of every fruit

for (let i = 0; i < shopping.length; i++){
    shopping[i] += 's'
}
console.log(shopping);



// ------------------
// GLOBAL AND LOCAL SCOPE
// ------------------

// global scope
let username = "Leana";

// // local scope
// // local scope can have access to the global scope
// // we can modify the value of a global variable inside a local scope

if (2<3){
	console.log("username is", username);
	username = "John";
	console.log("username is", username);
}

// // global scope
console.log("username is", username);


// the global scope CANNOT ACCESS variables declared in the local scope
//global scope

// // local scope
if (2<3){
	// I declare a variable inside the local scope => local variable
	const pet = "cat";
	console.log("pet is", pet);
}

// global scope
console.log("GLOBAL SCOPE pet is", pet); //not defined

// constant variable
const PET = "dog";
PET = "cat";


// block scope
if (2<3){
	// I declare a variable inside the local scope => local variable
	var pet = "cat";
	console.log("pet is", pet);
}

// global scope
console.log("GLOBAL SCOPE pet is", pet);  //defined

// blocks like if, for, while => BLOCK SCOPE
// functions => FUNCTION SCOPE

// ------------------
// LOOP
// ------------------

console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");

// for loop : know ending point 
// 	ex : say hello 10 times

// while loop : only if the condition is true

// do while loop


// for loop

// for (statement 1; statement 2; statement 3) {
//   // code block to be executed
// }

// * statement 1 : starting point
// * statement 2 : before running the loop, check if the condition is true
// * statement 3 : what do I need to do after each loop


// variable = variable + 1
// variable += 1
// variable ++

// ------------------
// BLOCK SCOPE
// ------------------

for (let counter = 1; counter <= 5; counter++){
	console.log("hello counter is", counter)
}

console.log("outside the loop")

// //steps

// 1st loop : counter = 1
// => 1 <= 5 => true
// console.log("hello counter is ", 1)

// counter = 2
// 2nd loop : counter = 2
// => 2 <= 5 => true
// console.log("hello counter is ", 2)

// counter = 3
// 3rd loop : counter = 3
// => 2 <= 5 => true
// console.log("hello counter is ", 3)

// counter = 4
// 4th loop : counter = 4
// => 4 <= 5 => true
// console.log("hello counter is ", 4)

// counter = 5
// 5th loop : counter = 5
// => 5 <= 5 => true
// console.log("hello counter is ", 5)

// counter = 6
// 6th loop : counter = 6
// => 6 <= 5 => false
// GO OUT OF THE LOOP

// ------------------
// exercise of the DI platform
// ------------------

for (let i = 0; i < 15; i++) {
	if (i%2 === 0){
		console.log(`${i} is even`);
	} else {
		console.log(`${i} is odd`);
	}
}


// let shopping = ["apple", "pear", "melon"];

// console.log(shopping[0]);
// console.log(shopping[1]);
// console.log(shopping[2]);

for (let index = 0; index < 3; index++) {
	console.log(shopping[index])
}

// STEPS 

// 1st loop: index = 0
// => 0 <= 3 => true
// console.log(shopping[0]) => "apple"

// index = 1
// 2nd loop: index = 1
// => 1 <= 3 => true
// console.log(shopping[1]) => "pear"


// index = 2
// 3rd loop: index = 2
// => 2 <= 3 => true
// console.log(shopping[2]) => "melon"


// index = 3
// 4th loop: index = 3
// => 3 < 3 => false
// OUT THE LOOP

// array of objects
let shopping = [
	{
		apple: 2,
		pear: 2,
		melon: 2,
	},
	{
		apple: 2,
		pear: 2,
		melon: 2,
	},
];

// ------------------
//EXERCISE 1
// ------------------

let shopping = ["apple", "pear", "melon", "banana"];

// // 1. Loop over this array, and transform the words in plural
// // ("s" at the end) of every fruit

// // output = ["apples", "pears", "melons", "bananas"];

for (let i = 0; i < shopping.length; i++) {
	// the same as
	// shopping[i] = shopping[i] + "s";

	// the same as
	// shopping[i] = `${shopping[i]}s";

	// the same as
    shopping[i] += "s";
}

// after the loop finished running
console.log(shopping)

// STEPS

// 1rst loop
// i = 0

// // we are targeting the element at position 0
// the element at the position 0 = "apple" + "s"


// 2nd loop
// i = 1

// the element at the position 1 = "pear" + "s"

// ------------------
//EXERCISE 2
// ------------------

let prices = [23, 15, 34, 10];
// // // 1. Loop over this array, and console.log the sum of the prices
// // // 2. Where should you console log

let sum = 0;

for (let i = 0; i < prices.length; i++){
	sum += prices[i]
}

console.log(sum)

// STEP

// sum starts at 0

// 1rt loop 
// i = 0
// i < 4 => true
// sum = 0 + 23 
// sum = 23

// 2nd loop 
// i = 1
// i < 4 => true
// sum = 23 + 15

// ------------------
// FOR OF AND FOR IN
// ------------------

let colors = ["blue", "yellow", "red"];

// in a for in loop
// using an array

for (let index in colors) {
   console.log(index); 
   console.log(colors[index]) 
}

// used in arrays
for (let element of colors){
	console.log(element); 
}

let person = {
	fname:"John", 
	lname:"Doe", 
	age:25
};

// used in objects
// used in arrays also but less
for (let element in person){
	console.log(person[element])
}

// ------------------
// while loop
// ------------------

let count = 1;

while (count < 10) {
    console.log(count);
    count +=2;
}


// 1
// 3
// 5
// 7
// 9
// 11 -- not displayed

// count = 1;
// count<10 => true
// count = 3

// count<10 => true
// count = 3



//for loop------------------------------------------
let toDos = [
    "eat",
    "run",
    "good",
    "amir"
];

for (let i = 0; i < toDos.length; i++){
    toDos[i] = toDos[i] + "!"
}

//while loop-----------------------------------------
let container = 10;

while (container > 0){
    console.log(container);
    container-- ; 
}

//do while ---------------------------------------------
