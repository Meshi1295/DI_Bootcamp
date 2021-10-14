// Exercises XP Gold
// Exercise 1 : Building Management
let building = {
    numberLevels : 4,
    numberOfAptByLevel : {
        "1": 3,
        "2": 4,
        "3": 9,
        "4": 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        "Sarah": [3, 990],
        "Dan":  [4, 1000],
        "David": [1, 500],
    },
}

// .1 Console.log the number of levels in the building.
console.log(building["numberLevels"]);


// 2. Console.log how many apartments are on levels 1 and 3.
let level1 = building["numberOfAptByLevel"]["1"]
let level2 = building["numberOfAptByLevel"]["3"]
console.log("apartment level 1 is: ",level1);
console.log("apartment level 3 is: ",level2);


// 3.Console.log the name of the second tenant and the number of rooms he has in his apartment.
let number = building["numberOfRoomsAndRent"]["Dan"][0]
let names = building["nameOfTenants"][1]
console.log(`my name is ${names} and i have ${number} apartments`);

//.4 Check if the sum of Sarah and David’s rent is bigger than Dan’s rent.
// If it is than increase Dan’s rent.

let sum = building["numberOfRoomsAndRent"]["Sarah"][1] + building["numberOfRoomsAndRent"]["David"][1]

let danRent = building["numberOfRoomsAndRent"]["Dan"][1]

if(sum > danRent){
    console.log(`Yes, the sum of Sarah and David’s rent is ${sum} than Dan’s rent is ${danRent}.`);
}




// Exercise 2 : Divisible By Three
let numbers = [123, 8409, 100053, 333333333, 7]

for(let num of numbers){
    console.log(`this number ${num} is divisible by three? ` + ( num % 3 === 0 ));
    }




// Exercise 3 : Playing With Numbers  
//Requirements : Don’t use built-in Javascript methods to answer the following questions. You have to create the logic by yourself. Use simple for loops.


// 1. Console.log the sum of all the numbers in the age array.
// 2. Console.log the highest age in the array.  
let age = [20,5,12,43,98,55];
let total = 0

for(let i = 0; i < age.length; i++){
    let oneNum = age[i] ;
    total += oneNum
}
console.log(total);
