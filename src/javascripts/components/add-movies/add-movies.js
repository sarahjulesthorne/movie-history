// import firebase from 'firebase/app';
// import 'firebase/auth';
import addMovieData from '../../helpers/data/add-movies-data';
import movies from '../movies/movies';
import moviesData from '../../helpers/data/movies-data';
import util from '../../helpers/utils';

const moviesDiv = document.getElementById('movies');
const newMoviesDiv = document.getElementById('newMovies');
const titleInput = document.getElementById('movieTitleInput');
const movieRatingInput = document.getElementById('mpaaRatingInput');
const imageUrlInput = document.getElementById('imageUrlInput');
const imageDescriptionInput = document.getElementById('imageDescriptionInput');

const createNewMovie = (e) => {
  e.preventDefault();
  if (imageUrlInput.value === '') {
    imageUrlInput.value = 'http://testpatternshow.com/wp-content/uploads/2019/04/Black-Square.jpg';
    imageDescriptionInput.value = 'stock image of a black square';
  }
  const newMovieObject = {
    title: titleInput.value,
    movieRating: movieRatingInput.value,
    imageUrl: imageUrlInput.value,
    imageDescription: imageDescriptionInput.value,
  };
  moviesData.getMoviesArray()
    .then((moviesArray) => {
      const matchingMovie = moviesArray.find(m => m.title.toLowerCase() === titleInput.value.toLowerCase());
      if (!matchingMovie) {
        addMovieData.addMovie(newMovieObject)
          .then(() => {
            titleInput.value = '';
            movieRatingInput.value = '';
            imageUrlInput.value = '';
            imageDescriptionInput.value = '';
            movies.allMovieBuilder();
            newMoviesDiv.classList.add('hide');
            moviesDiv.classList.remove('hide');
          })
          .catch(error => console.error('could not add movie', error));
      }
    })
    .catch(error => console.error('could not get full movies array', error));
};

const newMovieBtn = () => {
  moviesDiv.classList.add('hide');
  newMoviesDiv.classList.remove('hide');
  document.getElementById('submitMovieBtn').addEventListener('click', createNewMovie);
};

const showAddMovieForm = () => {
  const domString = '<button type="button" class="btn btn-primary" id="addNewMovieBtn">Add New Movie<button>';
  util.printToDom('addMovie', domString);
  document.getElementById('addNewMovieBtn').addEventListener('click', newMovieBtn);
};

export default {
  showAddMovieForm,
};
