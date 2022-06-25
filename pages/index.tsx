import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import MoviesList from '../components/moviesList';
import { Movie } from '../typings';
import requests from '../util/requests';

interface HomeProps {
  movies: Movie[];
}

const Home: NextPage<HomeProps> = ({ movies }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <MoviesList movies={movies} />
      </div>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async ctx => {
  let data;
  try {
    const res = await fetch(
      'https://api.themoviedb.org/3' + requests.trending.url
    );
    data = await res.json();
  } catch (err) {
    console.log(err);
  }

  if (data.results) {
    return {
      props: { movies: data.results },
    };
  }

  return {
    notFound: true,
  };
};
