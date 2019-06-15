import firebase from 'firebase/app';
import 'firebase/auth';
import domStringBuilders from '../../helpers/dom-string-builders';
import moviesData from '../../helpers/data/movies-data';
import smash from '../../helpers/smash';
import userMoviesData from '../../helpers/data/user-movies-data';

const addToWatchlist = (e) => {
  e.preventDefault();
  const currentMovieId = e.target.id.split('$')[1];
  const currentUserId = firebase.auth().currentUser.uid;
  const newUserMovie = {
    uid: currentUserId,
    movieId: currentMovieId,
    rating: 0,
    isWatched: false,
  };

  userMoviesData.getUserMoviesByUid(currentUserId)
    .then((userMovies) => {
      const matchingMovie = userMovies.find(u => u.movieId === currentMovieId);
      if (matchingMovie) {
        newUserMovie.rating = 5;
        userMoviesData.editUserMovie(currentMovieId, newUserMovie)
          .then(() => {
            allMovieBuilder(); // eslint-disable-line no-use-before-define
          })
          .catch(error => console.error('could not update user by watchlist', error));
      } else {
        userMoviesData.addUserMovie(newUserMovie)
          .then(() => {
            allMovieBuilder(); // eslint-disable-line no-use-before-define
          })
          .catch(error => console.error('could not update user by watchlist', error));
      }
    })
    .catch(error => console.error('could not get user movies array', error));
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
      userMoviesData.getUserMoviesByUid(firebase.auth().currentUser.uid)
        .then((userMovies) => {
          const finalMovies = smash.mergeData(movies, userMovies);
          domStringBuilders.moviesStringBuilder(finalMovies);
          movieButtonListeners();
        })
        .catch(error => console.error(error, 'could not get user movies'));
    })
    .catch(error => console.error('could not get movies array', error));
};

export default {
  allMovieBuilder,
};
