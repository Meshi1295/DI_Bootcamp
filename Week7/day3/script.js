// const allModules = require('./module.js')

function countries(){
    fetch('http://localhost:3000/api/countries')
    .then(res => res.json())
    .then(data => {
        showUsers(data);
    })
    .catch(e => {
        console.log(e);
    })
};
