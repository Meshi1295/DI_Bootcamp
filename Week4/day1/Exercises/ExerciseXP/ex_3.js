// Exercise 3 : Colors
let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];


// 1. Check if this array includes the color “Violet”.

colors.forEach(e => { if (e === 'Violet') console.log('Violet is includes') })

// 2. Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Hint : Use the array methods taught in class.

colors.forEach((e, index) => { console.log(`${index + 1}# choice is ${e}`) })