// Exercise 1: Sum Elements

// Write a JavaScript program to find the sum of all elements in an array.
// Don’t use the sum method !
let initialValue = 0;


let arr = ["Hello," ,"Im" ,"Meshi" ,"Inbal" ,"and" ,"Im" ,"26" ,"years", "old"].reduce( function (word,nextWord){
    return word + " " + nextWord; 
   
   });
   
   console.log(arr);

   let arr2 = [2,2,2,2].reduce(function(a,b){
       return a +b
   });

   console.log(arr2);




