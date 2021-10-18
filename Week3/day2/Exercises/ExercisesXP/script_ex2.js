// Exercise 2 : Transform The Sentence

// 1. Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph.
let wordBold;
function getBold_items() {
    wordBold = document.getElementsByTagName('strong');
}
getBold_items()


// 2. Create a function called highlight() that changes the color of all the bold text to blue.

 function highlight(){
     for(let item of wordBold){
         item.style.color = "blue"
     }
 }




 // 3. Create a function called return_normal() that changes the color of all the bold text back to black.

 function return_normal(){
    for(let item of wordBold){
        item.style.color = "black"
    }
 }
 

 // 4. Call the function highlight() onmouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() onmouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example
 let pElement = document.querySelector('p');

 pElement.addEventListener("mouseover", highlight);
 pElement.addEventListener("mouseover", return_normal);

