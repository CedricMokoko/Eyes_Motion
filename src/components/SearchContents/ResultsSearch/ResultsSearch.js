import React from "react";
import styles from "./ResultsSearch.module.scss";
import SearchCard from "@/components/MediaCard/Search/SearchCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const ResultsSearch = ({ contentsResults }) => {
  return (
    <div className={styles.containerGenerale}>
      <div className={styles.container}>
        <h3 className={`${styles.entete}`}>Explore</h3>
        <div className={`${styles.searchResults}`}>
          {contentsResults.map((multi) => (
            <div key={multi.id} className={`${styles.card}`}>
              <div className={`${styles.image}`}>
                <SearchCard media={multi} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.link}>
          <p>Condizioni generali di abbonnamento</p>
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
    </div>
  );
};
export default ResultsSearch;
