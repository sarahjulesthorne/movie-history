import firebase from 'firebase/app';
import 'firebase/auth';
import 'bootstrap';
import '../styles/main.scss';
import apiKeys from './helpers/apiKeys.json';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  console.error('testing, hello?');
};
init();
