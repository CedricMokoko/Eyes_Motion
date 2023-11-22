import { getMovieByPath } from "@/utils/movieClient";
import React from "react";
import MediaCard from "../../../MediaCard/MediaCard";
import styles from "./AiringToday.module.scss";

const AiringToday = async () => {
  const { results } = await getMovieByPath("/tv/airing_today");
  const airingToday = results.slice(10, 20);
  return (
    <div className={styles.container}>
      <h3>Series Airing Today</h3>
      <div className={styles.content}>
        {airingToday.map((movie) => (
          <div key={movie.id} className={`${styles.cardContainer}`}>
            {/* //La props media={movie} conterà toutes les infos de nos series airing_Today */}
            <MediaCard media={movie} />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};
export default AiringToday;
