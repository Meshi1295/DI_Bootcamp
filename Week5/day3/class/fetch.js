// Code on Fetch
// let url = 'https://lisenakache.github.io/HttpRequestGithub/test.json'

// let btn = document.getElementById("btn");
// btn.addEventListener("click", requestData)

// function requestData () {
// 	fetch(url)
//     .then(response => {
//     	if(response.status == 200){ //or response.ok
//     		return response.json();
//     	} 
//     	else {
//     		throw new Error("not 200")
//     	}
    	
//     })
//     .then(jsData => {
//     	console.log(jsData)
//     	displayUser(jsData) 
//     })
//     .catch(error => {
//         console.log("In the catch",error)
//         displayError(error)
//     });
// }



// const displayUser = (animals) => {
// 	let results = document.getElementById("results")
// 	animals.forEach(info => {
// 		let li = document.createElement("li");
// 		li.textContent = `${info.name} - ${info.species}`
// 		results.appendChild(li)
// 	});

// }

// const displayError = (xhr) => {
// 	let error = document.getElementById("error");
// 	let h2 = document.createElement("h2");
// 	h2.textContent = `Error`;
// 	// h2.textContent = `Error : ${xhr.status}`
// 	h2.style.backgroundColor = 'pink';
// 	error.appendChild(h2);
// }


//---------------------------
// Exercise FETCH
// Part I
// Use fetch to fetch one 1 random gif with the category of "sun"
// You append the gif to the page
// Part II
// Instead of having a fixed category of gif.
// Fetch one word from this api :http://random-word-api.herokuapp.com/word?number=1
// Depending on the word, fetch 1 random gif with the word as its category
// Display the word and the gif on the page
// Part III
// If the gif api doesn't find a gif depending on the word
// (because the word can be strange),
// then instead of displaying an empty image, display a gif that says "404 ERROR"
// Part IV
// Try using Promise.all

// Part I


// let urlGif = `https://api.giphy.com/v1/gifs/random?tag=sun&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`

// let btn = document.getElementById("inputBtn");
// btn.addEventListener("click", requestData)

// function requestData(){
//     fetch(urlGif)
//     .then(res =>  res.json())
//     .then(res => {
//         let imgUrl = res.data.image_url
    
//         getGif(imgUrl)
//     })
//     .catch(err => console.log(err))
// }

// function getGif(imgUrl){
//     let newDiv = document.createElement('div')
//     let img = document.createElement('img');
//     img.setAttribute('src', imgUrl)
//     newDiv.appendChild(img)

//     document.body.appendChild(newDiv)

// }


// Part II ,Part III ,Part IV


// let button = document.getElementById("btnInput");
// button.addEventListener("click", getData)

(function(){

    let wordPromise = fetch(`http://random-word-api.herokuapp.com/word?number=1`)
    .then((res) => res.json())
    .then((res) => res[0])
 
     let gifPromise = fetch ( `https://api.giphy.com/v1/gifs/random?tag=${wordPromise}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
 
     .then((res) => res.json())
     .then((res) => {
         if (res.data == 0) {
             return fetch(
           `https://api.giphy.com/v1/gifs/random?tag=404_ERROR&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`)
           .then((res) => res.json());
 
               } 
               else {
                   return res;
               }
       });
       
       Promise.all([wordPromise, gifPromise])
       .then((res) => {
           let div = document.createElement('div');
           let img = document.createElement('img')
           img.setAttribute('src', res[1].data.image_url)
           div.appendChild(img)

           let pEl = document.createElement('p');
           pEl.textContent = res[0]
           div.appendChild(pEl)
           document.body.appendChild(div)

       })
  
})();
     
  

  





 