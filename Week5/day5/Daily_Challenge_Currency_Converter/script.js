let formContainer = document.getElementById('form-container')
let toSelect = document.getElementById('toSelect')
let selectFrom = document.getElementById('fromSelect')

const getData = async() =>{
    let url = await fetch('http://api.currencylayer.com/list?access_key=27e79a83bb05037457b106b6643a86f8&format=1')
    let res = await url.json()
    // console.log(res);

    let data = Object.entries(res.currencies);
    displayData(data)
} 

let  displayData = (data) => {
    for(let currency of data){
        // console.log(currency);

        let option1 = document.createElement("option");
        option1.innerText = currency[0] + " - " + currency[1];
        selectFrom.appendChild(option1);
    }

    for(let currency of data){
        // console.log(currency);

        let option2 = document.createElement("option");
        option2.innerText = currency[0] + " - " + currency[1];
        toSelect.appendChild(option2);
    }
}

let convertCurrency = async() => {
    let input = document.getElementById('amount')
    let total = document.getElementById('result')
    total.innerText="";

	// let amount = input.value;
    let fromOption = selectFrom.value;
	let toOption = toSelect.value;

    

    let fromFetch = await fetch(`http://api.currencylayer.com/live?access_key=6b543e9294a71d26a6606f5449cf71a6&currencies=${fromOption.substring(0,3)}&format=1`)
    let resFrom = await fromFetch.json()
    // console.log(resFrom);
    // console.log(resFrom.quotes);
    let from = resFrom.quotes

    let toFetch = await fetch(`http://api.currencylayer.com/live?access_key=6b543e9294a71d26a6606f5449cf71a6&currencies=${toOption.substring(0,3)}&format=1`)
    let resTo = await toFetch.json()
    // console.log(resTo);
    // console.log(resTo.quotes);
    let to = resTo.quotes

    let pEl = document.createElement('h3');
    pEl.innerText = (Object.values(to)/Object.values(from))*input.value

    total.appendChild(pEl)

}

let btn = document.getElementById('convert')
btn.addEventListener('click',convertCurrency)

getData()
