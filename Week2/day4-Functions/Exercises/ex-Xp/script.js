// Exercises XP
// Exercise 1 : Information
// Part I
function infoAboutMe (){
    let data = {
        name: "Meshi",
        age: 26,
        hobbies: ["tv","book","code"],
        address: "Tel-aviv"
    }
    return data
}
// console.log(infoAboutMe());

// Part II
function infoAboutPerson(personName, personAge, personFavoriteColor) {
    let info = {
       name : `Your name is ${personName}`,
       age : `you are ${personAge} years old`,
       color: ` my favorite color is ${personFavoriteColor}`
    }
    return info
}
console.log(infoAboutPerson("David", 45, "blue"));

function infoAboutPerson2(personName, personAge, personFavoriteColor) {
     let name = personName;
     let age = personAge;
     let color = personFavoriteColor ;
    
    console.log(`my name is ${name} i am ${age} and my favorite color is ${color}`);
}

infoAboutPerson2("Josh", 12, "yellow")

//Part III
// infoAboutPerson3("David", 45, "blue", ["tennis", "painting"])
infoAboutPerson3("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "playing cards"])
function infoAboutPerson3(personName, personAge, personFavoriteColor, personHobbies){
   let hobbies = personHobbies
    let details = {
       name: personName,
       age: personAge,
       color: personFavoriteColor,
       
   }
   console.log(`Your name is ${details["name"]}, you are ${details["age"]} years old, your favorite color is ${details["color"]}, your hobbies is ${hobbies}`);
}




// Exercise 2 : Keyless Car
// 1. Ask the user for their age, and save the value to a variable.
// 2. Create a function called checkDriverAge() that will notify the user if they are permitted to drive. They must be at least 18 to drive.
// if the user is too young, alert “Sorry, you are too young to drive this car. Powering off”
// if the user is old enough, alert “You are old enough to drive, Powering On. Enjoy the ride!”
// if the user just turned 18, alert “Congratulations on your first year of driving. Enjoy the ride!”
function checkDriverAge(userAge) {
    if ( userAge < 18){
        alert("Sorry, you are too young to drive this car. Powering off");
    } else if ( userAge > 18 ){
        alert("You are old enough to drive, Powering On. Enjoy the ride!");
    } else ( userAge === 18 ) 
        alert("Congratulations on your first year of driving. Enjoy the ride!")
}

// checkDriverAge(prompt("Your age?"))



// Exercise 3: Odd Or Even
function checkNumber(){
    for( let i = 0; i < 100; i++){
        if ( i % 2 == 0 ) {
            console.log(`the number ${i} is even`);
    
        } else {
            console.log(`the number ${i} is odd`);
        }

    }

}
checkNumber()




// Exercise 4: Find The Numbers Divisible By 23
let divisor = 10
 function isDivisible(divisor){
    for( let i = 1; i <= 500; i++){
        if (i % divisor == 0){
            console.log(i);
        }       
  } 
}
// Bonus: Add a parameter divisor to the function.
isDivisible(divisor)




// 5. Exercise 5 : Amazon Shopping
let amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
}

// let user = prompt("your item?")
function checkBasket(){
   for(let i in amazonBasket){
       if(user === i){
            console.log(`the item is in the basket: ${i} `);
       }
   }
}
checkBasket()



// 6. Exercise 6 : What’s In My Wallet ?

const Change = [0.25, 0.10, 0.05, 0.01];

function changeEnough(arr, value) {
    return (sumArr(multArr(arr, Change))>value)
}

function multArr (arr1, arr2) { // multiply two arrays of same length, returns an Array
    let arr = [];
    for (let i in arr1) {arr.push(arr1[i]*arr2[i])}
    return arr;
}

function sumArr (arr) {
    let sum=0;
    for (let v of arr){sum+=v}
    return sum
}

console.log(changeEnough([2, 100, 0, 0], 14.11));
console.log(changeEnough([0, 0, 20, 5], 0.75)); 





// 7. Exercise 7 : Shopping List
let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
let shoppingList = ["banana", "orange", "apple"];
function thePrice (index){
    if (stock[index] > 0){
        stock[index] --
        return (prices[index])
    }
    return 0 ; // in stock or not, if not return 0
}

function myBill(shoppingList){
    let sum = 0;
    for ( i of shoppingList){
        sum += thePrice(i)
    }
    return sum
}

console.log(myBill(shoppingList)); 




// .8 Exercise 8 : Tips

// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// The calculator has the following rules:
// 1. Tip 20% when the bill is less than $50,
// 2. Tip 15% when the bill is between $50 and $200,
// 3. Tip 10% if the bill is more than $200.

// Ask John for the amount of the bill.
// Create the program explained above.
// In the end, John would like to know:
// Tip amount.
// Final bill (bill + tip).
// (NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

const tipCalculator = (bill) => {
    if (bill < 50) {
      return bill * 1.2;
    } else if (bill > 200) {
      return bill * 1.1;
    } else {
      return bill * 1.15;
    }
  };
  
  console.log("total you will need to pay include the tip", tipCalculator(70));





  // Exercise 9 : Vacations Costs

// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.

// Define a function called planeRideCost().
// It should ask the user for their destination.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$
// If the user doesn’t answer or if the answer is not a string, ask again.

// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.

// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost.
// Call the function totalVacationCost()
// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function.

const hotelCost = (nights) => {
    return 140 * nights;
  };
  
  const planeRideCost = (location) => {
    if (location == "london") {
      return 183;
    } else if (location == "paris") {
      return 220;
    } else {
      return 300;
    }
  };
  
  const rentalCarCost = (days) => {
    if (days > 10) {
      return 40 * days * 0.95;
    } else {
      return 40 * days;
    }
  };
  
  const totalVacationCost = () => {
    let location=0;  
     while (!/^[a-z]+$/i.test(location)){
      location = prompt("What is the destination you would like to travel??");
     }
    let nights =prompt("How many nights you would like to stay in the hotel?");
      while (!/^\d+$/.test(nights)) {
      nights =prompt("How many nights you would like to stay in the hotel?");
    nights=parseInt(nights);
     }
  
    let days = prompt("How many days you would like to rent a car?");
    while (!/^\d+$/.test(days)) {
      days =prompt("How many days you would like to rent a car?");
    days=parseInt(days);
     }
    
    console.log(
      `The car cost: ${rentalCarCost(days)}, the hotel cost: ${hotelCost(
        nights
      )}, the plane tickets cost: ${planeRideCost(
        location
      )}. the total cost of the trip is ${
        rentalCarCost(days) + hotelCost(nights) + planeRideCost(location)
      }`
    );
  };
  
  totalVacationCost();