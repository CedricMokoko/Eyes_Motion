import { getMovieByPath } from "@/utils/movieClient";
import React from "react";
import styles from "./pageMovies.module.scss";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import MediaCardMovies from "@/components/MediaCard/Movies/MediaCardMovies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const MoviesPage = async () => {
  const { results: popular } = await getMovieByPath("/movie/popular");
  const { results: nowPlaying } = await getMovieByPath("/movie/now_playing");
  const { results: topRated } = await getMovieByPath("/movie/top_rated");
  const { results: upcoming } = await getMovieByPath("/movie/upcoming");
  const popularMovies = popular.slice(0, 10);
  const nowPlayingMovies = nowPlaying.slice(10, 20);
  const topRatedMovies = topRated.slice(7, 17);
  const upcomingMovies = upcoming.slice(10, 20);
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }
  if (session) {
    return (
      <div className={styles.containerGenerale}>
        <div className={styles.container}>
          <h2>Film</h2>
          <div className={styles.content}>
            {popularMovies.map((movie) => (
              <div key={movie.id} className={`${styles.cardContainer}`}>
                <MediaCardMovies media={movie} />
              </div>
            ))}{" "}
            {upcomingMovies.map((movie) => (
              <div key={movie.id} className={`${styles.cardContainer}`}>
                <MediaCardMovies media={movie} />
              </div>
            ))}{" "}
            {nowPlayingMovies.map((movie) => (
              <div key={movie.id} className={`${styles.cardContainer}`}>
                <MediaCardMovies media={movie} />
              </div>
            ))}
            {topRatedMovies.map((movie) => (
              <div key={movie.id} className={`${styles.cardContainer}`}>
                <MediaCardMovies media={movie} />
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
export default MoviesPage;
