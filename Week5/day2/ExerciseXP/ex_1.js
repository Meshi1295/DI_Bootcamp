// 

const searchInput = document.querySelector("#searchInput");
const submit = document.querySelector("#submit");



const getImages = (e) => {
	e.preventDefault();

	let search = searchInput.value;
	let xhr = new XMLHttpRequest();

	xhr.open('GET', `https://api.giphy.com/v1/gifs/random?tag=${search}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);

	xhr.send();

	xhr.onload = function() {
		let obj = JSON.parse(xhr.response)
		creatDiv(obj["data"]["images"]["original"]["url"]) //url for imgs
	}
	searchInput.value = ""; //Initializes the input
}
submit.addEventListener("click",getImages);



const creatDiv = (imgUrl) => {
	
	let images = document.querySelector("#images")
	let div = document.createElement("div");
	let img = document.createElement("img");
	img.setAttribute("src",imgUrl);
	div.appendChild(img);


	images.appendChild(div);
}






