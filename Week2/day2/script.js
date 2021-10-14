let userCart = {
	username : "John",
	password: 1234,
	isUserSignedIn : true,
	cart : {
		apple : 2,
		banana : 1,
		pear : 5
	},
	prices : {
		apple : 0.5,
		banana : 0.8646466363,
		pear : 0.2
	}
};
// 1. Add the lastName Smith to the object
userCart.lastName = "Smith";
userCart["lastName"] = "Smith";


// 2. Change the price of the pear, so it will contain the Taxes. 17%
let total = 2;
total = total + 5;
total += 5;
userCart["prices"]["pear"] = userCart["prices"]["pear"]*1.17
// SHORTCUT
userCart["prices"]["pear"] *= 1.17
console.log(userCart)

// 3. Ask the user for the fruit he wants between Apple, Banana and Pear. 
// Make sure that your code accept all type of strings, 
// for example "Banana" or "banana" or "BaNaNA"
// let userFruit = prompt("What do you want?").toLowerCase()
// console.log("the fruit of the user is : ", userFruit)

// userFruit = "apple"
// userFruit = "pear"
// userFruit = "banana"

// 4. Console.log the price for the specific fruit the user wants
// console.log(userCart["prices"]["apple"])
// console.log(userCart["prices"]["banana"])
// console.log(userCart["prices"]["pear"])

// console.log(`USING BRACKET NOTATION - 
// 	The price of the ${userFruit} is ${userCart["prices"][userFruit]}`)

// DOESN'T WORK
// console.log(`USING DOT NOTATION - 
// 	The price of the ${userFruit} is ${userCart["prices"].userFruit}`)


//1. If the user is SignedIn - show him his name and password
//2. If not - alert the user "you need to sign in"

if(userCart["isUserSignedIn"]){
   console.log(userCart['username'],userCart['password']);
} else {
    alert("you need to sign in")
}


// 2nd exercise
// 1. If the user is John AND his password is 1234 - alert him "You are signed in"
// 2. If the user is John OR his password is 1234 - alert him "One credential is false"
// 3. Else,alert the user "you need to sign in"

if (userCart["username"] === "John" && userCart["password"] === 1234){
  alert( "You are sign in")
} else if (userCart["username"] === "John" || userCart["password"] === 1234) {
    alert("One credential is false")
} else {
    alert("you need to sign in")
}



//switch case

let username = "Johnny";

switch(username) {
  case "John":
    console.log("hello JOHN")
    // break;
  case "Lea":
    console.log("hello LEA")
    break;
  case "David":
    console.log("hello DAVID")
    break;
  default:
    console.log("sorry")
}