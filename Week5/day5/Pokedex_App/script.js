
let random_btn = document.getElementById('random-btn') 
random_btn.addEventListener('click',getRandomPokemon)

async function getRandomPokemon(){

    let randomPokemon = Math.floor((Math.random() * 807) + 1);

  let urlPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
  let res = await urlPokemon.json()
  if(res.status !== 200){
      renderPokemon(res)
  } else {
      throw new Error('Oh no! That Pokemon isn’t available…')
  }
}

 function renderPokemon(data){
   
    let name = document.getElementById('name');
    let id = document.getElementById('id');
    let height = document.getElementById('height');
    let weight = document.getElementById('weight');
    let type = document.getElementById('type');

    name.textContent = `Pokemon Name: ${data.name}`
    id.textContent = `Pokemon n°: ${data.id}`
    height.textContent = `Height: ${data.height}`
    weight.textContent = `Weight: ${data.weight}`


}