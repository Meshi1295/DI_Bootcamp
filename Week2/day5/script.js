// IN OPERATOR

// let objFamily = {
// 	lastname: "Smith",
// 	members: 4
// }

// // console.log("members" in objFamily)

// if ("members" in objFamily) {
// 	console.log(objFamily["members"])

// } else {
// 	console.log("problem")
// }


// IF 

// if (condition is true){
// 	// enter the statement
// } else if (condition above is false and this condition is true){
// 	// enter the statement
// } else if (condition above is false and this condition is true){
// 	// enter the statement
// } else if (condition above is false and this condition is true){
// 	// enter the statement
// } else {
// 	// if all the other conditions above are false
// 	// enter the else block
// // }


// let birthyear = 1976;

// if (birthyear<1950){
// 	console.log("old")
// } else if (birthyear > 2000) {
// 	console.log("young")
// } else {
// 	console.log("ok")
// }


// // let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

// // If there is no users (the users array is empty), console.log "no one is online".
// // If there is 1 user, console.log "<name_user> is online".
// // If there are 2 users, console.log "<name_user1> and <name_user2> are online".
// // if they are 5
// // name_user1, name_user2 and 3 more are online
// // // If there are more than 2 users, 

// // if they are 10
// // name_user1, name_user2 and 8 more are online

// let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

// if (users.length == 0) {
// 	console.log("no one is online");
// } else if (users.length == 1) {
// 	console.log(`${users[0]} is online`);
// } else if (users.length == 2){
// 	console.log(`${users[0]} and ${users[1]} are online`);
// } else {
// 	console.log(`${users[0]} and ${users[1]} and ${users.length-2} more are online`)
// }

// // for (let i=0; i<=10; i += 2){
// // 	console.log(i)
// // }

// // let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];

// // for (let chocolate of users){
// // 	console.log(chocolate);
// // }


// // 1st loop
// // chocolate = "Lea123"

// // 2nd loop
// // chocolate = "Princess45"

// // FOR IN: objects
// // FOR OF: arrays
// // normal for loop

// // for (let index = 0; index <= 3; index += 1){
// // 	console.log(users[index])
// // }


// // for (let index = 0; index <= users.length - 1; index += 1){
// // 	console.log(users[index])
// // }

// // for (let index = 0; index < users.length ; index += 1){
// // 	console.log(users[index])
// // }



// let guestList = {
//   germany : "randy",
//   spain : "lonardo",
//   france : "kala",
// }

// for (let country in guestList){
// 	// console.log(guestList[country])
// 	// guestList[country] = "lise"

// 	// if (country==="germany"){
// 	// 	guestList[country] = "lise";
// 	// }	

// // key
// 	if (country.includes("r")){
// 		guestList[country] = "lise";
// 	}

// // value
// 	if (guestList[country].includes("r")){
// 		guestList[country] = "lise";
// 	}

// }

// console.log(guestList)






// RETURN


// global variable
let bill = 100;

function tipToGive(moodOfClient){
	// local variable
	let tip = 0;
	if (moodOfClient == "happy"){
		tip = 1.1;
	} else {
		tip = 1.02
	}

	return tip;
}

console.log("the tip is : ", tip) //undefined

// when I use a return
// the value of the variable I return
// becomes the result of the function

let myTip = tipToGive(prompt("what is your mood ?"))
let totalBill = bill * myTip;

// the same as
let totalBill = bill * tipToGive(prompt("what is your mood ?"));