import firebase from 'firebase/app';
import 'firebase/auth';
import domStringBuilders from '../../helpers/dom-string-builders';
import moviesData from '../../helpers/data/movies-data';
import smash from '../../helpers/smash';
import userMoviesData from '../../helpers/data/user-movies-data';

const addToUserCollection = (e) => {
  e.preventDefault();
  const currentMovieId = e.target.id.split('$')[1];
  const currentUserId = firebase.auth().currentUser.uid;
  const buttonType = e.target.id.split('$')[0];
  const buttonValue = e.target.dataset.value;
  const newUserMovie = {
    uid: currentUserId,
    movieId: currentMovieId,
    rating: 5,
    isWatched: false,
  };

  userMoviesData.getUserMoviesByUid(currentUserId)
    .then((userMovies) => {
      const matchingMovie = userMovies.find(u => u.movieId === currentMovieId);
      if (buttonType === 'rating') {
        newUserMovie.isWatched = (buttonValue === 'true');
      } else {
        newUserMovie.rating = parseInt(buttonValue, 10);
      }
      if (matchingMovie) {
        userMoviesData.editUserMovie(matchingMovie.id, newUserMovie)
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

const deleteFromCollection = (e) => {
  const currentMovieId = e.target.id.split('$')[1];
  userMoviesData.getUserMoviesByUid(firebase.auth().currentUser.uid)
    .then((userMovies) => {
      const matchingMovie = userMovies.find(u => u.movieId === currentMovieId);
      userMoviesData.deleteMovie(matchingMovie.id)
        .then(() => {
          allMovieBuilder(); // eslint-disable-line no-use-before-define
        })
        .catch(error => console.error('could ot delete user movie', error));
    })
    .catch(error => console.error(error, 'could not get user movies collection in deleteFromCollection'));
};

const movieButtonListeners = () => {
  const userButtons = Array.from(document.getElementsByClassName('user-btn'));
  userButtons.forEach((userButton) => {
    userButton.addEventListener('click', addToUserCollection);
  });
  const deleteButtons = Array.from(document.getElementsByClassName('delete-btn'));
  deleteButtons.forEach((deleteButton) => {
    deleteButton.addEventListener('click', deleteFromCollection);
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
