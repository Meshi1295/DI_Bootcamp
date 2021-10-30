//Exercise reduce
// 1. Turn an array of voter objects into a count of how many people voted
// 2. Do the exercise using reduce only
// 3. Then do it by chaning map and reduce
let voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Bob' , age: 30, voted: true},
];

let newVoters = voters.reduce((a,e) => {
    let voted = e.voted
    if(voted === true){
        return a + 1
    } else {

        return a
    }
},0) 

console.log(newVoters);



// Code on reduce
const students = [
	{name: 'Rich', score: 33}, 
	{name: 'Peter', score: 55},
	{name: 'John', score: 75}
];

let totalScore = students.reduce((accumulator, element, index, arr) =>{
	// console.log(`In the ${index+1} loop`)
	// console.log("accumulator = ", accumulator);
	// console.log("score of the student = ", element.score);
	return accumulator+element.score
}, 0)

console.log("total score :", totalScore)

// 1st loop:
// accumulator	= 0
// element.score = 33
// return 0+33 => return 33


// 2nd loop
// accumulator	= 33;
// element.score = 55;
// return 33+55 => return 88

// 3rd loop
// accumulator	= 88
// element.score = 75
// return 88+75

//---------------------------------

let voters = [
    { name: "Bob", age: 30, voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: false },
    { name: "Sam", age: 20, voted: false },
    { name: "Bob", age: 30, voted: true },
  ];
  let sumVoters = voters.reduce((total, el) => {
    if (el.voted === true) {
      return total + 1;
    } else {
      return total;
    }
  }, 0);
  console.log(sumVoters);
  let sumVotersFR = voters
    .filter((v) => v.voted === true)
    .reduce((total, v) => total + 1, 0);
  console.log(sumVotersFR);
  let sumVotersMR = voters
    .map((v) => v.voted)
    .reduce((total, v) => (v === true ? total + 1 : total), 0);
  console.log(sumVotersMR);
  let sumVotersFMR = voters
    .filter((v) => v.voted === true)
    .map((v) => v.name)
    .reduce((total) => total + 1, 0);
  console.log(sumVotersFMR);

//---------------------------------
Solution of the Reduce exercises
// -----------------------
// ---- Star wars exercise XP 3
// -----------------------

let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

let sentence = epic.reduce((accumulator, element) => `${accumulator} ${element}`)
console.log(sentence)

// -----------------------
// ---- Voters exercise
// -----------------------

// //Exercise
// 1. Turn an array of voter objects into a count of how many people voted
// 2. Do the exercise using reduce only
// 3. Then do it by chaning map and reduce

let voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Bob' , age: 30, voted: true},
];


//SOLUTION WITH REDUCE
let nbOfPeopleWhoVoted = voters.reduce((total, element) => {
	if (element.voted === true){
		return ++total
	} else {
		return total
	}
}, 0)
console.log(`The nb of ppl that voted is ${nbOfPeopleWhoVoted}`)


//ternary operator
let nbOfPeopleWhoVotedTernary = voters.reduce((total, element) => element.voted? ++total : total,0)
console.log(`The nb of ppl that voted is ${nbOfPeopleWhoVotedTernary}`)

//SOLUTION BY CHAINING FILTER AND REDUCE

let votersWhoVoted = voters.filter((element) => element.voted === true)
console.log("votersWhoVoted", votersWhoVoted)
//(3) [{…}, {…}, {…}]
// 0: {name: 'Bob', age: 30, voted: true}
// 1: {name: 'Jake', age: 32, voted: true}
// 2: {name: 'Bob', age: 30, voted: true}

let nbOfPeople = votersWhoVoted.reduce((total) => ++total ,0)
console.log("nbOfPeople", nbOfPeople)

//Chaining filter and reduce
let nbOfPeopleChaining = voters
					.filter((element) => element.voted === true)
					.reduce((total) => ++total ,0)

console.log("nbOfPeopleChaining", nbOfPeopleChaining)
// -------------------------
//  Object Destructuring
// -------------------------
// 1
function getDetails({name, house,  goodstudent}) {
	console.log(name, house,  goodstudent);
}

getDetails({name: 'Harry Potter',house: 'Gryfindor',goodstudent : false})



// 2


function getDetails(destructuring) {
	//console log all the data
}
getDetails({name: 'Hermione Granger', house: 'Gryfindor', friend :  {friendName : 'Harry Potter', age : 20}})


//3 
// 1. Write a function called displayName() that takes an object as an
//    argument and prints the person's first and last name.
//    Use object destructuring in the function argument.
//    And also, use template strings when printing the first and last name.
//    Use the object below:
// 2. Change the displayName() to print the person's first and last name
// the houses location and the value of those houses
const person = {
    first: 'Elon',
    last: 'Musk',
    housesLocation : ["new york", "paris"],
    twitter: '@elonmusk',
    company: 'Space X',
    houses : {
      amount: 2,
      value : "5Million"
    }
}




//-------------------
// Exercise 2
// 1. Do those exercises and push them to your github
// http://curric.rithmschool.com/springboard/exercises/js-destructuring/

// --------------------------------------
Code of today about objects
//---------------------
//Object Prototype
// -------------------

// OBJECT LITERAL
let firstCharacter = {
	name: 'Hermione Granger',
	house: 'Gryfindor',
	friends: {
		friendName : "Harry",
	}
};

console.log(Object)
console.log(Object.prototype)
console.log(Object.prototype.constructor)
console.log("keys", Object.keys(firstCharacter))
console.log("values", Object.values(firstCharacter))
console.log("entries", Object.entries(firstCharacter))

//---------------
// Object.entries
// -------------

//REVIEW ON ARRAY DESTRUCTURING

// // array destructuring
// let [first, second] = ["blue", "yellow"]
// ==> MEANING first = "blue"
// ==> MEANING second = "yellow"

let thirdCharacter = {
  name: 'Hermione Granger',
  house: 'Gryfindor',
  age: 20,
};

let arrayCharacter = Object.entries(thirdCharacter)
console.log(arrayCharacter)

// (3) [Array(2), Array(2), Array(2)]
// 0: (2) ['name', 'Hermione Granger']
// 1: (2) ['house', 'Gryfindor']
// 2: (2) ['age', 20]

// destruture inside the loop
for (let element of arrayCharacter){
	console.log("element : ", element)
	let [key, value] = element
  	console.log("key : ", key, " , value: ", value)
}

// THE SAME
//destruture inside the statement of the loop
for (let [key,value] of arrayCharacter){
  	console.log("key : ", key, " , value: ", value)
}



//---------------------
//Copy objects
//--------------------------

let fourthCharacter = {
	name: 'Hermione Granger',
	house: 'Gryfindor'
};

let newCharacter = fourthCharacter; //they point to the same adress
newCharacter["name"] = "Harry";
console.log("newCharacter : ", newCharacter, ", fourthCharacter", fourthCharacter)

let person = { ...fourthCharacter};// they point to different adress
person["house"] = "Meet in place"
console.log("person house = ", person["house"], "fourthCharacter house", fourthCharacter["house"]) //unchanged

// NESTED DESTRUCTURING
let fifthCharacter = {
	name: 'Hermione Granger',
	house: 'Gryfindor',
	friend :  {
		name : 'Harry Potter',
	}
};

let secondPerson = {...fifthCharacter};
console.log(secondPerson)
secondPerson["friend"]["name"] = "Hagrid"
console.log("secondPerson friend = ", secondPerson["friend"]["name"], "fifthCharacter friend", fifthCharacter["friend"]["name"]) //changed

// Solution : Deep COPYING

let thirdPerson = { 
	...fifthCharacter,
	friend :{
		...fifthCharacter.friend
	}
};
console.log(thirdPerson)
thirdPerson["friend"]["name"] = "Hagrid"
console.log("thirdPerson friend = ", thirdPerson["friend"]["name"], "fifthCharacter friend", fifthCharacter["friend"]["name"]) //unchanged


//---------------------
// Destructuring
// -----------------------

let sixCharacter = {
	name: 'Hermione Granger',
	house: 'Gryfindor',
	friend :  {
		username : 'Harry Potter',
	}
}

// an object is not ORDERED
// an array is ORDERED

// In object destructuring the name of the variables
//need to equal to the name of the keys inside the object
let {name,house, ...others} = sixCharacter;
console.log("name : ", name, " , house :" , house, ", others", others)

//----------------
//WITH ALIAS FOR THE VARIABLE NAME
//----------------

let sevenCharacter = {
	name: 'Hermione Granger',
	house: 'Gryfindor',
	friend :  {
		username : 'Harry Potter',
	}
}
// // Syntax
// //let {keyname : varname} = object
let {name : wizardname , house : wizardhouse} =  sevenCharacter
console.log("wizardname =", wizardname)
console.log("wizardhouse =", wizardhouse)

//----------------
//NESTED DESTRUCTURING
//----------------

let eightCharacter = {
	name: 'Hermione Granger',
	house: 'Gryfindor',
	friend :  {
		username : 'Harry Potter',
	}
}

let {name : eightwizardname , house : eightwizardhouse, 
	friend : { username: wizardfriendName }} = eightCharacter;

// //syntax
// let {nameKey : {nameSubKey}} = object


console.log("eightwizardname =", eightwizardname)
console.log("eightwizardhouse =", eightwizardhouse)
console.log("wizardfriendName =", wizardfriendName)


// ---------------
// WITH FUNCTIONS
// -----------------

//DESTRUCTURING WITH ARRAYS
function getColors ([first, second]){
  console.log("first :", first);
  console.log("second : ", second)
}

getColors(["blue", "red"])

//Exercise1
function getDetails({name,house,goodstudent}) {
	console.log(name, house, goodstudent)
}

getDetails({name: 'Harry Potter',house: 'Gryfindor',goodstudent : false})

//Exercise2
function getMoreDetails({name, house, friend : {friendName, age}}) {
	console.log(name, house, friendName, age)
}

getMoreDetails({name: 'Hermione Granger', 
				house: 'Gryfindor', 
				friend :  {
					friendName : 'Harry Potter', age : 20
				}
				})

//Exercise3
const elonPerson = {
    first: 'Elon',
    last: 'Musk',
    housesLocation : ["new york", "paris"],
    twitter: '@elonmusk',
    company: 'Space X',
    houses : {
      amount: 2,
      value : "5Million"
    }
}

function getElonMuskDetails({first, last, housesLocation : [usa, france], houses : {value}}){
	console.log(first, last, value)
	console.log(usa, france)

}

getElonMuskDetails(elonPerson)

//--------------------------------------
// Links about Classes and Objects: NOT MANDATORY
// First read about objects and classes in Javascript. ONLY IF you understand objects and classes notions, read the articles below
// 1. is-javascript-a-true-oop-language https://medium.com/@andrea.chiarelli/is-javascript-a-true-oop-language-c87c5b48bdf0
// 2. learn-javascript-objects/cheatsheet https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-objects/cheatsheet
// 3. private-properties-methods-javascript-classes: https://ultimatecourses.com/blog/private-properties-methods-javascript-classes (edited) 