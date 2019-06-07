import axios from 'axios';
import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getMoviesArray = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/movie.json`)
    .then((response) => {
      const movieObject = response.data;
      const movies = [];
      Object.keys(movieObject).forEach((movieId) => {
        movieObject[movieId].id = movieId;
        movieObject[movieId].rating = 0;
        movieObject[movieId].isWatched = true;
        movies.push(movieObject[movieId]);
      });
      resolve(movies);
    })
    .catch(error => reject(error));
});

export default {
  getMoviesArray,
};
