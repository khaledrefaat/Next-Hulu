import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import MoviesList from '../components/moviesList';
import { Movie } from '../typings';
import requests from '../util/requests';

interface GenreProps {
  movies: Movie[];
  genre: string;
}

const Genre: React.FC<GenreProps> = ({ movies, genre }) => {
  return (
    <>
      <Head>
        <title>{(requests as any)[genre].title} Movies</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <MoviesList movies={movies} />
      </div>
    </>
  );
};

export default Genre;

export const getStaticPaths: GetStaticPaths = async () => {
  const genres = Object.entries(requests).map(([key]) => key);

  const paths = genres.map(genre => ({ params: { genre } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ctx => {
  const genre = ctx.params?.genre;

  let data;

  try {
    if (typeof genre === 'string') {
      const res = await fetch(
        'https://api.themoviedb.org/3' + (requests as any)[genre].url
      );
      data = await res.json();
    }
  } catch (err) {
    console.log(err);
  }

  if (data.results) {
    return {
      props: { movies: data.results, genre },
    };
  }

  return {
    notFound: true,
  };
};
