const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');


API_VRL="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=86de29d13f3d0460561191a74e5cf12f&page=1&page=2"

IMG_PATH='https://image.tmdb.org/t/p/w1280'

SEARCH_URL='https://api.themoviedb.org/3/search/movie?api_key=86de29d13f3d0460561191a74e5cf12f&query="'


getMovies(API_VRL)

async function getMovies(url){
    const res = await fetch(url);
    const data = await res.json();
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')
    console.log("seat",id);

    
    getOneMovie(data.results, id)
};

  function getOneMovie(data, id){

 data.forEach((item)=> {
       let movie =  item;
      let price = movie.popularity / 26
      let optionEl = document.createElement('option');
      optionEl.setAttribute('value',price)
      optionEl.setAttribute('id',movie.id)
      optionEl.innerText = `${movie.title}($${price.toFixed()})`
      if(movie.id == id){
        optionEl.setAttribute('selected',true)
      }
      movieSelect.appendChild(optionEl)

   })
}

// console.log(data);
const but = document.getElementById('but')
but.addEventListener('click', function (e){
    console.log(e.target);
    
        let popupDiv = document.getElementById('popup');
        const pEl = document.createElement('p');
        const fullName = document.getElementById('fullName').value
  
        pEl.innerHTML = ` <p>Hi, ${fullName} Your order success </p>` 
        popupDiv.appendChild(pEl)    
       
    }
)



populateUI();

let ticketPrice = +movieSelect.value;

// let ticketPrice = process.env.API_VRL
// console.log(ticketPrice);

// save selected movie index and price
function setMovieData (movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex',movieIndex);
    localStorage.setItem('selectedMoviePrice',moviePrice);

}

// update total and count price ticket
function updateSelectedCount () {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
       
    // copy selected seats into arr
 const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    // map through array
    // return a new array indexes
    localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));


    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice.toFixed();
}

// get data from localStorage and populate UI
 function populateUI (){
const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if(selectedSeats !== null && selectedSeats.length > 0){
        seats.forEach((seat, index) => {
            if(selectedSeats.indexOf(index) > -1) {
                seat.classList.add('selected')
            }
        })
    };

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

    if(selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
 };

// movie select event
movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);  
  updateSelectedCount();
});

// seat click event
container.addEventListener('click', e => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) 
    {
        e.target.classList.toggle('selected');

        updateSelectedCount();
    }
});

// initial count and total set
updateSelectedCount();

