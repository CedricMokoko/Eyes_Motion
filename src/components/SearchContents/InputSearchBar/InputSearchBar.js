"use client";
import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import styles from "./InputSearchBar.module.scss";
import ResultsSearch from "../ResultsSearch/ResultsSearch";

const InputSearchBar = () => {
  const [contentsResults, setContentsResults] = useState([]);

  const updateInputSearchBar = async (query) => {
    const response = await fetch(`/api/auth/contents/search?query=${query}`);
    const { results } = await response.json();
    setContentsResults(results.filter((multi) => multi.poster_path));
  };

  return (
    <>
      <div className={`${styles.searchContainer}`}>
        <DebounceInput
          className={styles.searchBar}
          minLength={2}
          debounceTimeout={500}
          onChange={(e) => updateInputSearchBar(e.target.value)}
          placeholder="Cerca..."
          autoFocus
        />
        {contentsResults.length > 0 ? (
          <ResultsSearch contentsResults={contentsResults} />
        ) : (
          <p className={`${styles.info}`}>
            Digitare il nome del film o della serie che stai cercando.
          </p>
        )}
      </div>
    </>
  );
};
export default InputSearchBar;
