import React from "react";
import { getMovieByPath } from "@/utils/movieClient";
import styles from "./SimilarMovies.module.scss";
import MediaCardMovies from "@/components/MediaCard/Movies/MediaCardMovies";

const SimilarMovies = async ({ movieId }) => {
  const { results } = await getMovieByPath(`/movie/${movieId}/similar`, []);
  return (
    <div className={styles.similar}>
      <h3>Similar movies...</h3>
      <div className={styles.list}>
        {results.slice(0, 10).map((movie) => (
          <MediaCardMovies media={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};
export default SimilarMovies;
