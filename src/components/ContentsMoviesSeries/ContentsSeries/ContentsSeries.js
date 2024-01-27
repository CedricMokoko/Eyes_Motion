import { getMovieByPath } from "@/utils/movieClient";
import React from "react";
import styles from "./ContentsSeries.module.scss";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import MediaCardSeries from "@/components/MediaCard/Series/MediaCardSeries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const ContentsSeries = async () => {
  const { results: topRated } = await getMovieByPath("/tv/top_rated");
  const { results: airingToday } = await getMovieByPath("/tv/airing_today");
  const { results: popular } = await getMovieByPath("/tv/popular");
  const topRatedSeries = topRated.slice(10, 20);
  const onTheHairSeries = topRated.slice(0, 10);
  const airingTodaySeries = airingToday.slice(10, 20);
  const popularSeries = popular.slice(0, 6);

  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  if (session) {
    return (
      <div className={styles.containerGenerale}>
        <div className={styles.container}>
          <div className={styles.content}>
            {topRatedSeries.map((serie) => (
              <div key={serie.id} className={`${styles.cardContainer}`}>
                <MediaCardSeries media={serie} />
              </div>
            ))}
            {airingTodaySeries.map((serie) => (
              <div key={serie.id} className={`${styles.cardContainer}`}>
                <MediaCardSeries media={serie} />
              </div>
            ))}
            {popularSeries.map((serie) => (
              <div key={serie.id} className={`${styles.cardContainer}`}>
                <MediaCardSeries media={serie} />
              </div>
            ))}{" "}
            {onTheHairSeries.map((serie) => (
              <div key={serie.id} className={`${styles.cardContainer}`}>
                <MediaCardSeries media={serie} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
};

export default ContentsSeries;
