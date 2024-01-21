import { getMovieByPath } from "@/utils/movieClient";
import React from "react";
import styles from "./pageSeries.module.scss";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import MediaCardSeries from "@/components/MediaCard/Series/MediaCardSeries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const SeriesPage = async () => {
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
          <h2>Series</h2>
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
        <div className={styles.footer}>
          <div className={styles.link}>
            <p>Condizioni generali di abbonnamento</p>
            <p>Informazioni sulla privacy</p>
            <p>Norma sulla privacy in UE e UK</p>
            <p>Policy sui cookie</p>
            <p>Dispositivi supportati</p>
            <p>Assistenza</p>
            <p>Chi siamo</p>
            <p>Gestione preferenze dati personali</p>
          </div>
          <p className={`${styles.copyText}`}>
            <FontAwesomeIcon
              icon={faCopyright}
              className={`${styles.copyRight}`}
            />
            <Link
              href={`https://cedricmokoko.com/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={`${styles.copyText}`}>
                Eyes_Motion by Cédric Mokoko
              </span>
            </Link>
          </p>
        </div>
      </div>
    );
  }
};

export default SeriesPage;
