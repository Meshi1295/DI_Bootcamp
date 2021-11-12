//Get an item
let userName = localStorage.getItem("username");
let p = document.createElement("p");
p.textContent = `The name of the user is ${userName}`
document.body.appendChild(p)