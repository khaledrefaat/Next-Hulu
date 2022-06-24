const API_KEY = process.env.API_KEY;

const fetch = {
  trending: {
    title: 'Trending',
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  topRated: {
    title: 'TopRated',
    url: `/movie/top_rated/all/week?api_key=${API_KEY}&language=en-US`,
  },
  action: {
    title: 'Action',
    url: `/discover/movie/all/week?api_key=${API_KEY}&with_genres=28`,
  },
  comedyMovies: {
    title: 'Comedy',
    url: `/discover/movie/all/week?api_key=${API_KEY}&with_genres=35`,
  },
  horrorMovies: {
    title: 'Horror',
    url: `/discover/movie/all/week?api_key=${API_KEY}&with_genres=27`,
  },
  romanticMovies: {
    title: 'Romantic',
    url: `/discover/movie/all/week?api_key=${API_KEY}&with_genres=10749`,
  },
  mysteryMovies: {
    title: 'Mystery',
    url: `/discover/movie/all/week?api_key=${API_KEY}&with_genres=9648`,
  },
  sciFiMovies: {
    title: 'Sci-Fi',
    url: `/discover/movie/all/week?api_key=${API_KEY}&with_genres=878`,
  },
  animationMovies: {
    title: 'Animation',
    url: `/discover/movie/all/week?api_key=${API_KEY}&with_genres=16`,
  },
  westernMovies: {
    title: 'Western',
    url: `/discover/movie/all/week?api_key=${API_KEY}&with_genres=37`,
  },
  tv: {
    title: 'Tv Movie',
    url: `/discover/movie/all/week?api_key=${API_KEY}&with_genres=10770`,
  },
};

export default fetch;
