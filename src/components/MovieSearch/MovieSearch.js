"use client";

import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import MovieSearchResults from "./MovieSearchResults/MovieSearchResults";
import styles from "./MovieSearch.module.scss";

const MovieSearch = () => {
  const [movieResults, setMovieResults] = useState([]);

  const updateMovieSearch = async (query) => {
    const response = await fetch(`/api/allmovies/search?query=${query}`);
    const { results } = await response.json();
    setMovieResults(results.filter((movie) => movie.poster_path));
    //console.log(results);
  };

  return (
    <>
      <div className={`${styles.searchContainer}`}>
        <DebounceInput
          className={styles.searchBar}
          minLength={2}
          debounceTimeout={500}
          onChange={(e) => updateMovieSearch(e.target.value)}
          placeholder="Cerca..."
          autoFocus
        />
      </div>
      {movieResults.length > 0 ? (
        <MovieSearchResults movieResults={movieResults} />
      ) : (
        <p className={`${styles.info}`}>
          Digitare il nome del film o della serie che stai cercando.
        </p>
      )}
    </>
  );
};

export default MovieSearch;
