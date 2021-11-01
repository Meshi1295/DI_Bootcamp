// 1. Create a form with two fields (name, last name) and a submit button.
// 2. When you click the Send button, send the data as JSON.

let form = document.getElementById('form')
// let btn = document.getElementById('btn')


form.addEventListener("submit", function(e){
    e.preventDefault()

    let firstName = e.target.elements.firstName.value
    let lastName = e.target.elements.lastName.value

// console.log(`the first name is: ${first} and last name is: ${second}`);
 
let obj = {}
obj["name"] = firstName
obj["lastName"] = lastName

console.log(JSON.stringify(obj));

})
