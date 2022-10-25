import React from "react";
import Movie from "./Movie";

const MovieList = ({ movies }) => {
  const movieNodes = movies.map((movie) => {
    return <Movie key={movie.id} movie={movie} />;
  });
  return (
    <>
      <ul>{movieNodes}</ul>
    </>
  );
};

export default MovieList;
