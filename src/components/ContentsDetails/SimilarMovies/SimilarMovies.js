import React from "react";
import { getMovieByPath } from "@/utils/movieClient";
import styles from "./SimilarMovies.module.scss";
import MediaCardMovies from "@/components/MediaCard/Movies/MediaCardMovies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const SimilarMovies = async ({ movieId }) => {
  const { results } = await getMovieByPath(`/movie/${movieId}/similar`, []);
  return (
    <div className={styles.similar}>
      {results && results.length > 0 ? (
        <>
          <p>Similar movies</p>
          <div className={styles.list}>
            {results.slice(0, 10).map((movie) => (
              <MediaCardMovies media={movie} key={movie.id} />
            ))}
          </div>
        </>
      ) : (
        <>
          <p>
            No similar movies found
            <FontAwesomeIcon
              icon={faCircleExclamation}
              className={`${styles.icon}`}
            />
          </p>
        </>
      )}
    </div>
  );
};
export default SimilarMovies;
