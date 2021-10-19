//Exercise 1 : Move The Box

// Move the box from left to right
// Tip: use setInterval
let redBox = document.getElementById("animate");

function myMove (){
    let pos = 0

    let id = setInterval(function (){
        if(pos > 350){
            clearInterval(id)
        } else {
            pos++
            redBox.style.left = pos + "px"
        }
    }, 5)
}
// 1. Create a draggable square/box element in your HTML file.
// 2. In your javascript file add the functionality which will allow you to drag the square/box and drop it into a larger box.

let blueBox = document.getElementById("largerBox");
redBox.addEventListener("dragstart", start);

function start (e){
    e.dataTransfer.setData("text/plain",e.target.id)
}

let allBox = document.getElementsByClassName("box")
console.log(allBox);

function addListener(){
    for(let sumBox of allBox){
        sumBox.addEventListener("dragover",draggingOver)
        sumBox.addEventListener("drop", dropping)
    }

}
addListener()

function draggingOver(event){
    event.preventDefault()

}

function dropping (event){
    // event.preventDefault()
    let elementToDrop = event.dataTransfer.getData("text/plain")
    let elemNode = document.getElementById(elementToDrop)
    event.target.appendChild(elemNode)

}
dropping()