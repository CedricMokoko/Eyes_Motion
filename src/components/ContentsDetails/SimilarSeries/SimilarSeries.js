import React from "react";
import { getMovieByPath } from "@/utils/movieClient";
import styles from "./SimilarSeries.module.scss";
import MediaCardSeries from "@/components/MediaCard/Series/MediaCardSeries";

const SimilarSeries = async ({ seriesId }) => {
  const { results } = await getMovieByPath(`/tv/${seriesId}/similar`, []);

  return (
    <div className={styles.similar}>
      <h2>Similar series...</h2>
      <div className={styles.list}>
        {results.slice(0, 10).map((serie) => (
          <MediaCardSeries media={serie} key={serie.id} />
        ))}
      </div>
    </div>
  );
};
export default SimilarSeries;
