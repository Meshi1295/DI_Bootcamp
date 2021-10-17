//Exercise 1 : Change The Navbar --------

// 1. In the <div> above, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
// let currentDiv = document.getElementById("navBar")
// currentDiv.removeAttribute("id");

// let newID = currentDiv.setAttribute("id", "socialNetworkNavigation")



// 2. add a new <li> to the <ul> 
// ------------------------------
// A. First, create a new <li> tag (use the createElement method).
// B. Create a new text node with “Logout” as its specified text.
// C. Append the text node to the newly created list node (li).
// D. Finally, append this updated list node to the unordered list above, using the appendChild method.
// let ulElement = document.querySelector("ul");
// let newIID = ulElement.setAttribute("id","liId");
// let li = document.createElement('li');

// const liId = document.querySelector('#liId');
// liId.appendChild(li) //ul (id)

// let a = document.createElement("a");
// li.appendChild(a)
// a.setAttribute("href" , "#")
// a.textContent = "Logout"


// 3. Bonus
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last li elements from their parent element (ul). Display the text of each link. (Hint: use the textContent property).


// Exercise 2 : Users ------------
// 1. In the HTML above change the name “Pete” to “Richard”.
// 2. Change each first name of the two <ul>'s to your name.

// let firstUl = document.querySelectorAll(".list")[0];
// let secondeLI = firstUl.lastElementChild.textContent = "Richard"

// let secondeUl = document.querySelectorAll(".list")
// let liInList = document.createElement('li')

// 3. At the end of each <ul> add a <li> that says “Hey students”.
// for(let item of secondeUl){
//    item.firstElementChild.textContent = "Meshi";
//    liInList.textContent = "Hey students";
   
//   item.appendChild(liInList)
// }
// // 4. Delete the name Sarah from the second <ul>.
// let lists = secondeUl[1];
// let sarahID = lists.getElementsByTagName('li');

// let removeSara = sarahID[1]
// removeSara.remove()


// 5. Bonus : 
// a. Add a class called student_list to both of the <ul>'s.
// b. Add the classes university and attendance to the first <ul>.



// Exercise 3 : Users And Style -----------------------
// 1. Add a “light blue” background color and some padding to the <div>.
let addID = document.querySelector("div");
addID.setAttribute("id", "title");
addID.style.backgroundColor = "lightblue";
addID.style.padding = "10px"


// 2. Do not display the first name (John) in the list.

let ulList = document.getElementsByTagName("ul")[0];
let firstJohn = ulList.firstElementChild.style.display = "none" ;

// 3. Add a border to the second name (Pete).
let SecondPete = document.getElementsByTagName("ul")[0];
SecondPete.style.border = "1px solid black";


// 4. Change the font size of the whole body.
document.body.style.fontSize = "45px"

// 5. Bonus : If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
