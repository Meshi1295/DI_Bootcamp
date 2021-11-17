// const allModules = require('./module.js')


const countries = ()=> {    
     fetch('http://localhost:3000/api/countries')
     .then(res => res.json())
    .then(data => {displayData(data)})
    .catch((e)=>console.log(e)) 
    
};

function displayData(data){
    const form = document.getElementById('allCountries')
    let newDiv = document.createElement("div");
    newDiv.setAttribute('id','output');

    for(let i of data){
        console.log(data);
        let pEl = document.createElement('p');
        pEl.appendChild(document.createTextNode(JSON.stringify(i.country)))
        newDiv.appendChild(pEl)
        form.appendChild(newDiv)
    }
    
}
