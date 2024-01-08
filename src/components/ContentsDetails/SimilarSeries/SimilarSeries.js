import React from "react";
import { getMovieByPath } from "@/utils/movieClient";
import styles from "./SimilarSeries.module.scss";
import MediaCardSeries from "@/components/MediaCard/Series/MediaCardSeries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const SimilarSeries = async ({ seriesId }) => {
  const { results } = await getMovieByPath(`/tv/${seriesId}/similar`, []);

  return (
    <div className={styles.similar}>
      {results && results.length > 0 ? (
        <>
          <p>Similar series</p>
          <div className={styles.list}>
            {results.slice(0, 10).map((serie) => (
              <MediaCardSeries media={serie} key={serie.id} />
            ))}
          </div>
        </>
      ) : (
        <>
          <p className={`${styles.notFoundSimilar}`}>
            No similar series found
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
export default SimilarSeries;
