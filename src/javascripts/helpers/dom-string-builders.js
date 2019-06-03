import util from './utils';

const moviesStringBuilder = (arrayToPrint) => {
  let domString = '<h2 id="allMoviesTitle" class="w-100 text-center">All Movies</h2>';
  domString += '<div class="row">';
  arrayToPrint.forEach((movie) => {
    domString += '<div class="col-3">';
    domString += `<div class="card" id="${movie.id}">`;
    domString += `<img src="${movie.imageUrl}" class="card-img-top" alt="${movie.imageDescription}">`;
    domString += '<div class="card-body">';
    domString += `<h4 class="card-title">${movie.title}</h4>`;
    domString += `<p class="card-text text-center" id="mpaa.${movie.id}">MPAA Rating: ${movie.movieRating}</p>`;
    domString += '<p class="card-text w-50">Not Rated</p>';
    domString += `<button id="rating.${movie.id}" class="btn btn-secondary w-50 rate-btn">Rate Movie</button>`;
    domString += '<p class="card-text w-50">Not Watchlisted</p>';
    domString += `<button id="watchlist.${movie.id}" class="btn btn-secondary w-50 watchlist-btn">Add To Watchlist</button>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  domString += '</div>';
  util.printToDom('allMovies', domString);
};

export default {
  moviesStringBuilder,
};
