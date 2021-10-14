// Exercises XP
// Exercise 1: Simple If/Else Statement

// 1. Create 2 variables, x and y. Each of them should have a different numeric value.
let x = 5;
let y = 2;
// 2. Write an if/else statement that checks which number is bigger.
if ( x > y){
    console.log("x is the biggest number");
} else {
    console.log("its not");
}


// Exercise 2: Chihuahua
// 1. Create a variable called newDog where it’s value is “Chihuahua”.
let newDog = "Chihuahua";

// 2. Check and display how many letters are in newDog.
    console.log(newDog.length)

// 3.Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());    

//Check if the variable newDog is equal to “Chihuahua”

//1. if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
if (newDog === "Chihuahua"){
    console.log("I love Chihuahuas, it’s my favorite dog breed");
} else {
    console.log("I don't care, I prefer cats");
}

//2. else, console.log ‘I don't care, I prefer cats’
if (newDog !== "Chihuahua"){
    console.log("I love Chihuahuas, it’s my favorite dog breed");
} else {
    console.log("I don't care, I prefer cats");
}


//Exercise 3: Even Or Odd
//1. Prompt the user for a number and save it to a variable.
//2. Check whether the variable is even or odd.
//If it is even, display: “x is an even number”. Where x is the actual number the user chose.
//If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.

let num = prompt("what is your number?");

if(num % 2 == 0){
    console.log("x is an even number");
} else {
    console.log("x is an odd number");
}



//Exercise 4: Group Chat

// let users = ["Lea123"]
//let users = ["Lea123", "Princess45"]
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]


if ( users.length === [] ){
    console.log("no one is online");
} else if ( users.length === 1 ){
    console.log(users[0] ,'is online');

} else if ( users.length === 2 ){
    console.log(users[0] ,"and" ,users[1], "are online");

} else if ( users.length === users.length ){
    console.log(users[0], users[1], "and" ,users.length, "more are online" );

} else { console.log(users);}