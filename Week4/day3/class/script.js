//Exercise

//-------------
// filter 
// ---------------

let famousPeople = [
    {
        name: "Angelina Jolie",
        job: "actor",
        age: 80
    },
    {
        name: "Georges Clooney",
        job: "actor",
        age: 2
    },
    {
        name: "Paris Hilton",
        job: "actor",
        age: 5
    },
    {
        name: "Kayne West",
        job: "singer",
        age: 16
    },
    {
        name: "Britney Spears",
        job: "singer",
        age: 100
    }
]

// 1. Use the filter method, to create a new array and push the name of the people which age
// is equal or bigger than 16.
// 2. Use the filter method, to create a new array and to push an object in the new array. 
// Each object should contain the name of the actor, and it's job
let newFamousPeople = famousPeople.filter(element => element.age >= 16)
console.log(newFamousPeople);




// Exercise Filter-------------
// Exercise 1: filter only the positive value
let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];
let newNumber = numbers.filter(element => element >= 0)
console.log(newNumber);

// --------------

// Exercise 2: Suppose you have a list of Star Trek characters, 
// and you want to get just the characters that appeared in 
// Star Trek: The Next Generation. 
// Use filter() to filter the array of characters below 

const characters = [
  { name: 'James T. Kirk', series: ['Star Trek'] },
  { name: 'Spock', series: ['Star Trek', 'Star Trek: The Next Generation'] },
  { name: 'Jean-Luc Picard', series: ['Star Trek: The Next Generation'] },
  { name: 'Worf', series: ['Star Trek: The Next Generation', 'Star Trek: Deep Space Nine'] }]

let newCharacters = characters.filter(e => e.series.includes('Star Trek: The Next Generation'))
console.log(newCharacters);


//----------not finished -----------

//Exercise NOT MANDATORY - send me the answer by Slack

// 1. Create an array without duplicates using filter
const colors = ["blue", "red", "blue", "yellow"];
let newColors = colors.filter()
//----------not finished -----------



//------------------
//  map
// -------------------
// Use map to push every student into another array. Every student is an object with the key name, score and average. Average should be equal to true if the score is bigger than 50.
// const studentsFootball = [
// 	{name: 'Rich', score: 33}, 
// 	{name: 'Peter', score: 55}
// ];

// let newStudentsFootball = studentsFootball.map(element => {

//     let value = element.score > 50 ? true : false;
//     return {
//         name : element.name,
//         score : element.score,
//         average : value

//     }
// }) 
// console.log(newStudentsFootball)