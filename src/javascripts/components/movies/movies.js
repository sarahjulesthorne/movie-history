import domStringBuilders from '../../helpers/dom-string-builders';
import moviesData from '../../helpers/data/movies-data';

const allMovieBuilder = () => {
  moviesData.getMoviesArray()
    .then((movies) => {
      domStringBuilders.moviesStringBuilder(movies);
    })
    .catch(error => console.error('could not get movies array', error));
};

export default {
  allMovieBuilder,
};
