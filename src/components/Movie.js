import React from "react";

const Movie = ({ movie }) => {
  return (
    <>
      <li>
        <a href={movie.url}>{movie.name}</a>
      </li>
    </>
  );
};

export default Movie;
