import firebase from 'firebase/app';
import 'firebase/auth';
import 'bootstrap';
import '../styles/main.scss';
import apiKeys from './helpers/apiKeys.json';
import authFunctions from './components/auth/auth';
import authData from './helpers/data/auth-data';
import moviesFunctions from './components/movies/movies';
import navBarEvents from './components/my-nav-bar/my-nav-bar';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  navBarEvents.navBarEvents();
  authData.checkLoginStatus();
  authFunctions.authStringBuilder();
  moviesFunctions.moviesStringBuilder();
};
init();
