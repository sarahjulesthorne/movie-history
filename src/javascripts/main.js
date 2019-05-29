import firebase from 'firebase/app';
import 'firebase/auth';
import 'bootstrap';
import '../styles/main.scss';
import apiKeys from './helpers/apiKeys.json';
import authFunctions from './components/auth/auth';
import moviesFunctions from './components/movies/movies';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authFunctions.authStringBuilder();
  moviesFunctions.moviesStringBuilder();
};
init();
