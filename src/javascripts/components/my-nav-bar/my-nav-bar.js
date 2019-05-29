import firebase from 'firebase/app';
import 'firebase/auth';

const navBarEvents = () => {
  const navLinks = Array.from(document.getElementsByClassName('nav-link'));
  navLinks.forEach((navLink) => {
    navLink.addEventListener('click', (e) => {
      if (e.target.parentNode.id === 'navbarLogout') {
        console.error(e.target.id);
        firebase.auth().signOut();
      }
    });
  });
  console.error('test');
  // for (let i = 0; i < navLinks.length; i + 1) {
  //   navLinks[i].addEventListener('click', (e) => {
  //     if (e.target.id === 'navbarLogout') {
  //       firebase.auth().signOut();
  //     }
  //   });
  // }
};

export default {
  navBarEvents,
};
