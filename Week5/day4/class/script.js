// CheatSheet Promises https://www.codecademy.com/learn/asynchronous-javascript/modules/javascript-promises/cheatsheet
// CodecademyCodecademy
// Learn Asynchronous JavaScript: Promises Cheatsheet | Codecademy
// Learn how to write asynchronous JavaScript with the Promises Syntax.

//1st tutorial => Download progress Fetch : https://dev.to/tqbit/how-to-monitor-the-progress-of-a-javascript-fetch-request-and-cancel-it-on-demand-107f
// 2nd tutorial => Download progress Fetch :https://javascript.info/fetch-progress
// 3rd tutorial => Download progress Fetch :https://gist.github.com/dzikowski/7405d7f41f00603d17bf0711d379ec9e
// DEV CommunityDEV Community
// How to monitor the progress of a Javascript fetch - request and cancel it on demand.
// TL: DR -> Take me to the code: https://github.com/tq-bit/fetch-progress In an earlier

// ---------------- First program on AsyncAwait
// const learnJS = () => {
//   return new Promise(resolve => {
//     console.log("In LearnJS")
    
//     setTimeout(() => {
//         console.log("--------I learn Javascript-------");
//         resolve('Javascript DONE')
//     },3000)

//   })
// }

// THE SAME THING AS THE PROGRAM IN THE FUNCTION doSomethingNormalPromises
// const doSomething =  async () => {
//   let test = await learnJS()
//   console.log("test : ", test)
// }


// const doSomethingNormalPromises = () => {
//   let javascript = learnJS();
//   javascript.then((res) => console.log("res : ",res))
// }

// console.log('Before')
// doSomething()
// console.log('After')



// ---------Second program using AsyncAwait
// const learnJS = () => {
//   return new Promise(resolve => {
//   	console.log("In LearnJS")
//     setTimeout(() => {
//     	console.log("--------I learn Javascript-------");
//     	resolve('Javascript DONE')
// 	},3000)
//   })
// }

// const learnReact = () => {
//   console.log("In LearnReact")
//   return new Promise(resolve => {
//     setTimeout(() => {
//     	console.log("--------I learn React 2 sec after JS-------")
//     	resolve('REACT DONE')
//     }, 2000)
//   })
// }

// const doSomething = async () => {
//   let javascript = await learnJS();
//   console.log("hello")
//   console.log(javascript)
//   let react = await learnReact();
//   console.log("bye")
//   console.log(react)
// }

// console.log('Before')
// doSomething()
// console.log('After')




//------------------------
// Exercise Game - The word game
// You need to create 4 functions, each of them return a promises
// 1. The 1st function, receives 2 famous persons name from the user - if the names are not a string -> reject
// 2. The 2nd function, receives a noun - if the noun is less than 3 letters - reject
// 3. The 3rd function, receives a city - if the city doesn't start with an uppercase letter -> reject
// 4. The 4st function, receives a verb (finishing with "ing") - if it doesn't end with "ing" -> reject
// 5. The last function, is an async function - it receives all the above promises, and return a sentence with it


// function famousPersons(person1, person2){

//     return new Promise((resolve,reject)=>{
//         let persons = [person1,person2]
        
//         if(person1 !== "string"&& person2 !== "string"){
//             resolve(persons)
//         } else {
//             reject('not a string')
//         }
//     })
// }

// function noun (wordNoun){

//     return new Promise ((resolve,reject) => {
//         if(wordNou.length >= 3){
//             resolve(wordNoun)
//         } else {
//             reject('the noun is less than 3 letters')

//         }
//     })
// }

// function city (cityName){

//     return new Promise ((resolve,reject) => {
//         if(cityName[0] === cityName.toUpperCase()[0]){
//             resolve(cityName)
//         } else {
//             reject("city doesn't start with an uppercase letter")
//         }  
//     })
// }

// function finishVerb (verb){

//     return new Promise((resolve,reject)=>{
//         if(verb.substr(verb.length - 3) === 'ing'){
//             resolve(verb)
//         } else {
//             reject("it doesnt end with ing")
//         }
//     })
// }


// async function allSentence (){
//     let firstPromise = await famousPersons('Beyonce','Barack Obama')
//     let secondPromise = await finishVerb ('playing')
//     let thirdPromise = await noun ('with')
//     let fourthPromise = await city('Paris')
//     console.log(
//         `${firstPromise[0]} is ${secondPromise} football ${thirdPromise} ${firstPromise[1]} in ${fourthPromise}`
//     )
// }
// allSentence ()


// Ex: "Beyonce is playing football with Barack Obama in Paris"


//----------------------
//convert to async await
// (function(){

//     let wordPromise = fetch(`http://random-word-api.herokuapp.com/word?number=1`)
//     .then((res) => res.json())
//     .then((res) => res[0])
 
//      let gifPromise = fetch ( `https://api.giphy.com/v1/gifs/random?tag=${wordPromise}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
 
//      .then((res) => res.json())
//      .then((res) => {
//          if (res.data == 0) {
//              return fetch(
//            `https://api.giphy.com/v1/gifs/random?tag=404_ERROR&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
//            .then((res) => res.json());
 
//                } 
//                else {
//                    return res;
//                }
//        });
       
//        Promise.all([wordPromise, gifPromise])
//        .then((res) => {
//            let div = document.createElement('div');
//            let img = document.createElement('img')
//            img.setAttribute('src', res[1].data.image_url)
//            div.appendChild(img)

//            let pEl = document.createElement('p');
//            pEl.textContent = res[0]
//            div.appendChild(pEl)
//            document.body.appendChild(div)

//        })
  
// })();
 //----------------------

 let url = `http://random-word-api.herokuapp.com/word?number=1`
 

async function gifAndWord (){

    try {

        let getUrlWord = await fetch(url)
        if(getUrlWord.status === 200){

            let response = await getUrlWord.json()
            var oneWord = response
            console.log(oneWord)
        } 


        let urlTwo = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${oneWord}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
      

        if(urlTwo.status === 200){
            let res = await urlTwo.json()
            let imgUrl = res.data.image_url
           
            console.log(imgUrl); 
        }

    } catch (err) {
        if (urlTwo.data == 0) {
            let err =  fetch( `https://api.giphy.com/v1/gifs/random?tag=404_ERROR&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)

            let res = await err.json() 
            console.log(res);
            return res            
            
          } else {

           return res;

        }
    }
   
}

gifAndWord ()


// Promise.all([wordPromise, gifPromise])
// .then((res) => {
//     let div = document.createElement('div');
//     let img = document.createElement('img')
//     img.setAttribute('src', res[1].data.image_url)
//     div.appendChild(img)

//     let pEl = document.createElement('p');
//     pEl.textContent = res[0]
//     div.appendChild(pEl)
//     document.body.appendChild(div)

// })