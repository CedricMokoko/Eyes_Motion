import React from "react";
import { getMovieByPath } from "@/utils/movieClient";
import styles from "./MoviesVideo.module.scss";
import MoviesVideoPlayer from "@/components/MediaVideo/MoviesVideoPlayer/MoviesVideoPlayer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const MoviesVideo = async ({ movieVideoId }) => {
  const { results } = await getMovieByPath(`/movie/${movieVideoId}/videos`, []);
  const movieVideo = results[0];

  return (
    <div className={styles.container}>
      <div className={styles.videoContent}>
        {movieVideo ? (
          <MoviesVideoPlayer
            mediaVideoMovies={movieVideo}
            key={movieVideo.id}
          />
        ) : (
          <p>
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              className={`${styles.icon}`}
            />
            No trailer found for this movie. Please try another movie.
          </p>
        )}
      </div>
    </div>
  );
};
export default MoviesVideo;
