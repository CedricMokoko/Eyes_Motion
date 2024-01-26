import React, { Suspense } from "react";
import { getMovieByPath } from "@/utils/movieClient";
import styles from "./SimilarMovies.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import SimilarCardMovies from "@/components/MediaCard/Similar/SimilarCardMovies/SimilarCardMovies";

const SimilarMovies = async ({ movieId }) => {
  const { results } = await getMovieByPath(`/movie/${movieId}/similar`, []);
  return (
    <div className={styles.similar}>
      {results && results.length > 0 ? (
        <div className={`${styles.content}`}>
          <p>Similar movies</p>
          <div className={styles.list}>
            {results.slice(0, 10).map((movie) => (
              <SimilarCardMovies media={movie} key={movie.id} />
            ))}
          </div>
        </div>
      ) : (
        <div className={`${styles.contentNotFound}`}>
          <p className={`${styles.notFoundSimilar}`}>
            No similar movies found
            <FontAwesomeIcon
              icon={faCircleExclamation}
              className={`${styles.icon}`}
            />
          </p>
        </div>
      )}
    </div>
  );
};
export default SimilarMovies;
