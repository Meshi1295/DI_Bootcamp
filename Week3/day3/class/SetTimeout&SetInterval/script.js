// setTimeout
function welcome (){
	document.body.style.backgroundColor = "red";
	setTimeout(getWhite, 2000)
}

function getWhite(){
	document.body.style.backgroundColor = "blue";
}

setTimeout(welcome, 2000);


// setInterval
let section = document.getElementById("container")
let button = document.getElementById("btn")

button.addEventListener("click", stopAnimation)

function addDiv(){
	let div = document.createElement("div");
	let text = document.createTextNode("hello");
	div.appendChild(text);
	section.appendChild(div);
}

let timeId = setInterval(addDiv, 1000);

function stopAnimation(){
	clearInterval(timeId)
}