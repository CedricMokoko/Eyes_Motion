import { getMovieByPath } from "@/utils/movieClient";
import React from "react";
import MediaCard from "../../../MediaCard/MediaCard";
import styles from "./TopRated.module.scss";

const TopRated = async () => {
  const { results } = await getMovieByPath("/movie/top_rated");
  const topRatedMovies = results.slice(7, 17);
  return (
    <div className={styles.container}>
      <h3>Top Rated Movies</h3>
      <div className={styles.content}>
        {topRatedMovies.map((movie) => (
          <div key={movie.id} className={`${styles.cardContainer}`}>
            <MediaCard media={movie} />{" "}
            {/* //La props media={movie} conterà toutes les infos de nos films top_rated */}
          </div>
        ))}
      </div>
    </div>
  );
};
export default TopRated;
