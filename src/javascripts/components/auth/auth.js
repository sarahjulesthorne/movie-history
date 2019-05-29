import util from '../../helpers/utils';
import googleIcon from './google-login-icon.png';

const authStringBuilder = () => {
  let domString = '<button class="btn btn-primary" type="button" id="googleSignInBtn">Sign In With Google';
  domString += `<img src="${googleIcon}" alt="Sign in with Google icon"/>`;
  domString += '</button>';
  util.printToDom('authentication', domString);
};

export default {
  authStringBuilder,
};
