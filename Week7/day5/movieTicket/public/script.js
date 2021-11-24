// const dot = require('dotenv')
// dot.config({ path: '../.env' })
// const db = require('../module')

API_VRL="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=86de29d13f3d0460561191a74e5cf12f&page=1"
IMG_PATH='https://image.tmdb.org/t/p/w1280'
SEARCH_API='https://api.themoviedb.org/3/search/movie?api_key=86de29d13f3d0460561191a74e5cf12f&query="'

ID_PATH="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=86de29d13f3d0460561191a74e5cf12f&page=1"


const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

// get initial movies
getMovies(API_VRL); 

async function getMovies(url){
    const res = await fetch(url);
    const data = await res.json();
    // const data = await res.data
    
    showMovies(data.results)
};


function showMovies(movies){
    main.innerHTML ='';

    movies.forEach(movie => {
        const {poster_path, vote_average, overview, title, id} = movie
       const movieEl = document.createElement('div');
       movieEl.setAttribute('class','movie');

       movieEl.innerHTML = `
       <img src=${IMG_PATH + poster_path} alt="${title}">
       <div class="movie-info">
           <h3>${title}</h3>
           <span class="${getClassRating(vote_average)}">${vote_average}</span>
       </div>
       <div class="overview">
           <h3>Overview</h3> 
           <input type="submit" class="orderBtn" value="Order" onclick="passId()"><br>
           ${overview}
       </div>
       `
       main.appendChild(movieEl)
    });
}


 function passId(e){
    //  let movieId = e.target.movie.id
    //  movieId.setAttribute('selected')
    //  console.log(movieId);
    window.location = `order_and_seats.html`;
}

function getClassRating(vote){
    if(vote >= 8){
        return 'green'
    } else if (vote >= 5) {
        return 'orange'
    } else {
        return 'red'
    }

}

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    const searchTerm = search.value

    if(searchTerm && searchTerm !== ''){
        getMovies(SEARCH_API + searchTerm)

        search.value = ''
    } else {
        window.location.reload();
    }
})