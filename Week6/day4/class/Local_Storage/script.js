// -------------------------
// Local storage
// -------------------------

// console.log("LocalStorage = ", localStorage)

// //Add an item
// localStorage.setItem("username", "Lea");
// localStorage.setItem("age", 30);
// console.log("LocalStorage = ", localStorage)

// //Get an item
// let userName = localStorage.getItem("username");
// let h1 = document.createElement("h1");
// h1.textContent = `The name of the user is ${userName}`
// document.body.appendChild(h1)

// // //Get an item over the pages --> otherPage.html
// localStorage.removeItem("name")
// localStorage.clear()


// -------------------------
// Local storage and object
// -------------------------

// let form = document.getElementById("formfirst");
// let firstInput = document.getElementById("key");
// let secondInput = document.getElementById("value");
// let results = document.getElementById("results");

// // let obj = {
// // 	"name" : "Tom"
// // }


// // obj.name
// // obj["name"]

// const addItem = (e) => {
// 	e.preventDefault();

// 	if (firstInput.value != "" && secondInput.value != "") {
// 		let objectItem = {
// 			[firstInput.value] : secondInput.value
// 		}

// 		// need to stringify
// 		localStorage.setItem("objectDetails", JSON.stringify(objectItem))
		

// 		displayItem()
		
// 	}
	
	
// }

// const displayItem = () => {
// 	//need to parse
// 	let res = JSON.parse(localStorage.getItem("objectDetails"));
// 	let p = document.createElement("p");
// 	p.textContent = `The name of the user is ${res.name}`
// 	results.appendChild(p)
// } 

// form.addEventListener("submit", addItem);


// ----------------------
//Local storage and array of objects
// ----------------------

let button = document.getElementById("btn");
let getbutton = document.getElementById("btn2");
let firstInput = document.getElementById("key");
let secondInput = document.getElementById("value");
let results = document.getElementById("results");

let arr = JSON.parse(localStorage.getItem("userDetails")) || [];

const addItem = (e) => {
	let objItem = {}

	if (firstInput.value != "" && secondInput.value != "") { 
		objItem[firstInput.value] = secondInput.value;
		arr.push(objItem)
		localStorage.setItem("userDetails", JSON.stringify(arr))
	}
	
	e.preventDefault();
}

const displayItem = () => {
	let res = JSON.parse(localStorage.getItem("userDetails"));

	for (const elem of res) {
		let p = document.createElement("p");
		p.textContent = `The name of the user is ${elem.username}`
		results.appendChild(p);
	}

} 

button.addEventListener("click", addItem);
getbutton.addEventListener("click", displayItem);