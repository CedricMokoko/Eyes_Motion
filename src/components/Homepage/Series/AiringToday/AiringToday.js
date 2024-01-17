import { getMovieByPath } from "@/utils/movieClient";
import React from "react";
import styles from "./AiringToday.module.scss";
import MediaCardHomepage from "../../../MediaCard/Homepage/MediaCardHomepage";

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
            <MediaCardHomepage mediaSeries={series} />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};
export default AiringToday;
