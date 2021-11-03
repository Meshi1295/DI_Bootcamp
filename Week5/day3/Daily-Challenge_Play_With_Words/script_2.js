// 2nd Daily Challenge
let morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`



let toJs = (morse) => {
  return new Promise((resolve, reject) => {
    if (Object.entries(JSON.parse(morse)).length > 0) {
      resolve(JSON.parse(morse));
    } else {
      reject("is empty");
    }
  });
};

let toMorse = (morseJS) => {
  let wordArr = prompt("give me a word or a sentence, Pleas!")
    .toLowerCase()
    .replaceAll(" ", "")
    .split("");

  return new Promise((resolve, reject) => {
    if (wordArr.every((e) => e in morseJS)) {

      resolve(wordArr.map((e) => morseJS[e]));
    } else {
    
      reject("The word/sentence is not correct!!");
    }
  });
};

let joinWords = (arr) => arr.join(" ");

toJs(morse)
  .then((res) => toMorse(res))
  .then((res) => joinWords(res))
  .then((res) => console.log(res))
  .catch((err) => console.log(err));