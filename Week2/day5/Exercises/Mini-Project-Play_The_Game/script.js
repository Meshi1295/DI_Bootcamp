// Mini Project : Play The Game

function playTheGame() {
    
    let userAnswer = window.confirm('Would you like to paly a game?')
    let computerNumber =  Math.floor(Math.random() * 10)

    if(userAnswer){
         let userNumber = parseInt(prompt('enter anumber between 1 to 10'))

         if(isNaN(userNumber)){
             alert('Sorry not a number,goodbye');

         }else if (userNumber <= 0 || userNumber > 10){
            alert('Sorry not a good number,goodbye');

         }else if (userNumber > 1 || userNumber <= 10){

              test(userNumber,computerNumber)
              console.log(computerNumber)
            }
    }else{
        alert('Ok goodbye!')
    }

     return computerNumber;
}

function test(userNumber,computerNumber) {

    for(i =0; i < 3; i++){
    if(userNumber === computerNumber){
        alert('Winnnnnn!!!') 
        return;

    }else if(userNumber > computerNumber){

        console.log(computerNumber)
        let newNumber = parseInt(prompt('Your number is bigger then the computer’s, guess again'))
        userNumber = newNumber

    }else if(userNumber < computerNumber){

        newNumber = parseInt(prompt('Your number is smaller then the computer’s, guess again'))
        userNumber = newNumber
    }
}
alert('looooooooooser')
}

