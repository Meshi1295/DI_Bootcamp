 function sendData(){
     const item = document.getElementById('item').value;
     const amount = document.getElementById('amount').value;
    //  const row =  item + ':' + amount;
    let listData = {
        item,
        amount
    }
    
   fetch(`http://localhost:3000/data`, {
       method: 'POST',
       headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(listData)
   })
   .then(res => res.json())
   .then(data => {
    console.log(data)
    document.getElementById('list').innerHTML = `${data.message}`
   })
    .catch((e) => console.log(e))
}


function getData(){
    fetch('http://localhost:3000/show')
    .then(res => res.json())
    .then(data => {
        displayData(data)
    })
   }



function displayData(allList) {
    let listDiv = document.getElementById('list');
    allList.forEach(item =>{
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      p1.innerText= item.item;
      p2.innerText= item.amount;
      listDiv.appendChild(p1)
      listDiv.appendChild(p2)
    })
  }