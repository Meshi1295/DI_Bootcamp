
let btn = document.getElementById('button')
btn.addEventListener('click', loadingMess)
let containerDiv = document.querySelector('.container')

  function loadingMess (){
   
    let loading = document.createElement('i')
    loading.setAttribute('class', 'fas fa-spinner fa-pulse fa-8x');
    loading.setAttribute('id','loading')


    containerDiv.appendChild(loading)
    setTimeout(()=>{
        
        getData()
    },2000)
    
}

async function getData(){
    
    let randomNum = Math.floor((Math.random() * 82) + 1);
    let url = await fetch("https://swapi.dev/api/people/" + randomNum)
   let data = await url.json()
    
    if(data.status !== 200){
        renderData(data);
    } else {
        throw new Error('Oh No! That person isnt available.')
    }
}


let renderData = (data) => {
    let loadingEl = document.getElementById('loading')
    loadingEl.remove();

    let name = document.getElementById('name');
    let height = document.getElementById('height');
    let gender = document.getElementById('gender');
    let birth = document.getElementById('birth-year');
    let home = document.getElementById('home');

    name.textContent = `Name: ${data.name}`
    height.textContent = `Height: ${data.height}`
    gender.textContent = `gender: ${data.gender}`
    birth.textContent = `Year: ${data.birth_year}`  
    
     fetch(data.homeworld)
    .then((res) => res.json())
    .then((res) => home.textContent = `Home: ${res.name}`)
}








   

