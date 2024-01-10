import { getMovieByPath } from "@/utils/movieClient";
import React from "react";
import MediaCard from "../../../MediaCard/Homepage/MediaCardHomepage";
import styles from "./PopularSeries.module.scss";

const PopularSeries = async () => {
  const { results } = await getMovieByPath("/tv/popular");
  const popularSeries = results.slice(0, 6);
  return (
    <div className={styles.container}>
      <h3>Most Popular Series</h3>
      <div className={styles.content}>
        {popularSeries.map((series) => (
          <div key={series.id} className={`${styles.cardContainer}`}>
            {/* //La props mediaSeries={series} conterà toutes les infos de nos series popular */}
            <MediaCard mediaSeries={series} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default PopularSeries;
