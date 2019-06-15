const mergeData = (movies, userMovies) => movies.map((movie) => {
  const builtMovie = movie;
  const matchingUserMovie = userMovies.find(u => u.movieId === movie.id);
  if (matchingUserMovie) {
    builtMovie.rating = matchingUserMovie.rating;
    builtMovie.isWatched = matchingUserMovie.isWatched;
  }
  return builtMovie;
});


export default {
  mergeData,
};
