import util from '../../helpers/utils';

const moviesStringBuilder = () => {
  const domString = '<h1>Hi! I\'m the Movies Div < /h1>';
  util.printToDom('movies', domString);
};

export default {
  moviesStringBuilder,
};
