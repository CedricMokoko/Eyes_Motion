import { getMovieByPath } from "@/utils/movieClient";
import React from "react";
import styles from "./NowPlaying.module.scss";
import MediaCardHomepage from "../../../MediaCard/Homepage/MediaCardHomepage";

const NowPlaying = async () => {
  const { results } = await getMovieByPath("/movie/now_playing");
  const nowPlayingMovies = results.slice(10, 20);
  return (
    <div className={styles.container}>
      <h3>Now Palying</h3>
      <div className={styles.content}>
        {nowPlayingMovies.map((movie) => (
          <div key={movie.id} className={`${styles.cardContainer}`}>
            {/* //La props mediaMovies={movie} conterà toutes les infos de nos films now_playing */}
            <MediaCardHomepage mediaMovies={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default NowPlaying;
