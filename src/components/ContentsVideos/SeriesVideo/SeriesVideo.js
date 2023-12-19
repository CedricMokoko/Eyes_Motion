import React from "react";
import { getMovieByPath } from "@/utils/movieClient";
import styles from "./SeriesVideo.module.scss";
import SeriesVideoPlayer from "@/components/MediaVideo/SeriesVideoPlayer/SeriesVideoPlayer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const SeriesVideo = async ({ serieVideoId }) => {
  const { results } = await getMovieByPath(`/tv/${serieVideoId}/videos`, []);
  const serieVideo = results[0];

  return (
    <div className={styles.container}>
      <div className={styles.videoContent}>
        {serieVideo ? (
          <SeriesVideoPlayer
            mediaVideoSeries={serieVideo}
            key={serieVideo.id}
          />
        ) : (
          <p>
            <FontAwesomeIcon
              icon={faTriangleExclamation}
              className={`${styles.icon}`}
            />
            No trailer found for this serie. Please try another serie.
          </p>
        )}
      </div>
    </div>
  );
};
export default SeriesVideo;
