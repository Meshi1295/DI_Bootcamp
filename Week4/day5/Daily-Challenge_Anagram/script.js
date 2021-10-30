// Daily Challenge: Anagram

// Create a function that takes in two strings as two parameters and returns a boolean that indicates whether or not the first string is an anagram of the second string.


function anagram(word1, word2){
  
    return word1.split("").sort().join("") === word2.split("").sort().join("");
  }

  console.log(anagram('meshi','mshei'));