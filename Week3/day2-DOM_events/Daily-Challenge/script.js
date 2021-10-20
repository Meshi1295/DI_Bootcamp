// Daily Challenge: Tell The Story

// 1. Get the value of each of the inputs in the HTML file when the button is clicked.
// 2. Make sure the values are not empty

document.getElementById("lib-button").addEventListener("click", getInput);


function getInput (){
    let textOfInput = ["noun","adjective","person","verb","place"]
    let words = [];
    // let inputs = document.querySelectorAll("input");
    let element_P = document.getElementById('story');

    for (let i = 0; i < textOfInput.length; i++) {
        words[i] = document.getElementById(textOfInput[i]).value;
        if (words[i] == "") {
          console.log("the input is empty");
          return;
        }
        let addSentence = words.join(" ");
        element_P.appendChild(document.createTextNode(addSentence));
      }
         
}
getInput ();


// 3. Write a story that uses each of the values.
// 4. Make sure you check the console for errors when playing the game.
// 5. Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.