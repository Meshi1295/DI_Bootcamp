//-----------------------------
// Self Invoking Functions
// ----------------------------

// (function () {
//   console.log("in the self invoking func")
//   let btnFirst = document.getElementById("first");
//   let btnSecond = document.getElementById("second");

//   btnFirst.addEventListener("click", () => alert("you clicked the btn"))
//   btnSecond.addEventListener("mouseover", () => alert("you hovered over the btn"))
// })();

// // Exercise 1:
// // 1. Add in your html file a div with an id of container
// // 2. Create a self invoking function that takes one parameter
// // the name of the user
// // 3. When invoked, the function add the name of the user in a sentence in the div

// (function (userName) {
//   let divEl = document.getElementById('container');
//   let pEl = document.createElement('p');

//   pEl.textContent = `hi ${userName}`;
//   divEl.appendChild(pEl);


// })('meshi');



//-----------------------------
// NESTED FUNCTION
// ----------------------------

// let name = "John";
// the outer func : checkName() is going to be ran once
//the inner func, addExclamation() is going to run 3 times
// function checkName() {
//     let nameUppercase = name.toUpperCase();

//     function addExclamation() {
//         nameUppercase += "!";
//         console.log("in the addExclamation func NAME_TO_UPPERCASE: ", 
//         	nameUppercase);
//     };

//     addExclamation(); //JOHN!
//     addExclamation(); //JOHN!!
//     addExclamation(); //JOHN!!!
// }

// checkName(); 
//Exercise 2:
// 1. Create a function named `starWars` that takes no parameter.
// 2. The function should declare a variables `characters` equal to an empty array
// 3. In the startWars function, create a function named `createCharacter`.
// It receives two parameters, the first name and last name of a character.
// If the character doesn't have a last name, the default should be "Smith"
// 4. The createCharacter function should console.log the fullname of the character,
// and push it to the `characters` array.
// 5. Call the `createCharacter` function a few times inside the starWars function
// and console.log the `characters` array

// Second Part
// 6. Change the `starWars` function, to take one parameter, the name of the
// spaceship the characters are in
// 7. The `createCharacter` function should now console.log the fullname and spaceship
// of the character
// 8. Call the `starWars` function once with the spaceship "The Devastator", and another times
// with the spaceship "Republic Attack Cruiser". what happens?


// function starWars (spaceship) {
// 	let characters = [];
// 	function createCharacter(firstName, lastName = `Smith`) {
// 		console.log(`Character full name is:${firstName} ${lastName} ${spaceship}`)
// 		characters.push(`${firstName} ${lastName}`)
// 	}
// 	createCharacter(`Jhonatan`)
// 	console.log(characters)
// 	createCharacter(`Jhon`)
// 	console.log(characters)
// 	createCharacter(`Jhony`)
// 	console.log(characters)
// }
// starWars(`The Devastator`)
// starWars(`Republic Attack Cruiser`)


//-----------------------
// CLOSURE
//------------------------

let name = "John";

function checkName() {
    let nameUppercase = name.toUpperCase();
    console.log("in outer", nameUppercase)

    function addExclamation() {
        nameUppercase += "!";
        console.log("in inner,", nameUppercase);
    };
 
    return addExclamation
}

let inner = checkName(); // => JOHN
// THE INNER FUNCTION, EVEN IF CALLED IN THE GLOBAL SCOPE
// STILL HAS ACCESS TO THE SCOPE OF THE OUTER FUNCTION
inner() // => JOHN!
inner() //=> JOHN!!



//OTHER EXAMPLE

function multiply(number) {
    //"private" variables
    let myNumber = number;
    console.log("in outer", myNumber)

    function numberToMultiply (n) {
        myNumber *= n;
        console.log("in inner,", myNumber);
    };
 
    return numberToMultiply;
}

let multiplication = multiply(10); 
console.log("multiplication is equal to : " , multiplication) 
// //reference of the numberToMultiply function
multiplication(2)
//calling the inner function 

// the same as 
multiply(10)(2)



// Exercise 1
// Write a function called specialMultiply which accepts two parameters.
// If the function is passed both parameters,
// it should return the product of the two.
// If the function is only passed one parameter -
// it should return a function which can later
// be passed another parameter to return the product.
// You will have to use closure and arguments to solve this.

// Examples:
//     specialMultiply(3,4); // 12
//     specialMultiply(3)(4); // 12
//     specialMultiply(3); // function(){}....

function specialMultiply (num1, num2){
  let sum = num1 + num2


}

specialMultiply()