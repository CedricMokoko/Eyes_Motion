"use client";
import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import styles from "./InputSearchBar.module.scss";
import ResultsSearch from "../ResultsSearch/ResultsSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKeyboard, faCopyright } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

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
          <>
            <p className={`${styles.info}`}>
              Digitare il nome del film o della serie che stai cercando
              <FontAwesomeIcon icon={faKeyboard} className={`${styles.icon}`} />
            </p>
          </>
        )}
      </div>
      <div className={styles.footer}>
        <div className={styles.link}>
          <p>Condizioni generali di abbonamento</p>
          <p>Informazioni sulla privacy</p>
          <p>Norma sulla privacy in UE e UK</p>
          <p>Policy sui cookie</p>
          <p>Dispositivi supportati</p>
          <p>Assistenza</p>
          <p>Chi siamo</p>
          <p>Gestione preferenze dati personali</p>
        </div>
        <p className={`${styles.copyText}`}>
          <FontAwesomeIcon
            icon={faCopyright}
            className={`${styles.copyRight}`}
          />
          <Link
            href={`https://cedricmokoko.com/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={`${styles.copyText}`}>
              Eyes_Motion by Cédric Mokoko
            </span>
          </Link>
        </p>
      </div>
    </>
  );
};
export default InputSearchBar;
