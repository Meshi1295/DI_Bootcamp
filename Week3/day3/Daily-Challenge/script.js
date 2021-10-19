// Daily Challenge : Show Only The Letters
// 1. Create an input type text that takes/shows only letters.
// Hint: use the keyup or the keydown events and remove any character that is not a letter.
// Hint : Check out keycodes in Javascript or Regular Expressions

let input = document.getElementById('input');


input.addEventListener('input', function (){
    let foundLetters = input.value.match(/[a-zA-Z]/g);
    console.log(foundLetters);

    if (foundLetters !== null) {
        input.value = foundLetters.join('');
    } 
    else {
        input.value = input.value.slice(0, -1);
    }
} 
  
);

// .match(/[a-zA-Z]/g)

// stackoverflow -------
// function isNumberKey(evt){  
// 	var charCode = (evt.which) ? evt.which : evt.keyCode
//     if (charCode != 46 && charCode > 31 
// 	&& (charCode < 48 || charCode > 57))
//         return false;
//         return true;
// 	}
		   
//     function ValidateAlpha(evt)
//     {
//         var keyCode = (evt.which) ? evt.which : evt.keyCode
//         if ((keyCode < 65 || keyCode > 90) && (keyCode < 97 || keyCode > 123) && keyCode != 32)
         
//         return false;
//             return true;
//     }