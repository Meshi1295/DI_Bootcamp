// Exercises XP
// Exercise 1 : Change The Article

// 1. Using DOM methods, remove the last paragraph in the <article> tag from the DOM.
let pTag = document.querySelector("article");

pTag.removeChild(pTag.lastElementChild)

// .2 Add an event listener which will change the background color of the h2 tag from the DOM when clicked on.

let h2Tag = document.querySelector('h2');

  h2Tag.addEventListener("click", function(){
    h2Tag.style.backgroundColor = "blue"
});

// 3. Set the font size of the h1 tag to a random pixel size between 0 to 100.(Check out this documentation)
let h1Tag = Math.floor(Math.random() * 100)


// 4. Add an event listener which will hide the h3 when it’s clicked on (use the display property).

let h3Tag = document.querySelector("h3");
h3Tag.addEventListener("click", function (){
  h3Tag.style.display = 'none';
})

// 5. Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
let sumBtn = document.getElementById('sumButton');

sumBtn.addEventListener("click", function () {
 let allParagraphs = document.querySelectorAll('p');

 for (let p of allParagraphs){
    p.style.fontWeight = 'bold'
  }
});

// 6. When the “Submit” button of the form is clicked:
// a. get the values of the input tags
// b. make sure that they are not empty,
let submitBtn = document.getElementById('submit');
let nameInput = document.getElementById('fname'); 
let lastInput = document.getElementById('lname');



submitBtn.addEventListener("click", function (e){
    e.preventDefault()
   let firstNameValue = nameInput.value;
   let lastNameValue = lastInput.value;
//    console.log(firstNameValue,lastNameValue);

});


// c. then append them to a HTML table, in the div, below the form.
function generateTable (){
    // get the reference body
    let body = document.getElementsByTagName('body')[0];

//     //creates <table> & <tbody>
    let newTable = document.createElement("table");
    let tblBody = document.createElement("tbody");


    for (let i = 0; i < 2; i++){
        let row = document.createElement('tr');

        //creating all cells
        for(let j = 0; j < 2; j++){
            let cell = document.createElement('td');
            let textCell = document.createTextNode(nameInput.value + " " + lastInput.value);

            cell.appendChild(textCell)
            row.appendChild(cell);

        }
        // add the row to the table body
        tblBody.appendChild(row);        
    }
 // put the <tbody> in the <table>
 newTable.appendChild(tblBody);

 // appends <table> into <body>
 body.appendChild(newTable);

 // set border
 newTable.style.border = "2px solid black"
 newTable.setAttribute("border", "2")

}

// 7. When you hoover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
let pElement = document.getElementsByTagName("p")[1]

pElement.addEventListener("mouseover",function() {
  pElement.style.opacity= "0.4";
  pElement.style.transition="opacity 500ms"
})








