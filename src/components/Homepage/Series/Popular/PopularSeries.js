import { getMovieByPath } from "@/utils/movieClient";
import React from "react";
import MediaCard from "../../../MediaCard/MediaCard";
import styles from "./PopularSeries.module.scss";

const PopularSeries = async () => {
  const { results } = await getMovieByPath("/tv/popular");
  const popularSeries = results.slice(0, 6);
  return (
    <div className={styles.container}>
      <h3>Most Popular Series</h3>
      <div className={styles.content}>
        {popularSeries.map((movie) => (
          <div key={movie.id} className={`${styles.cardContainer}`}>
            {/* //La props media={movie} conterà toutes les infos de nos series popular */}
            <MediaCard media={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default PopularSeries;
