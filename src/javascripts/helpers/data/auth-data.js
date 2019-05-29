import firebase from 'firebase/app';
import 'firebase/auth';

const authDiv = document.getElementById('authentication');
const moviesDiv = document.getElementById('movies');
const authNavbar = document.getElementById('navbarAuth');
const moviesNavbar = document.getElementById('navbarMovies');
const logOutNavbar = document.getElementById('navbarLogout');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.classList.add('hide');
      authNavbar.classList.add('hide');
      moviesDiv.classList.remove('hide');
      moviesNavbar.classList.remove('hide');
      logOutNavbar.classList.remove('hide');
    } else {
      authDiv.classList.remove('hide');
      authNavbar.classList.remove('hide');
      moviesDiv.classList.add('hide');
      moviesNavbar.classList.add('hide');
      logOutNavbar.classList.add('hide');
    }
  });
};

export default {
  checkLoginStatus,
};
