const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];
    
       function getRobots (){
        for(let card of robots){
          let cardsDiv = document.getElementById('cards-container');
          let createCard = document.createElement('div');
          createCard.setAttribute('class','card')
          createCard.setAttribute("id", card.id);

          cardsDiv.appendChild(createCard);

      //img
    let imgUrl = card.image
    let imgElement = document.createElement('img');
    imgElement.setAttribute('src',`${imgUrl}`);
  
      // Name 
    let h2Element = document.createElement('h2')
    cardsDiv.appendChild(h2Element)
    h2Element.textContent = card.name

     //email
    let pElement = document.createElement('p')
    cardsDiv.appendChild(pElement)
    pElement.textContent = card.email

  
    

    createCard.appendChild(imgElement)  
    createCard.appendChild(h2Element);  
    createCard.appendChild(pElement);   
  
    }  
 

  }
       getRobots ()
       
       let searchInput = document.getElementById('search');
       searchInput.addEventListener('input', displayRobot)

function displayRobot(event) {
  event.preventDefault();

  robots.filter((e) => !e.name.toLowerCase().includes(event.target.value.toLowerCase()))
        .forEach((e) => document.getElementById(e.id).classList.add("hidden"));


robots.filter((e) => e.name.toLowerCase().includes(event.target.value.toLowerCase()))
      .forEach((e) => document.getElementById(e.id).classList.remove("hidden"))

}
     
      

