import { getMovieByPath } from "@/utils/movieClient";
import React from "react";
import MediaCard from "../../../MediaCard/Homepage/MediaCardHomepage";
import styles from "./Popular.module.scss";

const Popular = async () => {
  const { results } = await getMovieByPath("/movie/popular");
  const popularMovies = results.slice(0, 10);
  return (
    <div className={styles.container}>
      <h3>Most Popular Movies</h3>
      <div className={styles.content}>
        {popularMovies.map((movie) => (
          <div key={movie.id} className={`${styles.cardContainer}`}>
            {/* //La props media={movie} conterà toutes les infos de nos films popular */}
            <MediaCard media={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Popular;
