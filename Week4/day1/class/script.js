// Exercise 1:
// Function that takes 2 parameters, first name and last name
// The point of the function is to console log the fullName
// If you don't have any first name, by default it should be equal to "John", if we don't have any last name by default = "Smith"
checkValue();
checkValue("kHALESSI");
checkValue("Lea", "Doe")

function checkValue(firstName = 'John', lastName = 'Smith') {
    console.log("full name:",firstName, lastName);

}

// Exercise 2:

function compare(a, b, operator) {
    if (operator === "+") {
        return a+b;
    } else if (operator === "-") {
        return a-b;
    } else {
    	return "ERROR";
    }
    console.log("end of func")
}

let resultA = compare(2,3,"+");
console.log(`The result of the function is ${resultA}`) //5

let resultB = compare(2,3,"-");
console.log(`The result of the function is ${resultB}`) // -1

let resultC = compare(2,3,"*");
console.log(`The result of the function is ${resultC}`) // ERROR




// Write next to each console log what will be the result
// console.log("end of func") going to be displayed? // no

// Exercise 3:

//1.  Create an array that holds your 3 favorite colors
// 2.  Use array destructuring to save the 3 colors into 3 differents variables
// 3. Try to create only 4 variables instead of 3, what happens ?


// 1. Create an object let family = {name:"Smith", members:3, pet: true}
// 2. Use object destructuring to save the 3 values into 3 differents variables

// let colors = ["red", 'blue', 'black'];

// let [first,second,theerd] = colors
// console.log(first)
// console.log(second);
// console.log(theerd);
// console.log(nam4); //undifind



let family = {name:"Smith", members:3, pet: true}

let {name, members, pet} = family;
console.log(name);
console.log(members);
console.log(pet);


// Exercise 4
// 1. Greet the user (ie. using the username as an argument),
// * first by using function declarations
// * then function expression,
// * then arrow function

function user (username){
    console.log(username);

}
user("meshi");

let user1 = function (username){
    console.log(username);

}
user1('amit');

const user2 = username => console.log(username);
user2('Lise')

//-------------------------------------------------------------------------------------------
function greeting(username) {
    console.log("Hello and welcome " + username);
  }
  const greet = function (username) {
    console.log("Hello and welcome " + username);
  };
  let greetArrow = (username) => "Hello and welcome " + username;
  greeting("ela");
  greet("Lior");
  console.log(greetArrow("jhon"));
  // Exercise2:
  // Create a button in the HTML file
  // In the JS file, add an event listener to this button, do the exercise 3 times
  // the callback function should be a function declaration
  // the callback function should be an anonymous function
  // the callback function should be an anonymous ARROW function
  let btn1 = document.getElementById("1");
  let btn2 = document.getElementById("2");
  let btn3 = document.getElementById("3");
  //////
  btn1.addEventListener("click", btn1action);
  function btn1action(event) {
    alert(`hello i am ${event.target.textContent} Btn`);
  }
  ///////
  let btn2action = function (event) {
    alert(`hello i am ${event.target.textContent} Btn`);
  };
  btn2.addEventListener("click", btn2action);
  ////////////////////////////////
  // function testing() {
  //   var champion = "javascript.";
  // }
  // testing();
  ////
  btn3.addEventListener("click", (event) =>
    alert(`hello i am ${event.target.textContent} Btn`)
  );
  ////---------------------------------------------------------------------------------

// Exercise2:
// 1. Create a button in the HTML file
// 2. In the JS file, add an event listener to this button, do the exercise 3 times
// a. the callback function should be a function declaration
// b. the callback function should be an anonymous function
// c. the callback function should be an anonymous ARROW function

let btn = document.getElementById('btn')

btn.addEventListener('click', callBtn);
function callBtn (){
console.log('function declaration');
}
callBtn()


btn.addEventListener('click', function (){
    console.log('anonymous function');
});

btn.addEventListener('click', () => {
    console.log('anonymous ARROW function');
})




// Function declaration VS function expression
// --------------------
// --- Functions Declaration
// --------------------

squareOne(2) 

//HOISTED TO THE TOP OF THE SCOPE
function squareOne (x){
	console.log("square")
	return x * x;
}

squareOne(2)

// --------------------
// --- Functions expression
// --------------------

// anonymous function 
// assigned to a variable

//NOT HOISTED
const squareTwo = function (x) {
	console.log("square")
	return x * x;
}

squareTwo(2)


// ANONYMOUS ARROW FUNCTIONS
function (a) {
	return a + 100;
}

// The same as
(a) => {
  return a + 100;
}

(a) => a + 100;

a => a + 100;

// ARROW FUNCTIONS
// --------------------
// --- ES6 arrow functions
// --------------------

// we assign an anonymous arrow function to the squareA variable
const squareA = (x) => { return x * x; };
console.log("squareA :", squareA(2));

// squareB is exactly the same as squareA : 1 PARAMETER
const squareB = x => x * x;
console.log("squareB : ", squareB(2))

// 2 PARAMETER
const squareC = (x,y) => x * y;
console.log("squareC : ", squareC(2,1))

// NO PARAMETER
const squareD = () => "hello";
console.log("squareD : ",squareD())

// IF THE ARROW FUNCTION NEEDS TO DO ADDITIONAL CODE
// WE NEED CURLY BRACKETS AND WE NEED TO SPECIFY WHAT WE WANT TO RETURN
const squareE = x => {	
	x++
	return x * x;
}

console.log("squareE : ",squareE(2));

let age = 21;
// TERNARY OPERATOR
//         condition ? if the condition is true : else
let pass = age >= 21 ? "Great" : "Too bad"; //"Great"
console.log("pass : ", pass)


// ARROW FUNCTION WITHOUT ANY PARAMETER
// THAT RETURNS THE RESULT OF A TERNARY OPERATOR
const check = () => age >= 21 ? "Great" : "Too bad";
console.log("check : ",check()) //"Great"


// Code on for each
let classmates = ["Josh", "Lily", "Sophie", "Mark"]; 

classmates.forEach(showClassmates)
function showClassmates(classmateName,classmateIndex, classmateArray){
	console.log("classmateName" , classmateName)
	console.log("classmateIndex" , classmateIndex)
	console.log("classmateArray" , classmateArray)
}

// Other example with for each
const showClassmates = function (element, index) {
	console.log(element, index)
}

classmates.forEach(showClassmates)

classmates.forEach((element, index) => {
	console.log(element, index)
})




// Exercise with for each
classmates.forEach((element, index) => {
	if (element === "Sophie"){
		classmates[index] += "&";
	} else {
		classmates[index] += "!";
	}
})


// TERNARY OPERATOR
classmates.forEach((element, index) => 
   element === "Sophie" ? classmates[index] += "&" : classmates[index] += "!"
)

console.log(classmates)


// Some and Every method
let myArr = [2,4,6];

// is at least one element even => if yes = return true and stop
// the method from executing
let resultOne = myArr.some((element) => {
	console.log(element);
	return element%2 == 0
})

console.log(resultOne)

// are all the elements even => if yes => returns true
let resultTwo = myArr.every((element) => {
	console.log(element);
	return element%2 == 0
})

console.log(resultTwo)