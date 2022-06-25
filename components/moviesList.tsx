import Image from 'next/image';
import React from 'react';
import { Movie } from '../typings';

interface MoviesListProps {
  movies: Movie[];
}

const MoviesList: React.FC<MoviesListProps> = ({ movies }) => {
  return (
    <div className="w-full h-full flex flex-wrap justify-evenly">
      {movies.map(movie => (
        <div key={movie.id} className="my-5">
          <Image
            src={`https://image.tmdb.org/t/p/w400/${movie.backdrop_path}`}
            unoptimized
            alt={movie.title}
            height={300}
            width={300}
          />
          <div>{movie.title || movie.original_title}</div>
        </div>
      ))}
    </div>
  );
};

export default MoviesList;
