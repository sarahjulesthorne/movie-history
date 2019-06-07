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

export default {
  getUserMoviesByUid,
};
