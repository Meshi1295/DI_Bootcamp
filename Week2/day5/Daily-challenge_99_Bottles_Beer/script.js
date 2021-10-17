// Daily Challenge: 99 Bottles Of Beer

// Have you heard the infamous song “99 Bottles of Beer?”
// In ths exercise you need to console.log the lyrics to the song 99 Bottles of Beer as an output.

// Prompt the user for a number to begin counting down bottles.
// In the song everyTime a bottle falls we subtract the bottles by 1.
// What your code should do is:
// instead of subtracting by 1, everyTime a bottle drops the subtracted number should go up by 1
// For example the first time a bottle drops we subtract by 1, the second time we subtract by 2 and so on.

let userNumber = parseInt(prompt('Choose some number between 1 - 99'));

for(let AnotherNum = 1; AnotherNum  < userNumber; AnotherNum++){

    if(AnotherNum > 1){

        console.log(` ${userNumber - AnotherNum} bottles beer on the wall 
      ${userNumber - AnotherNum} bottles of beer Take ${AnotherNum} down,
      pass them around`)

    }else{

        console.log(` ${userNumber - AnotherNum} bottles of beer on the wall 
        ${userNumber - AnotherNum} bottles beer Take ${AnotherNum} down,
        pass it around`)
  
    }
}

