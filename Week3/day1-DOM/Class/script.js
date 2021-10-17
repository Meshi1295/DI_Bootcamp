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