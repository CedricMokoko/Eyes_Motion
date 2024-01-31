import React, { Suspense } from "react";
import styles from "./ResultsSearch.module.scss";
import SearchCard from "@/components/MediaCard/Search/SearchCard";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";

const ResultsSearch = ({ contentsResults }) => {
  return (
    <div className={styles.containerGenerale}>
      <div className={styles.container}>
        <h3 className={`${styles.entete}`}>Explore</h3>
        <Suspense fallback={<LoadingSpinner />}>
          <div className={`${styles.searchResults}`}>
            {contentsResults.map((multi) => (
              <div key={multi.id} className={`${styles.card}`}>
                <div className={`${styles.image}`}>
                  <SearchCard media={multi} />
                </div>
              </div>
            ))}
          </div>
        </Suspense>
      </div>
    </div>
  );
};
export default ResultsSearch;
