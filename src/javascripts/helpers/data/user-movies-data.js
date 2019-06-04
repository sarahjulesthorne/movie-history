import axios from 'axios';
import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getUserMoviesByUid = userId => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/userMovie.json?orderBy="uid"&equalTo="${userId}"`)
    .then((response) => {
      const userMovieArray = response.data;
      const userMovies = [];
      Object.keys(userMovieArray).forEach((umId) => {
        userMovieArray[umId].id = umId;
        userMovies.push(userMovieArray[umId]);
      });
      resolve(userMovies);
    })
    .catch(error => reject(error));
});

export default {
  getUserMoviesByUid,
};
