import React, { useState } from "react";
import MovieList from "../components/MovieList";
import MovieButton from "../components/MovieButton";
import MovieForm from "../components/MovieForm";

const UpcomingMovies = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      name: "Spider-Man: Into the Spider-Verse",
      url: "https://www.imdb.com/title/tt4633694/?ref_=rlm",
    },
    {
      id: 2,
      name: "Life Itself",
      url: "https://www.imdb.com/title/tt5989218/?ref_=rlm",
    },
    {
      id: 3,
      name: "Mary Queen of Scots",
      url: "https://www.imdb.com/title/tt2328900/?ref_=rlm",
    },
    {
      id: 4,
      name: "The Lego Movie 2: The Second Part",
      url: "https://www.imdb.com/title/tt3513498/?ref_=rlm",
    },
    {
      id: 5,
      name: "Captain Marvel",
      url: "https://www.imdb.com/title/tt4154664/?ref_=rlm",
    },
  ]);

  const addMovie = (newMovie) => {
    movies.id = Date.now();
    const updateMovies = [...movies, newMovie];
    setMovies(updateMovies);
  };

  return (
    <div>
      <h1>Upcoming film releases for UK</h1>
      <hr></hr>
      <MovieList movies={movies} />
      <hr></hr>
      <MovieButton />
      <hr></hr>

      <MovieForm onMovieSubmit={addMovie} />
    </div>
  );
};

export default UpcomingMovies;
