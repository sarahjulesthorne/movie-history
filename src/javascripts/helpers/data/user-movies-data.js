import axios from 'axios';
import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getUserMoviesByUid = userId => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/userMovie.json?orderBy="uid"&equalTo="${userId}"`)
    .then((response) => {
      const userMovieArray = response.data;
      const userMovies = [];
      Object.keys(userMovieArray).forEach((userMovieId) => {
        userMovieArray[userMovieId].id = userMovieId;
        userMovies.push(userMovieArray[userMovieId]);
      });
      console.error(userMovies);
      resolve(userMovies);
    })
    .catch(error => reject(error));
});

const editUserMovie = (movieId, movieObject) => axios.put(`${firebaseUrl}/userMovie/${movieId}.json`, movieObject);

const addUserMovie = movieObject => axios.post(`${firebaseUrl}/userMovie.json`, movieObject);

export default {
  getUserMoviesByUid,
  editUserMovie,
  addUserMovie,
};
