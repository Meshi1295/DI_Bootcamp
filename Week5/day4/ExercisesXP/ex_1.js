// Exercise 1: Conversion
// Convert the below promise into async await:
// 
// fetch("https://swapi.dev/api/starships/9/")
    // .then(response => response.json())
    // .then(console.log);

async function fun (){
    let starShips = await fetch("https://swapi.dev/api/starships/9/")

    let res = await starShips.json()
   
    return res
    
   
}
fun ()
.then((res) => console.log(res))


