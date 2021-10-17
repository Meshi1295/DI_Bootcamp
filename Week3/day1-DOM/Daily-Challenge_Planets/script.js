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
    
}) 






