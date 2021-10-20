let leftSide = document.getElementById("leftSide");
let rightSide = document.getElementById("rightSide");
let btn = document.getElementById("btn");


let colors = ["blue","red","purple","yellow","green","pink","aqua","navy","orange","gold","brown","black","teal","indianred","peru","plum","silver","yellowgreen","slateblue","maroon","lime"];

colors.forEach( item => {
    let newDiv = document.createElement("div");
    leftSide.appendChild(newDiv)

    newDiv.style.border = "2px solid black"
    newDiv.style.backgroundColor = item

    newDiv.addEventListener("click", getColor)

})

let myColor;

function getColor (e){
   let eachColor = e.target.style.backgroundColor;
   console.log(eachColor);

    myColor = eachColor;
};

let isMouseDown = false;


for(let i = 0; i < 1440; i++){
    let newDiv2 = document.createElement("div");
    newDiv2.setAttribute("class","colorBox");


    newDiv2.style.border = "2px solid black"
    rightSide.appendChild(newDiv2)

    newDiv2.addEventListener("mousedown", function(){
        newDiv2.style.backgroundColor = myColor;
        isMouseDown = true;
    
});

newDiv2.addEventListener("mouseup", function(){
    isMouseDown = false;
});

newDiv2.addEventListener("mouseover", function(){
    if(isMouseDown){
        newDiv2.style.backgroundColor = myColor;
    } 
  })
}

btn.addEventListener("click",clearBtn);

function clearBtn (){
let childDiv = rightSide.children;

   for(let child of childDiv){
       child.style.backgroundColor = "white"

   }
}















