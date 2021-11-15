const axios = require('axios');

const getFile = async() => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users') 
        const users = res.data
        return users

    } catch (err) {
        console.log(err);
    }
}
    
module.exports = {
    getFile,
}
