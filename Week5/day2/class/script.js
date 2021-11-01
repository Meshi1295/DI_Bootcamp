// Exercise 1
// Write a function called divide that takes two parameters: a numerator and a denominator.
// Your function should return the result of numerator / denominator.
// However, if denominator is zero you should throw the error, "Attempted to divide by zero."

// function divide (y, x){

//     try {

//         if(x !== 0 ){
//             let total = y / x
//             console.log(total);
//         } else {
//             throw new RangeError("Attempted to divide by zero")
//         }

//     } catch(error) {
//         console.error(error); 

//     }
  
// }
// divide (2,0)




// Exercise 2
// Using the code below:
// const someVar = 'Cannot be reassigned';
// try {
//   someVar = 'Still going to try';
// } catch(e) {
//   console.log(e);
// }

// console.log("after")
// 1. Which type of error will be thrown ? Look on the different types errors on the Google
// 2. Is the console.log("after") will be shown on the console ?







// Code on XML HTTP REQUEST
// Review the code, and append the data on the page, in a list
// let xhr = new XMLHttpRequest();
// console.log(xhr);

// // //2. Set the request
// xhr.open('GET', 'https://lisenakache.github.io/HttpRequestGithub/test.json');

// // //4. Send the request
// xhr.responseType = 'json'

// xhr.send();


// // //5. when the request is complete and the response is fully downloaded.
// xhr.onload = function() {
// 	if (xhr.status != 200) {
// 	 	console.log("error status")
// 		displayError(xhr)
// 	} else {
// 		console.log("Finished Loading")
// 		console.log(xhr.response)
// 		displayUser(xhr.response) 
// 	}
// };

// const displayUser = (animals) => {
// 	let results = document.getElementById("results")

// 	animals.forEach(info => {
// 		let li = document.createElement("li");
// 		li.textContent = `${info.name} - ${info.species}`
// 		results.appendChild(li)
// 	});

// }

// const displayError = (xhr) => {
// 	console.log("in display error")
// 	let error = document.getElementById("error");
// 	let h2 = document.createElement("h2");
// 	h2.textContent = `Error : ${xhr.status}`
// 	h2.style.backgroundColor = 'pink';
// 	error.appendChild(h2);
// }


//---------------------------
// Code of today
// let xhr = new XMLHttpRequest();

// xhr.open('GET', 'URL');

// xhr.responseType = 'json'; 

// xhr.send();

// console.log(xhr)

// xhr.onload = function() {
// 	if (xhr.status != 200) {
// 	 	console.log("error status")
// 	} else {
// 		console.log("Finished Loading")
// 		console.log("the response is :", xhr.response)
// 		console.log("the response type is :", typeof(xhr.response))
// 	}
// };

// xhr.onprogress = function(event) {
// 	console.log("progress", xhr)
// };


// // when there is a NETWORK error
// xhr.onerror = function(event) {
// 	console.log("ERROR")
// 	console.log("error", xhr);
// };


//----------------------
//Exercise using https://jsonplaceholder.typicode.com/users
// Using XMLHTTPREQUEST, display name, email, city of the users

let xhr = new XMLHttpRequest()

xhr.open("GET",'https://jsonplaceholder.typicode.com/users')

xhr.send()

xhr.onload = function(){
    if(xhr.status !==200){
        console.log("error status");
    } else {
        let chaengJson = JSON.parse(xhr.response)
        display(chaengJson)
    }
}

function display(db){
    let newDiv = document.createElement('div');

    db.forEach(element => {
        let pEl = document.createElement('p')
        newDiv.appendChild(pEl) 

        pEl.textContent += element["name"] 
        pEl.textContent += element["email"]
        pEl.textContent += element["address"]['city']
       
        
    });

    document.body.appendChild(newDiv)
}
