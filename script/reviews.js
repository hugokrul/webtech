const likeSection = document.getElementById('like')
const mostedLikedMovie = document.getElementById('most-liked-movie')

let movies = ['seabeast', 'kungfupanda', 'riseoftheguardians', 'pussinboots', 'madagascar', 'megamind', 'httyd2', 'bighero6'];
let choosenMovies = []
let movieElements = [];
let currentIndex = 0;

function createImageElement(name, width, height, extension) {
    let element = document.createElement('div');
    element.classList.add('moviesToChoose')
    let image = document.createElement('img');
    image.setAttribute("src", `../images/recommended/${name}.${extension}`);
    image.setAttribute("height", height);
    image.setAttribute("width", width);
    image.setAttribute("id", name);
    image.addEventListener('click', next);
    element.appendChild(image);
    return element
}

function createMovieElements() {
    for (let i = 0; i < movies.length; i++) {
        movieElements.push(createImageElement(movies[i], 250, 400, 'jpg'))
    }
}


function showElements() {
    likeSection.appendChild(movieElements[currentIndex]);
    likeSection.appendChild(movieElements[currentIndex+1]);
}

function hideElements() {
    while (likeSection.firstChild) {
        likeSection.removeChild(likeSection.firstChild)
    }
}

function next(e) {
    console.log(e.target.id);
    choosenMovies.push(e.target.id)
    currentIndex+=2;

    hideElements();
    try {
        showElements()
    } catch{
        console.log('done');
        movies = movies.filter(function(eliminate) {
            return choosenMovies.includes(eliminate)
        })
        movieElements = [];
        choosenMovies = [];
        currentIndex = 0;
        createMovieElements();
        try {
            showElements()
        } catch {
            mostedLikedMovie.innerText = "You liked this movie best!!";
        }
    }
}

createMovieElements();
showElements();