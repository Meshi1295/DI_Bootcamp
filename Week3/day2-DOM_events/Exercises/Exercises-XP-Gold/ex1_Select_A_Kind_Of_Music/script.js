// Exercise 1 : Select A Kind Of Music
// Display the value of the selected option.

let body = document.querySelector('body');
let pTag =  document.createElement('p')
let selectTag = document.getElementById('genres');
let optionTag = document.getElementsByTagName('option');

body.appendChild(pTag);


selectTag.addEventListener('click', function (){
    pTag.appendChild(optionTag["value"])
})