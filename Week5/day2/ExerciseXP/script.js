  
// 1.
const getSumData = () => {
	let xhr = new XMLHttpRequest();

	xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');

	xhr.send();

	xhr.onload = function() {
		console.log(JSON.parse("ex_1:", xhr.response))
	}
}
getSumData();

// 2. Using this part of the documention, retrieve 10 gifs about the “sun”. The starting position of the results should be 2.

const getData = () => {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2');
//&limit=10&offset=2
	xhr.send();
    xhr.responseType = 'json'

	xhr.onload = function() {
		console.log("ex_2:", xhr.response)
	}
}

getData();