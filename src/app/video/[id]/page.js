import React, { Suspense } from "react";
//import { notFound } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getMovieByPath } from "@/utils/movieClient";
import MoviesVideo from "@/components/ContentsVideos/MoviesVideo/MoviesVideo";
import SeriesVideo from "@/components/ContentsVideos/SeriesVideo/SeriesVideo";
import SimilarSeries from "@/components/ContentsDetails/SimilarSeries/SimilarSeries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "./pageVideoId.module.scss";
import SimilarMovies from "@/components/ContentsDetails/SimilarMovies/SimilarMovies";

export const revalidate = 3600;

const VideoIdPage = async ({ params: { id } }) => {
  const session = await getServerSession(authOptions);
  const movieVideo = await getMovieByPath(`/movie/${id}`, []);
  const serieVideo = await getMovieByPath(`/tv/${id}`, []);

  if (!session) {
    redirect("/login");
  }
  if (session) {
    // if (!multiMovie.original_title) {
    //   return notFound();
    // }
    if (movieVideo.id) {
      return (
        <div className={styles.containerVideoPage}>
          <Suspense fallback={<LoadingSpinner />}>
            <MoviesVideo movieVideoId={movieVideo.id} />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <SimilarMovies movieId={movieVideo.id} />
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
          </Suspense>
        </div>
      );
    }
    if (serieVideo.id) {
      return (
        <>
          <div>
            <SeriesVideo serieVideoId={serieVideo.id} />
            <Suspense fallback={<p>Chargement ...</p>}>
              <SimilarSeries seriesId={serieVideo.id} />
            </Suspense>
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
        </>
      );
    }
  }
};
export default VideoIdPage;
