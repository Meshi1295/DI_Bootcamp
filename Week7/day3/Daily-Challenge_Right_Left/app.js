const fs = require("fs");
let position = 0;

// I
fs.readFile("./Arrows.txt", (err, data) => {
  if (err) {
    console.log(err);
  } 
  else 
  {
    let away = data.toString();

    for (let point of away) {
      if (point == ">") {
        position++;
      }
      if (point == "<") {
        position--;
      }
    }
    console.log(position);
  }
});

//II

let count = 0;

fs.readFile("./Arrows.txt", (err, data) => {
  if (err) {
    console.log(err);
  } 
  else {

    position = 0;
    let away = data.toString();

    for (let point of away) {
      count++;
      if (point == ">") {
        position++;
      } 
      // else {
      // }
      if (point == "<") {
        position--;
      }
      if (position == -1) {
        console.log(
          `num of steps:${count} position ${position}`
        );

        return;
    }
  }
}
});