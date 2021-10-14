// let sentence = "The movie is not that bad, I like it"

// let wordNot = sentence.substring(12,16);
// let wordBad = sentence.substring(21,25);
// let replaceWords = sentence.replace("not that bad" , "good");

// let bad = Number(sentence.search("bad"));
// let not = Number(sentence.search("not"));

// if ( not > bad ){
//     console.log(replaceWords);
// }

// if ( bad > not) {
//     console.log("the original sentence" + "-" + sentence);
// } else {
//     console.log("the word “bad” does not come after “not” or the words are not in the sentence");
// }


let sentence = "the dinner was not so bad, it was nice"
let result;
let arrSentence = sentence.split(" ")

let indexWordBad = sentence.indexOf("bad");
let indexWordNot = sentence.indexOf("not");

if (indexWordBad > indexWordNot && indexWordBad !== -1 && indexWordNot !== -1) {
    arrSentence.splice(indexWordNot, indexWordBad - indexWordNot + 1 , 'good')
    result = arrSentence.join(" ")
} else {
    console.log(sentence);
}

// let sentence = prompt("Enter a sentence:");
// console.log(sentence.replace(/not(\s\w+)*\sbad/, 'good'));
// // works because replace will return the original sentence if it doesn't find the pattern anyway