import { getMovieByPath } from "@/utils/movieClient";
import React from "react";
import MediaCard from "../../../MediaCard/Homepage/MediaCardHomepage";
import styles from "./AiringToday.module.scss";

const AiringToday = async () => {
  const { results } = await getMovieByPath("/tv/airing_today");
  const airingToday = results.slice(10, 20);
  return (
    <div className={styles.container}>
      <h3>Series Airing Today</h3>
      <div className={styles.content}>
        {airingToday.map((series) => (
          <div key={series.id} className={`${styles.cardContainer}`}>
            {/* //La props mediaSeries={series} conterà toutes les infos de nos series airing_Today */}
            <MediaCard mediaSeries={series} />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};
export default AiringToday;
