// let colors = ["blue", "red", "yellow", "lightblue"];

// I want to go through the colors array, and print each letter of each color
// 1. Do I need one or more loops?
// 2. Which type of loop is needed?
// 3. What is the logic inside the loop?


// Output should be like this:
// "b"
// "l"
// "u"
// "e"


// "r"
// "e"
// "d"

// ect...
let colors = ["blue", "red", "yellow","pink"];

for(let i = 0; i < colors.length; i++){
 console.log(colors[i]);

    for(let indexLetter = 0; indexLetter < colors[i].length; indexLetter++ ) {
        console.log(colors[i][indexLetter]);
    }
}





//1st function
// 1. Create a function, that accepts 3 arguments:
// * name of pet
// * color of pet
// * breed of pet

// 2. The function will alert a sentence using the values

// // 2nd function
// 1. Create a function, that accepts 2 arguments:
// * your age
// * array of favorite colors

// 2. In the function, 
// * create a local variable, that is equal to twice your age
// * go through the colors array, and console.log all the colors
// * try to call the local variable outside of the function, what happens?
function animals (name, color, breed){
    alert(`My dog name is ${name}, his color is ${color} breed: ${breed}`)
}
animals("ponch", "white", "shitzo");





// let colors = ["blue", "red", "yellow","pink"];

function me (age, colors){
    let twiceMyAge = age * 2
    for (let color of colors){
        console.log(color,twiceMyAge);
    }
}

me (25, ["blue", "red", "yellow","pink"])







 
