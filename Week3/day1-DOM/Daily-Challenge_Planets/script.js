// In this exercise we will be creating a webpage with a black background as the universe and we will fill the universe with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.

// 1. Create an array which value is the planets of the solar system.
// 2. For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// 3. Each planet should have a different background color. (Hint: add a new class to each planet).
// 4. Finally append each div to the <section> in the HTML (presented below).
// 5. Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?


let planetArray = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus"];

planetArray.forEach(item => {
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class","planet");

    let sectionElement = document.querySelector(".listPlanets");
    sectionElement.appendChild(newDiv);

    newDiv.classList.add(item)
    newDiv.textContent = item;
}) ;

for (let i = 0; i < item.moon; i++ ){
    let moon = document.createElement("div");
    moon.classList.add("moon");
    let text = document.createTextNode(i + 1);
    moon.appendChild(text);

    newDiv.appendChild(moon);
}

sectionElement.appendChild(newDiv)







//lior
// let solar = [
//     {
//       name: "Mercury",
//       moon: 0,
//       color: "Grey",
//     },
//     {
//       name: "Venus",
//       moon: 0,
//       color: "Brown",
//     },
//     {
//       name: "Earth",
//       moon: 1,
//       color: "lightBlue",
//     },
//     {
//       name: "Mars",
//       moon: 2,
//       color: "Red",
//     },
//     {
//       name: "Jupiter",
//       moon: 79,
//       color: "orange",
//     },
//     {
//       name: "Saturn",
//       moon: 82,
//       color: "Gold",
//     },
//     {
//       name: "Uranus",
//       moon: 27,
//       color: "green",
//     },
//     {
//       name: "Neptune",
//       moon: 14,
//       color: "Blue",
//     },
//   ];
//   let main = document.querySelector(".listPlanets");
//   console.log(main);
//   for (let item of solar) {
//     let newDiv = document.createElement("div");
//     let newText = document.createTextNode(item.name);
//     newDiv.appendChild(newText);
//     newDiv.classList.add("planet");
//     newDiv.style.backgroundColor = item.color;
//     for (let i = 0; i < item.moon; i++) {
//       let newMoon = document.createElement("div");
//       newMoon.classList.add("moon");
//       let newText2 = document.createTextNode(i + 1);
//       newMoon.appendChild(newText2);
//       newDiv.appendChild(newMoon);
//     }
//     main.appendChild(newDiv);
//   }