function getRobots(){
  fetch('http://localhost:5000/robots')
  .then(res => res.json())
  .then(data => {
    showUsers(data);
  })
  .catch(e => {
    console.log(e);
  })
}

function showUsers(arr) {
  const root = document.getElementById('root');
  arr.forEach((item, i) => {
    const div = document.createElement('div');
    div.innerText = item.name;
    root.appendChild(div);
  });

}

function sendData() {
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;
  console.log(password);
  fetch('http://localhost:5000/login',{
    method: 'POST',
    headers: {
      'Content-type':'application/json'
    },
    body: JSON.stringify({username,password})
  })
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(e => {
    console.log(e);
  })
}