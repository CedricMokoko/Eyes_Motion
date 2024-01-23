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
    </div>
  );
};
export default ResultsSearch;
