// //-------Steps--------

// // RETRIEVE SEVERAL ELEMENTS
// querySelectorAll(selectors: DOMString)
// getElementsByTagName(localName: DOMString)
// getElementsByClassName(classNames: DOMString)


// // RETRIEVE ONE ELEMENT
// getElementById(elementId: DOMString)
// querySelector()

// // Example
// //1. Retrieve the element(s) that I want to use
// let allLis = document.getElementsByTagName("li");
// console.log(allLis)
// allLis.push("hello") //not working
// console.log(allLis[0]) //working

// // both those loops work
// for (let i=0; i<allLis.length;i++){
// 	console.log(allLis[i])
// }

// for (let elem of allLis){
// 	console.log(elem)
// }

// // Usual Steps

// 1. Retrieve the element(s) that we want to use
// 2. We add to the elements an event listener, with a specific event
// 3. We add a callback function inside the addEventListener method
// 4. We write the logic inside the callback function


// when to use event.preventDefault()
// when we want to stop the default action of an event
// submit event => automatically refreshes the page