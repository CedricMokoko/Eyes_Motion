import { getMovieByPath } from "@/utils/movieClient";
import React from "react";
import MediaCard from "../../../MediaCard/MediaCard";
import styles from "./NowPlaying.module.scss";

const NowPlaying = async () => {
  const { results } = await getMovieByPath("/movie/now_playing");
  const nowPlayingMovies = results.slice(10, 20);
  return (
    <div className={styles.container}>
      <h3>Now Palying</h3>
      <div className={styles.content}>
        {nowPlayingMovies.map((movie) => (
          <div key={movie.id} className={`${styles.cardContainer}`}>
            {/* //La props media={movie} conterà toutes les infos de nos films now_playing */}
            <MediaCard key={movie.id} media={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default NowPlaying;
