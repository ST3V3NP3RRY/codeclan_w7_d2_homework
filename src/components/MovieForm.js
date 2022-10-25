import React, { useState } from "react";

const MovieForm = ({ onMovieSubmit }) => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const handleNameChange = (evt) => {
    setName(evt.target.value);
  };

  const handleUrlChange = (evt) => {
    setUrl(evt.target.value);
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    const nameToSubmit = name.trim();
    const urlToSubmit = url.trim();
    if (!name || !url) {
      return;
    }

    const newMovie = {
      name: nameToSubmit,
      url: urlToSubmit,
    };

    onMovieSubmit(newMovie);
  };

  return (
    <>
      <h1>Add a new movie to the list</h1>
      <hr></hr>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Movie name:</label>
        <input
          type="text"
          id="name"
          placeholder="Enter movie name"
          value={name}
          onChange={handleNameChange}
        ></input>
        <label htmlFor="url">Enter movie address:</label>
        <input
          type="text"
          id="url"
          placeholder="Enter the web adress of movie"
          value={url}
          onChange={handleUrlChange}
        ></input>
        <input
          className="form-btn"
          type="submit"
          value="Add a new movie to the list &gt;&gt;"
        />
      </form>
    </>
  );
};

export default MovieForm;
