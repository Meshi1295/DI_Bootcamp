const axios = require('axios');

const users = async()=>{
  try{
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    const data = res.data;
    return data;
  }
  catch(e){
    console.log(e);
  }
}

module.exports = {
  getUsers:users
}
