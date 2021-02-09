const form = document.querySelector('.the-form')
let movieList = document.querySelector('.the-movie-list')
let movie = document.querySelector('.the-movie').value
const url = 'http://localhost:3000/movies'

form.addEventListener('submit', e => {
    e.preventDefault();
})


const addMovie = document.querySelector('.the-post-button')
    addMovie.addEventListener('click', createMovie)



function createMovie() {
    console.log('create movie called')
    let movie = document.querySelector('input').value
    renderMovie(movie)
    console.log('movie?', movie)
    
}



function renderMovie(movie) {
    let movieEl = document.createElement('li')
    movieEl.classname = "list-item";
    movieEl.innerHTML = `${movie}`
    movieList.appendChild(movieEl)
    
}

    function listMovies() {
        console.log('confirm listMovies function ran'), 
        fetch(url)
        .then (resp =>
        resp.json()    )
        .then(data => {
            // for item **need to write for loop for each object in data
        })
    };

    listMovies()