let title = document.getElementById("title");
let input = document.getElementById("input") ;
let button = document.getElementById("Btn");
let listDiv = document.getElementById("list")
let ul = document.querySelector("ul")
let li = document.createElement("li");


title.style.padding = "10px"
title.style.color = "white"
input.style.backgroundColor = "white"
input.style.padding = "10px"
input.style.border = "none"
input.style.textAlign= "left"
input.style.fontSize= "20px"
button.style.backgroundColor = "white"
button.style.padding = "10px"
button.style.border = "none"
button.style.cursor = "pointer"
button.style.fontSize= "20px"
listDiv.style.border = "1px solid black"
listDiv.style.width = "25vw"
listDiv.style.height = "50vh"
listDiv.style.marginTop = "80px"
listDiv.style.marginLeft = "750px"
listDiv.style.backgroundColor = "white"
ul.style.fontSize = "30px"


button.addEventListener("click" , checkInput)
function addToList(){
  let valueInput = document.createTextNode(input.value) 
//   li.textContent = valueInput
  li.style.listStyle = "none"
  li.style.backgroundColor = "white"
   li.style.textAlign = "left"
  li.style.paddingLeft = "10px"
    ul.appendChild(li)

    let div = document.createElement('div');
    div.setAttribute("class","divContainer")

    li.appendChild(div)

    addCheckbox()
    addRemove()

    div.appendChild(checkbox)
    div.appendChild(remove)

    li.appendChild(valueInput)

    input.value = ""

   
}

function checkInput (){
    if(input.value === ""){
        alert('your task is empty')
        return;
    } else {
        addToList()
    }
}



let checkbox ;
function addCheckbox (){
 checkbox = document.createElement("input");
    checkbox.setAttribute("type" , "checkbox")
     ul.appendChild(li)
     checkbox.addEventListener("change", check)
}

function check (){
    if(checkbox.checked === true){
        li.style.textDecorationLine = "line-through"
    } else if (checkbox.checked === false) {
        li.style.textDecorationLine = "none"
    }
}




let remove;
function addRemove (){
    remove = document.createElement("button");
    remove.innerText = 'X'
    remove.setAttribute("class","btnRemove");
    // li.appendChild(remove)
    ul.appendChild(li)

    remove.addEventListener('click',function (){
        li.remove()
    })
}


 

