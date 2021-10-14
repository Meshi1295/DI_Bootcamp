// ---- stars ---- //

// one loop
let stars1 = ["*","*","*","*","*","*"]

for ( let i = 0; i <= 7; i++ ){
    console.log("*". repeat(i));
}


// tow nested for loop
let a = 6
let b = 6
let stars = ""
for (let i = 1; i < a; i++){
    for( let j = 1; j < b; j++){
        if (i >= j) {
            stars = stars.concat("*");
        } else {
            stars = stars.concat(" ");
        }
    }
    stars = stars.concat("\n")
}
console.log(stars);


// פיתרון בכיתה 
let n = 5; 

let string = "";

for(let i = 0; i < n; i++) { // external loop
  for(let j = 0; j < n; j++) { // internal loop
    if(i === 0 || i === n - 1) {
      string += "*";
    }
    else {
      if(j === 0 || j === n - 1) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
  }
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);

// Daily Challenge GOLD: Bubble Sort