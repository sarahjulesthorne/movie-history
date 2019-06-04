import axios from 'axios';
import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const addMovie = movieObject => axios.post(`${firebaseUrl}/movie.json`, movieObject);

export default {
  addMovie,
};
