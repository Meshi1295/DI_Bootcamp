// Exercise 1
// For each of the questions, find 2 WAYS of accessing :

// 1. The div DOM node?

// 2. The ul DOM node?

// 3. The second li (with Pete)?

let divElement = document.body.firstElementChild;
let divElement = document.body.children[0]
console.log(divElement,'h');


let ulElement = divElement.nextElementSibling;
let ulElement = document.body.children[1];
console.log(ulElement);

let liElement = ulElement.lastElementChild;
let liElement = ulElement.children[i]
 // לשנות את הטקסט
liElement.textContent += "Meshi"





// in html
// 1 

// Add the lastname "Smith" to John !!!
// retrieve the div
let divElement = document.body.firstElementChild;
let divElementsecond = document.body.children[0];

// retrieve the ul
let ulElement = divElement.nextElementSibling;
let ulElementSecond = document.body.children[1];

// retrieve the li
let liElement = ulElement.lastElementChild;
let liElementSecond = ulElement.children[1];
liElement.textContent += " Smith"

console.log(divElement,divElementsecond)
console.log(ulElement, ulElementSecond)
console.log(liElement,liElementSecond)



// 2 
// retrieve the div
let divContainer = document.getElementById("container");
// retrieve the h1 inside the div
let allTitle = divContainer.getElementsByTagName("h1");
// same as:
// // document.getElementById("container").getElementsByTagName("h1");
console.log(allTitle)

// retrieve with querySelector
let divFirstContainer = document.querySelector("#container")
console.log(divFirstContainer)

// retrieve the first element that matches the selection
let firstTitle = document.querySelector("#container > h1")
console.log(firstTitle)

// retrieve all the elements that matche the selection
let titles = document.querySelectorAll("#container > h1");
console.log(titles);


// 3 
// let names = ["John", "Lola", "Tom"];
// 1. Create a function that adds the name of each students to 
// a paragraph. 1 paragraph per name
// 2. each paragraph needs to be background yellow, font-size 25px
// 3. Add the 3 paragraph to the div already on the page

let names = ["John", "Lola", "Tom"];
let divContainer = document.getElementById('container'); 


function addStudents(){
	//create a paragraph PER name
	for (let index = 0; index<names.length; index++){
		// create a paragraph
		let newP = document.createElement("p");
		// create a text node, with the value = to the name of the student
		let newText = document.createTextNode(names[index]);
		// style the paragraph
		newP.style.backgroundColor = "yellow";
		newP.style.fontSize = "25px";
		// add the newText to the newP
		newP.appendChild(newText)
		// add the newP to the divcontainer
		divContainer.appendChild(newP);
	}
}

addStudents();








// SetAttribute
let anchor = document.getElementById('link');
anchor.textContent = "Click here";
anchor.setAttribute("href", "http://learn.di-learning.com/courses/collection/18/course/11/section/42/chapter/159")


//ClassList
let ulElementThirdPossibility = document.querySelectorAll(".list");

for (let ul of ulElementThirdPossibility){
    //add the title class to every ul
	ul.classList.add("title")
}