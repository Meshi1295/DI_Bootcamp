// Implement a simple version of Promise.all.
// This function should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.

let userName = prompt('What is yor first name?')

let firstPromise = new Promise((resolve, reject)=>{
    if(userName[0] === userName[0].toUpperCase()){
         resolve(userName)
    } else {
         reject('your first letter need to be uppercase')
    }
})

let user = prompt('What is your last name?')

let secondPromise = new Promise((resolve, reject)=>{
    if(user[0] === user[0].toUpperCase()){
         resolve(user)
    } else {
         reject('your first letter need to be uppercase')
    }
})

let question = prompt("you love your name? Answer yes or no, small letters pleas")

let promise3 =  new Promise((resolve, reject) => {
        
    if(question === "yes"){
          resolve(question)
    } else if(question === "no") {
         reject("Your problem !!!!!!")
    }
});

Promise.all([firstPromise,secondPromise,promise3])
.then((res) => {
   console.log(`Your full name is: ${res[0]} ${res[1]} and ${res[2]} `);
})
.catch((err) => console.log(err));
