// Mini Project : Play The Game

function playTheGame(){
    if (confirm("You would like to play the game?")){
    } else {
        alert("No problem, Goodbye")   
    }
}
playTheGame();


function question (){
        let answer = prompt("Enter a number between 0 and 10!")
        return answer;
    };

    
    let num = Number(question());




function whatType (num) {
    
    if(isNaN(num)){
        alert("Sorry Not a number, Goodbye")

    } else if ( num > 10 && num < 0){   
        alert("Sorry it’s not a good number, Goodbye")
    } else {
        return;
    };
}
whatType(num);

let computerNum = Math.floor((Math.random() * 10) + 1);
let userNumber = num ;
console.log(computerNum, "computerNum");



function test(userNumber,computerNum){
    for (let i = 0; i < 2; i++){
        if(userNumber > computerNum){
           alert("Your number is bigger then the computer’s, guess again") 
           question()
       
        } else if ( userNumber < computerNum){
            
           alert("Your number is smaller then the computer’s, guess again")
           question()
           
        } else {   
             alert("WINNER") 
             return;
        };
    };
    alert('looser');
}
test(userNumber,computerNum);

