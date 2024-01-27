import React from "react";
import { getMovieByPath } from "@/utils/movieClient";
import styles from "./ContentsMovies.module.scss";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import MediaCardMovies from "@/components/MediaCard/Movies/MediaCardMovies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const ContentsMovies = async () => {
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
      </div>
    );
  }
};
export default ContentsMovies;
