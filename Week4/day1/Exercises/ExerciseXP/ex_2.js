// Exercise 2 : Ternary Operator

// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator (ie. change the conditional block into a ternary operator).

// function winBattle(){
//     return true;
// }

// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }

// experiencePoints()


// You need to modify the function called experiencePoints()

function winBattle() {
    return true;
}

let experiencePoint = winBattle() ? 10 : 1;
// console.log(experiencePoint);
function experiencePoints() {
    return experiencePoint
}
experiencePoints()

// console.log(experiencePoints())