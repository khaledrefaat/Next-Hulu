import Image from 'next/image';
import React from 'react';
import { Movie } from '../typings';
import LikeIcon from '../assets/like.svg';

interface MoviesListProps {
  movies: Movie[];
}

const MoviesList: React.FC<MoviesListProps> = ({ movies }) => {
  return (
    <div className="mx-5 sm:mx-2 md:mx-0 sm:grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-3 gap-x-4 3xl:grid-cols-4 4xl:grid-cols-5">
      {movies.map(movie => (
        <div
          key={movie.id}
          className="my-7 group cursor-pointer transform sm:hover:scale-105 transition-transform duration-200 ease-in hover:z-50"
        >
          <Image
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            layout="responsive"
            alt={movie.title}
            height={500}
            width={500}
          />
          <h2 className="mt-1 sm:text-lg lg:text-xl 2xl:text-2xl 3xl:text-4xl 4xl:text-5xl text-white group-hover:font-bold transition-all duration-100 ease-in-out">
            {movie.title || movie.original_title}
          </h2>
          <p className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-100 ease-in-out 3xl:text-4xl">
            {movie.release_date}
            <LikeIcon className="h-5 ml-2 mr-1 3xl:h-12" /> {movie.vote_count}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MoviesList;
