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
 highlight()



 // 3. Create a function called return_normal() that changes the color of all the bold text back to black.

 function return_normal(){
    wordBold.forEach(element => {
        console.log(element);
    });


 }