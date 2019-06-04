import firebase from 'firebase/app';
import 'firebase/auth';
import domStringBuilders from '../../helpers/dom-string-builders';
import moviesData from '../../helpers/data/movies-data';
import userMoviesData from '../../helpers/data/user-movies-data';

const currentUser = firebase.auth().currentUser.uid;

const addToWatchlist = (e) => {
  e.preventDefault();
  const currentMovieId = e.target.id.split('.')[1];
  const newUserMovie = {
    uid: currentUser,
    movieId: currentMovieId,
    rating: e.target.closest('.rating-text').id.split('.')[1],
    isWatched: false,
  };
  console.error(newUserMovie);
  userMoviesData.getUserMoviesByUid(currentUser);
};

const movieButtonListeners = () => {
  const watchlistButtons = Array.from(document.getElementsByClassName('watchlist-btn'));
  watchlistButtons.forEach((watchlistButton) => {
    watchlistButton.addEventListener('click', addToWatchlist);
  });
};

const allMovieBuilder = () => {
  moviesData.getMoviesArray()
    .then((movies) => {
      domStringBuilders.moviesStringBuilder(movies);
      movieButtonListeners();
    })
    .catch(error => console.error('could not get movies array', error));
};

export default {
  allMovieBuilder,
};
