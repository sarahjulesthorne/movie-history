import firebase from 'firebase/app';
import 'firebase/auth';
import util from '../../helpers/utils';
import googleIcon from './google-login-icon.png';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const authStringBuilder = () => {
  let domString = '<button class="btn btn-primary" type="button" id="googleSignInBtn">Sign In With Google';
  domString += `<img src="${googleIcon}" alt="Sign in with Google icon"/>`;
  domString += '</button>';
  util.printToDom('authentication', domString);
  document.getElementById('googleSignInBtn').addEventListener('click', signMeIn);
};

export default {
  authStringBuilder,
};
