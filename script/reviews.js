// get elements from DOM.
const likeSection = document.getElementById('like');
const mostedLikedMovie = document.getElementById('most-liked-movie');

// Initialize the movies and the global variables.
let movies = ['seabeast', 'kungfupanda', 'riseoftheguardians', 'pussinboots', 'madagascar', 'megamind', 'httyd2', 'bighero6'];
let choosenMovies = [];
let movieElements = [];
let currentIndex = 0;

// creates an html element which you can add easily to the DOM.
function createImageElement(name, width, height, extension) {
    let element = document.createElement('div');
    element.classList.add('moviesToChoose');
    let image = document.createElement('img');
    image.setAttribute("src", `../images/recommended/${name}.${extension}`);
    image.setAttribute("height", height);
    image.setAttribute("width", width);
    image.setAttribute("id", name);
    image.addEventListener('click', next);
    element.appendChild(image);
    return element;
}

// Pushes the elements to the list from which another function appends it to the dom.
function createMovieElements() {
    for (let i = 0; i < movies.length; i++) {
        movieElements.push(createImageElement(movies[i], 250, 400, 'jpg'));
    }
}

// Shows the two elements you need to choose from.
function showElements() {
    likeSection.appendChild(movieElements[currentIndex]);
    likeSection.appendChild(movieElements[currentIndex+1]);
}

// Deletes the entire likesection's childs.
// You do this before you call the showElements function.
function hideElements() {
    while (likeSection.firstChild) {
        likeSection.removeChild(likeSection.firstChild);
    }
}

function next(e) {
    // Pushes the choosen movie.
    choosenMovies.push(e.target.id);

    // Increases the index by 2 to show the next 2 movies from the list.
    currentIndex+=2;

    // delete all elements in DOM.
    hideElements();

    // If the currentIndex is bigger than the list movies, it will throw an exception.
    // When it trows the exception you know that you went through the entire list.
    try {
        // Shows the elements based on the current index.
        showElements();
    } catch{
        // When the exception is thrown, we delete the movies that aren't choosen.
        movies = movies.filter(function(eliminate) {
            return choosenMovies.includes(eliminate);
        });

        // We re-initialize the movieElements and choosenmovies so that it can be repopulated.
        movieElements = [];
        choosenMovies = [];

        // Current index goes to zero to start the choosing again.
        currentIndex = 0;

        // Creates the movieElements from the updated 'movie' list.
        createMovieElements();

        // We do the same here as before. the list is length 1, you can't call list[1]
        // It will raise an exception and we know if that exception is thrown, there is only one movie left, which is the one you liked best.
        try {
            showElements();
        } catch {
            mostedLikedMovie.innerText = "You liked this movie best!!";
        }
    }
}

// Start the tournament when the script is loaded.
createMovieElements();
showElements();