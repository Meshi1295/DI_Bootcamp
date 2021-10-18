let button = document.getElementById("btn");
let title = document.getElementById("title")

// SYNTAX:
// element.addEventListener(DOM events, callback function);

// with a function as a callback function
// function welcome(){
// 	console.log("hello")
// }

// button.addEventListener("click", welcome)

// title.addEventListener("click", welcome)


// // with anonymous function as a callback function
// button.addEventListener("click", function (){
// 	console.log("hello")
// })

// button.addEventListener("mouseover", function (){
// 	console.log("hovered")
// })

// title.addEventListener("click", function (){
// 	console.log("hello")
// })


// Exercises in Class
// 1. Create two buttons - id of "red", id of "blue"
// 2. When we click on the red button -> Change the backgroundColor of the page to red
// 3. the same for blue
let redBtn = document.getElementById("red");
let blueBtn = document.getElementById("blue");

redBtn.addEventListener("click",function (){
    document.body.style.backgroundColor = "red"; 
});

blueBtn.addEventListener("click",function (){
    document.body.style.backgroundColor = "blue";
});

function changeColor (event) {
    let color = event.target.textContent.toLoweCase()
    document.body.style.backgroundColor = color;
}

redBtn.addEventListener("click", changeColor);
blueBtn.addEventListener("click", changeColor);




// Exercise

let colors = ["blue", "yellow", "green", "pink"];

// 1. Add inside the HTMl file a div of id container (do it directly in the HTML)
// 2. Add one button per color inside the div container (do it directly in the JS)
// 3. Each button should have an "click" event listener that 
// changes the background color of the document,  to the color of the button (do it directly in the JS)

// Example:
// when you click on the YELLOW button, it should change the document 
// background color to yellow

let div = document.getElementById("container");

function changeColor (){
    for(let color of colors) {
        let btn = document.createElement("button");
        let btnText = document.createTextNode(color);
        
        div.appendChild(btn);
        btn.appendChild(btnText);
        
         btn.addEventListener("click",funColors);
        };
}
changeColor()


function funColors (event){
    let btnColor = event.target.textContent.toLowerCase();

 document.body.style.backgroundColor = btnColor
};


// Solution in class

// let colors = ["blue", "yellow", "green", "pink"];

// let div = document.getElementById("container")
// let bodyElement = document.body

// function createButtons (){

// 	for(let color of colors){
// 		let btn = document.createElement("button");
// 		let text = document.createTextNode(color);
// 		btn.classList.add("btn")
// 		btn.addEventListener('click', changeColor)
// 		btn.appendChild(text);
// 		div.appendChild(btn);
// 	}

// }

// createButtons()


// // callback function
// function changeColor(event){
// 	// console.log(event.target)
// 	let colorButton = event.target.textContent.toLowerCase();
// 	bodyElement.style.backgroundColor = colorButton;
// }




// Forms
// let bookForm = document.forms[0]; //select by index
let bookForm = document.forms['add-book'] //select by id

// console.log(bookForm)
// console.log("elements", bookForm.elements.title)

bookForm.addEventListener("submit", addBook)

let div = document.getElementById("container")

function addBook (event) {
	event.preventDefault();
	let inputTitle = event.target.elements.title
	let inputAuthor = event.target.elements.author

	let titleValue = inputTitle.value;
	let authorValue = inputAuthor.value;

	let pOne = document.createElement("p")
	let pTwo = document.createElement("p")
	let textOne = document.createTextNode(titleValue)
	let textTwo = document.createTextNode(authorValue)


	pOne.appendChild(textOne)
	pTwo.appendChild(textTwo)

	div.appendChild(pTwo)
	div.appendChild(pOne)

	inputTitle.value = "";
	inputAuthor.value = ""
	 
}

