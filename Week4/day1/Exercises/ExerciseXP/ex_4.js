// Exercise 4 : Colors #2

// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class.



let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];

colors.forEach((e, index) => {
    let choice = ordinal[index + 1]

    if (choice === undefined) {
        choice = '';
    }
    
    let colorFollowing = `${index + 1}${choice} choice is ${e}`
    console.log(colorFollowing)
})