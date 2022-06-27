const API_KEY = process.env.API_KEY;

const fetch = {
  trending: {
    title: 'Trending',
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  },
  topRated: {
    title: 'TopRated',
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  },
  action: {
    title: 'Action',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  },
  comedy: {
    title: 'Comedy',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  },
  horror: {
    title: 'Horror',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  },
  romantic: {
    title: 'Romantic',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  },
  mystery: {
    title: 'Mystery',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  },
  sciFi: {
    title: 'Sci-Fi',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  },
  animation: {
    title: 'Animation',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  },
  western: {
    title: 'Western',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  },
  tv: {
    title: 'Tv',
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
  },
};

export default fetch;
