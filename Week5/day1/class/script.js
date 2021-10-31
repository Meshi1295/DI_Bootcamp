// // Exercise
// 1. In the HTML file create a form containing 2 inputs, username and password
// 2. In the JS file, validate the data before processing it
// Username must be trimed, minimum 4 characters and start with a first letter uppercased
// Password shoudn't be empty
// 3. If the values are not right, don't submit the form, and set the background color  to red
// 4. If the values are right, display the queries key value pair, on the page



// (function () {
//     let form = document.querySelector("form");
  
//     form.addEventListener("submit", validation);
//   })();
  
//   function validation(event) {
//     if (userValid() && passwordValid()) {
//       return;
//     } else {
//       event.preventDefault();
//       main.style.backgroundColor = "red";
//     }
//   }
  
//   function userValid() {
//     let user = document.getElementById("username").value;
//     if (user[0] === user[0].toUpperCase() && user.trim().length >= 4) {
//       return true;
//     } else {
//       return false;
//     }
//   }
  
//   function passwordValid() {
//     let pass = document.getElementById("password").value;
//     if (pass.trim().length > 0) {
//       return true;
//     } else {
//       return false;
//     }
//   }
  
//   (function () {
//     console.log("Hello i am the 2nd self invoked function!");
//     const URLParams = new URLSearchParams(window.location.search);
//     let mainDiv = document.getElementById("main");
  
//     for (const [key, value] of URLParams.entries()) {
//       let newP = document.createElement("p");
//       let newtxt = document.createTextNode(`${key} : ${value.trim()}`);
//       newP.appendChild(newtxt);
//       mainDiv.appendChild(newP);
//     }
//   })();



// // // Exercise2 -------------------
// // PARSE
// const fromjson = '{"result":true, "count":42}';
// const toobj = JSON.parse(fromjson); //convert a JSON string into a JS object
// console.log("typeof(fromjson) : ", typeof(fromjson), " typeof(toobj) : ", 
// 	typeof(toobj), "toobj['count'] : ", toobj["count"])

// //STRINGIFY
// const fromobj = {username:"John", age:25};
// const tojson = JSON.stringify(fromobj)
// console.log(typeof(fromobj), typeof(tojson), tojson)

// //NESTED OBJECT EXAMPLE
// const jsonString = `{
//     "employees":[
//         {"firstName":"John", "lastName":"Doe"},
//         {"firstName":"Anna", "lastName":"Smith"},
//         {"firstName":"Peter", "lastName":"Jones"}
//     ]
// }`

// const parsedObject = JSON.parse(jsonString);
// console.log(parsedObject["employees"]) //receive only the employees object
// Exercise with JSON
// Parse this JSON string into a JS object
// then use array or object methods to display THE VALUES OF THE OPTIONS OF THE FIRST SPORT QUESTION
// then stringify pretty print (look at the lesson)
let jsonString = `
{
    "quiz": {
        "sport": {
            "q1": {
                "question": "Which one is correct team name in NBA?",
                "options": [
                    "New York Bulls",
                    "Los Angeles Kings",
                    "Golden State Warriros",
                    "Huston Rocket"
                ],
                "answer": "Huston Rocket"
            }
        },
        "maths": {
            "q1": {
                "question": "5 + 7 = ?",
                "options": [
                    10,
                    11,
                    12,
                    13
                ],
                "answer": 12
            },
            "q2": {
                "question": "12 - 8 = ?",
                "options": [
                    1,
                    2,
                    3,
                    4
                ],
                "answer": 4
            }
        }
    }
}`

let obj = JSON.parse(jsonString)
console.log(obj);

let print = obj["quiz"]["sport"]['q1']['question']
console.log(print);

let newObj = JSON.stringify(print, null, 2)
console.log(newObj);

//Solution-----------------------------------
// PARSE SYNTAX
// JSON.parse(json string)

const toObj = JSON.parse(jsonString); //Convert a JSON string into a JS object
console.log(toObj)

// STRINGIFY SYNTAX
// JSON.stringify(js object)

const toJson =  JSON.stringify(toObj) //Convert the JS object into a JSON string
console.log(toJson)

//Pretty print
const toJsonPretty =  JSON.stringify(toObj, null, 2) //Convert the JS object into a JSON string
console.log(toJsonPretty)





//-----------------------------------------------
// Deep clone with JSON
//JSON SOLUTION TO A DEEP CLONE

// WITH ARRAYS

let myArr = ["blue", "red", ["apple", "orange"], "white"];

// not nested
// Shallow copy
let myNewArr = [...myArr];
myNewArr[0] = "pink";
console.log(`The first item of myArr is ${myArr[0]}, 
	The first item of myNewArr is ${myNewArr[0]}`)


// nested
// Shallow copy
myNewArr[2][0] = "blueberry";
console.log(`The third item of myArr is ${myArr[2][0]}, 
	The third item of myNewArr is ${myNewArr[2][0]}`)

//Using JSON 
let myNewArrString = JSON.stringify(myArr);
console.log("myNewArrString = ",myNewArrString, typeof(myNewArrString))

let myNewArrJavascript = JSON.parse(myNewArrString)
console.log("myNewArrJson = ",myNewArrJavascript, typeof(myNewArrJavascript))

myNewArrJavascript[2][0] = "blueberry";
console.log(`The third item of myArr is ${myArr[2][0]}, 
	The third item of myNewArrJson is ${myNewArrJavascript[2][0]}`)

// USING COMPOSING
let myColorsArr = ["blue", "red", ["apple", "orange"], "white"];

let myNewColorsArray = JSON.parse(JSON.stringify(myColorsArr))
// process
// 1. First, we stringify and the string that we receive, we pass it 
// as an argument of the parse method

console.log(myNewColorsArray)

// deep copy
myNewColorsArray[2][0] = "blueberry";
console.log(`The third item of myArr is ${myColorsArr[2][0]}, 
	The third item of myNewArrJson is ${myNewColorsArray[2][0]}`)