
 // Daily Challenge: Words In The Stars
let words= prompt("Your words separated by commas, Pless");
let arrWords= words.split(","); // put in array
let wordLength=0;

arrWords.forEach((i) => {
    wordLength=Math.max(i.length,wordLength); //check what is the longest word
 });
 let star="*".repeat(wordLength+4)+"\n";
 arrWords.forEach(i => {
     star+="* "+i+" ".repeat(wordLength-i.length)+" *\n";
 })
 star+="*".repeat(wordLength+4);
 console.log (star);



