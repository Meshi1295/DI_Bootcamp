function getAll() {
  fetch('http://localhost:5000/api/countries')
  .then(res => res.json())
  .then(allcountries => {
    printCountries(allcountries);
  })
  .catch(e => {
    console.log(e);
  })
}

function addCountry(){
  const country = document.getElementById('insert_country_name').value;
  fetch(`http://localhost:5000/api/countries/${country}`,{
    method:'PUT'
  })
  .then(res => res.json())
  .then(row => {
    printCountries(row);
  })
  .catch(e => {
    console.log(e);
  })
}

function delCountry() {
  const id = document.getElementById('delete_country_id');
  fetch(`http://localhost:5000/api/countries/${id.value}`,{
    method:'DELETE'
  })
  .then(res => res.json())
  .then(row => {
    printCountries(row);
  })
  .catch(e => {
    console.log(e);
  })
}

function updateCountry(){
  const country_id = document.getElementById('id_country').value;
  const country_name = document.getElementById('name_country').value;
  fetch('http://localhost:5000/api/countries',{
    method:'POST',
    headers: {
      'Content-type':'application/json'
    },
    body: JSON.stringify({country_id,country_name})
  })
  .then(res => res.json())
  .then(row => {
    printCountries(row);
  })
  .catch(e => {
    console.log(e);
  })
}

function printCountries(arr) {
  const root = document.getElementById('root')
  arr.forEach((item, i) => {
    const p = document.createElement('p');
    p.innerText = item.country;
    root.appendChild(p)
  });
}
