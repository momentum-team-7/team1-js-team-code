const form = document.querySelector('.the-form')
let movieList = document.querySelector('.the-movie-list')
let movie = document.querySelector('.the-movie').value


form.addEventListener('submit', e => {
    e.preventDefault();
})


const addMovie = document.querySelector('.the-post-button')
    addMovie.addEventListener('click', createMovie)
     


function createMovie() {
    console.log('create movie called')
    let movie = document.querySelector('input').value
    //renderMovie(movie)
    console.log('movie?', movie)
    
}



//     function renderMovie(movie) {
//     let movieEl = document.createElement('li')
//     movieEl.classname = "list-item";
//     movieEl.innerHTML = `${movie}`
//     movieList.appendChild(movieEl)
    
// }

 //function listMovies() {};