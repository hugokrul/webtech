class Movie {
  writers = [];
  starts = [];
  constructor(year, title, genre, director, writers, stars) {
    this.year = year;
    this.title = title;
    this.genre = genre;
    this.director = director;
    this.writers = writers;
    this.stars = stars;
    this.poster = "../images/poster.jpg";
    this.trailer = "../images/trailer.mp4";
    this.plot =
      "Long ago up North on the Island of Berk, the young Viking, Hiccup, wants to join his town's fight against the dragons that continually raid their town. However, his macho father and village leader, Stoik the Vast, will not allow his small, clumsy, but inventive son to do so. Regardless, Hiccup ventures out into battle and downs a mysterious Night Fury dragon with his invention, but can't bring himself to kill it. Instead, Hiccup and the dragon, whom he dubs Toothless, begin a friendship that would open up both their worlds as the observantboy learns that his people have misjudged the species. But even as the two each take flight in their own way, they find that they must fight the destructive ignorance plaguing their world.";
  }

  addWriter(writer) {
    this.writers.push(writer);
  }

  addStar(star) {
    this.stars.push(star);
  }
}

class Artist {
  constructor(name, yob) {
    this.name = name;
    this.yob = yob;
  }
}

class Director extends Artist {
  constructor(name, yob, directedMovies) {
    super(name, yob);
    this.directedMovies = directedMovies;
  }

  addMovie(movie) {
    this.directedMovies.push(movie);
  }
}

class Writer extends Artist {
  constructor(name, yob, writtenBooks) {
    super(name, yob);
    this.writtenBooks = writtenBooks;
  }

  addBook(book) {
    this.writtenBooks.push(book);
  }
}

class Actor extends Artist {
  constructor(name, yob, listOfMovies, picture, character) {
    super(name, yob);
    this.listOfMovies = listOfMovies;
    this.picture = picture;
    this.character = character;
  }
}

// actors
const jayBaruchel = new Actor("Jay Baruchel", 1982, ["This is the end", "She's out of my league", "How to train your dragon", "Tropic Thunder", "Goon"], "../images/cast/jayB.jpg", "Hiccup");
const gerardButler = new Actor("Gerard Butler", 1969, ["Plane", "olympus has fallen", "Angel has fallen", "How to train your dragon", "London has fallen", "300"], "../images/cast/gerardB.jpg", "Stoick");
const craigFerguson = new Actor("Craig Ferguson", 1962, ["Then came you", "the hustler", "How to train your dragon", "Saving Grace", "Ill be there"], "../images/cast/craigF.jpg", "Gobber");
const americaFerrera = new Actor("America Ferrera", 1984, ["The sisterhood", "Barbie", "How to train your dragon", "WeCrashed", "La Misma Luna"], "../images/cast/americaF.jpg", "Astrid");
const jonahHill = new Actor("Jonah Hill", 1983, ["the wolf of wall street", "21 jump street", "How to train your dragon", "you people", "The lego Movie"], "../images/cast/jonahH.jpg", "Snotlout");
const christofferMP = new Actor("Christoffer Mintz-Plasse", 1989, ["Superbad", "Kick-Ass 2", "how to train your dragon", "Role models", "Neighbors"], "../images/cast/christofferM.jpg", "Fishlegs");
const tjMiller = new Actor("T.J. Miller", 1982, ["Office Christmas Party", "The Emoji Movie", "How to train your dragon", "Big Hero 6", "Underwater"], "../images/cast/tjM.jpg", "Tuffnut");
const kristenWiig = new Actor("Kirsten Wiig", 1973, ["Bridesmaids", "Wonder Woman 1984", "How to train your dragon", "Te secret life of Walter Mitty", "Despicable me"], "../images/cast/kristenW.jpg", "Ruffnut");
const robinAtkinDownes = new Actor("Robin Atkin Downes", 1976, ["King star king", "Superman vs. the elite", "How to train your dragon", "The werewolf reborn", "Meet the spy"], "../images/cast/robinA.jpg", "Ack");
const kieronElliot = new Actor("Kieron Elliot", 1995, ["Solitary", "Night Eyes", "How to train your dragon", "Sir billi", "Episode 50"], "../images/cast/kieronE.jpg", "Hoark the Haggard");
const ashleyJensen = new Actor("Ashley Jensen", 1969, ["Agatha Raisin", "Mayflies", "How to train your dragon", "Nativity!", "Christmas on Mistletoe Farm"], "../images/cast/ashleyJ.jpg", "Phlegma the Fierce");
const davidTennant = new Actor("David Tennant", 1971, ["Doctor Who", "Des", "How to train your dragon", "The escape artist", "Gracepoint"], "../images/cast/davidT.jpg");

let actors = [
  jayBaruchel,
  gerardButler,
  craigFerguson,
  americaFerrera,
  jonahHill,
  christofferMP,
  tjMiller,
  kristenWiig,
  robinAtkinDownes,
  kieronElliot,
  ashleyJensen,
];

// writer
const cressidaCowell = new Writer("Cressida Cowell", 1966, [
  "The Wizard of Once",
  "The Treetop Twins Adventures books",
  "Little Wonder",
  "Super Sue",
]);

// director
const deanDeBlois = new Director("Dean De Blois", 1970, [
  "How to train your dragon",
  "Lilo & Stitch",
  "Leroy & Stitch",
  "Helma",
]);

const httyd = new Movie(2010, "How To Train Your Dragon", "Action/Fantasy", deanDeBlois, [cressidaCowell], actors);

function populateHTML(movie) {
	const movieSection = document.createElement('section');

	const titleElement = document.createElement('h1');
	titleElement.innerText = movie.title;
	movieSection.appendChild(titleElement);

	const yearAndGenreElement = document.createElement('h3');
	yearAndGenreElement.innerText = movie.year + ' - ' + movie.genre;
	movieSection.appendChild(yearAndGenreElement);

	const directorElement = document.createElement('h4');
	directorElement.innerText = 'Directed by: ' + movie.director.name;
	movieSection.appendChild(directorElement);
	
	const writerElement = document.createElement('h4');
	let writerText = 'Written by: '
	for (let i = 0; i < movie.writers.length; i++ ) {
		writerText += movie.writers[i].name
		if (i == movie.writers.length - 1) {
			break;
		}
		writerText += ', '
	}
	writerElement.innerText = writerText;
	movieSection.appendChild(writerElement);
	document.body.appendChild(movieSection);

	const artistSection = document.createElement('section');
	artistSection.style.display = "grid";
	artistSection.style.gridTemplateColumns = "repeat(4, auto)";

	const castH2 = document.createElement('h2');
	castH2.innerText = "Cast:"
	movieSection.appendChild(castH2);

	for (let i = 0; i < movie.stars.length; i++) {
		const starElement = document.createElement('div');
		starElement.style.display = "flex";
		starElement.style.flexDirection = "column";
		starElement.style.alignItems = "center";
		starElement.style.marginBottom = "20px";

		const starImage = document.createElement('img');
		starImage.setAttribute('src', movie.stars[i].picture);
		starImage.setAttribute('width', '100px');
		starImage.setAttribute('height', '135px');
		
		const starTextElement = document.createElement('div');
		starTextElement.style.flexDirection = "column"
		starTextElement.style.flexWrap = "wrap";
		starTextElement.style.justifyContent = "center";
		starTextElement.style.backgroundColor = "#3d3d3d";
		starTextElement.style.padding = "10px";
		starTextElement.style.borderRadius = "5px";
		starTextElement.style.position = "absolute";
		starTextElement.style.marginTop = "130px";
		starTextElement.classList.add('hide');
		
		starImage.addEventListener('mouseover', () => {
			starTextElement.classList.remove('hide');
			starTextElement.classList.add('show');
		})
		starImage.addEventListener('mouseout', () => {
			starTextElement.classList.add('hide');
			starTextElement.classList.remove('show');
		})
		starTextElement.addEventListener('mouseover', () => {
			starTextElement.classList.remove('hide');
			starTextElement.classList.add('show');
		})
		starTextElement.addEventListener('mouseout', () => {
			starTextElement.classList.add('hide');
			starTextElement.classList.remove('show');
		})
		
		const starTextActor = document.createElement('p');
		starTextActor.style.textAlign = "left"
		starTextActor.innerText = `${movie.stars[i].name} - ${movie.stars[i].yob} plays: ${movie.stars[i].character}`

		const starTextMovies = document.createElement('p');
		let starTextMoviesText = 'Plays in: '
		const actorMovies = movie.stars[i].listOfMovies
		for (let i = 0; i<actorMovies.length; i++) {
			starTextMoviesText += actorMovies[i]
			if (i == actorMovies.length - 1) {
				break;
			}
			starTextMoviesText += ', '
		}
		starTextMovies.innerText = starTextMoviesText;

		starTextMovies.style.color ="white";
		starTextActor.style.color ="white";

		starTextElement.appendChild(starTextActor);
		starTextElement.appendChild(starTextMovies);

		starElement.appendChild(starImage);
		starElement.appendChild(starTextElement);
		artistSection.appendChild(starElement)
	}
	document.body.appendChild(artistSection);

	const posterTrailerPlotElement = document.createElement('section');

	const posterH2 = document.createElement('h2');
	posterH2.innerText = "Poster:"
	posterTrailerPlotElement.appendChild(posterH2);

	const posterElement = document.createElement('img');
	posterElement.setAttribute('src', movie.poster);
	posterElement.setAttribute('width', "200px");
	posterElement.setAttribute('height', "270px");
	posterTrailerPlotElement.appendChild(posterElement);

	const TrailerH2 = document.createElement('h2');
	TrailerH2.innerText = "Trailer:"
	posterTrailerPlotElement.appendChild(TrailerH2);

	const trailerElement = document.createElement('video');
	trailerElement.setAttribute('controls', true)
	const trailerSourceElement = document.createElement('source');
	trailerSourceElement.setAttribute('src', movie.trailer);
	trailerElement.appendChild(trailerSourceElement);
	posterTrailerPlotElement.appendChild(trailerElement);

	const plotH2 = document.createElement('h2');
	plotH2.innerText = "Plot:"
	posterTrailerPlotElement.appendChild(plotH2);

	const plotElement = document.createElement('p');
	plotElement.classList.add('plot')
	plotElement.innerText = movie.plot;
	posterTrailerPlotElement.appendChild(plotElement);

	document.body.appendChild(posterTrailerPlotElement);
}

function refreshDropdowns() {
  //get the dropdown;[p]
  let objectSelect = document.getElementById("objectSelect");

  let forbiddenTagNames = ["SCRIPT", "HEADER", "NAV"];

  //get all elements in the body
  let allElements = document.querySelectorAll("body *");
  let allElementTypes = [];

  let DOMelements = ["BODY", "HEADER"];

  for (const DOMelement of DOMelements) {
    let option = document.createElement("option");
    option.text = DOMelement.toLowerCase();
    objectSelect.add(option);
  }

  let seperatorOption = document.createElement("option");
  seperatorOption.text = "---Other Elements On Page---";
  objectSelect.add(seperatorOption);

  for (const element of allElements) {
    //get unique elements (just for the name) and add them to the list
    if (
      !allElementTypes.includes(element.tagName) &&
      !forbiddenTagNames.includes(element.tagName)
    ) {
      allElementTypes.push(element.tagName);
      let option = document.createElement("option");
      option.text = element.tagName.toLowerCase();
      objectSelect.add(option);
    }
  }
}

populateHTML(httyd);

refreshDropdowns();

function isHex(h) {
  let a = parseInt(h, 16);
  return a.toString(16) === h;
}

function getColorFormat(color) {
  //check if color is HEX
  color = color.replace("#", "");
  console.log(isHex(color));
  if (isHex(color)) {
    //color is HEX, but check validity
    if (color.length < 6) {
      color = prompt(
        "Value not valid. Enter a new HEX value or standard naming for the new color:"
      );
      getColorFormat(color);
    }
    return "#" + color.replace("#", "");
  }
  return color;
}

function headerDropdownAction() {
  //get the dropdowns
  let actionSelect = document.getElementById("actionSelect");
  let objectSelect = document.getElementById("objectSelect");

  //get all elements with the selected tagname
  let allElements = document.getElementsByTagName(objectSelect.value);
  for (const element of allElements) {
    let styling = getComputedStyle(element).fontSize;
    if (actionSelect.value === "Text Smaller") {
      element.style.fontSize = parseInt(styling.replace("px", "")) - 4 + "px";
    }
    if (actionSelect.value === "Text Bigger") {
      element.style.fontSize = parseInt(styling.replace("px", "")) + 4 + "px";
    }

    function getColorFormat(color) {
      //check if color is HEX
      color = color.replace("#", "");
      if (!isNaN(parseInt(color))) {
        //color is HEX, but check validity
        if (color.length < 6) {
          color = prompt(
            "Value not valid. Enter a new HEX value or standard naming for the new color:"
          );
          getColorFormat(color);
        }
        return "#" + color.replace("#", "");
      }
      return color;
    }

    if (actionSelect.value === "Text Color") {
      let color = prompt(
        "Enter a new HEX value or standard naming for the new color:"
      );
      element.style.color = getColorFormat(color);
    }
    if (actionSelect.value === "Background Color") {
      let color = prompt(
        "Enter a new HEX value or standard naming for the new backgroundColor:"
      );
      element.style.backgroundColor = getColorFormat(color);
    }
  }
}

refreshDropdowns();
