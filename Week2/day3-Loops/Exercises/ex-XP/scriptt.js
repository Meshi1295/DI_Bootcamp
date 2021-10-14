// exercises XP -------------
// Exercise 1 : Your Favorite Colors

// 1. Create an array called colors where the value is a list of your favorite colors.
// 2. Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// 3. Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus
let colors = [
    "blue",
    "red",
    "pink",
    "black"
];

for(let i =0; i <colors.length; i++){
    console.log(`My #${i + 1} choice is ${colors[i]}`)
}



//Exercise 2 : List Of People
// 1. Write code to remove “Greg” from the people array.
let people = ["Greg", "Mary", "Devon", "James"]

people.shift()
console.log("1",people);


// 2. Write code to replace “James” to “Jason”.
let people2 = ["Greg", "Mary", "Devon", "James"]
let remove = people2.splice(3, 1, 'Jason')

console.log("2", people2);
console.log("replace you:", remove);


// 3. Write code to add your name to the end of the people array.
let people3 = ["Greg", "Mary", "Devon", "James"]
let add = people3.push("Meshi")
console.log("3", people3);


// 4. Using a loop, iterate through the people array and console.log each person.
let people4 = ["Greg", "Mary", "Devon", "James"]
for(let i = 0; i < people4.length; i++){
    console.log("4", people4[i]);
}


// 5. Using a loop, iterate through the people array and after you console.log “James” exit the loop.

for (let i = 0; i < people3.length; i++){
    if(people3[i] === "James"){
            break;   
    }
}
console.log("5", people3); 

// 6. Write code to make a copy of the people array using slice. The copy should NOT include “Mary” or your name.

people3.splice(-4,1) 
console.log("6", people3);

// 7. Write code that console.logs Mary’s index. take a look at indexOf on google.
people7 = ["Greg", "Mary", "Devon", "James"]
console.log(people7.indexOf("Mary"));


// .8 Write code that gives the indexOf “Foo” (this should return -1). Why does it return -1
console.log(people.indexOf(2));

// .9 Create a variable called last which value is the last element of the array.
let last = people[people.length - 1];
console.log(last)



// Exercise 3 : Repeat The Question
let userNumber = prompt('Choose number between 1 and 10');

while (userNumber < 10) {
    userNumber = prompt('add new number');
}



// Exercise 4 : Attendance
let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }

  let userName = prompt('What is your name?');

  if (userName in guestList) {
      console.log(`I'm ${userName}, and i'm from ${guestList[userName]}`)
  } else {
      console.log('Hello! I am a guest.')
  }


// Exercise 5 : Family
let family = {
    father: 'Moti',
    mother: 'Dalia',
    sister: 'Klear',
}
for(let item in family){
    console.log("key:",item)
}

for(let item in family){
    console.log("value:",family[item])
}



// Exercise 6 
// 1.Given the object above, console.log “my name is Rudolf the raindeer”
let details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
  let keys = Object.keys(details)

console.log(`${keys[0]} ${details['my']} ${keys[1]} ${details['is']} ${keys[2]} ${details['the']}`);


// Exercise 7 : Secret Group
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort()


for (let i = 0; i < names.length; i++) {
    let firstLetter = names[i].charAt(0);
    names.splice(i, 1, firstLetter)
}
console.log(names.join(''))

