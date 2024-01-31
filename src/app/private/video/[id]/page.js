import React, { Suspense } from "react";
import { getMovieByPath } from "@/utils/movieClient";
import MoviesVideo from "@/components/ContentsVideos/MoviesVideo/MoviesVideo";
import SeriesVideo from "@/components/ContentsVideos/SeriesVideo/SeriesVideo";
import SimilarSeries from "@/components/ContentsDetails/SimilarSeries/SimilarSeries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright, faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "./pageVideoId.module.scss";
import SimilarMovies from "@/components/ContentsDetails/SimilarMovies/SimilarMovies";

export const revalidate = 3600;

const VideoIdPage = async ({ params: { id } }) => {
  const movieVideo = await getMovieByPath(`/movie/${id}`, []);
  const serieVideo = await getMovieByPath(`/tv/${id}`, []);

  if (movieVideo.id) {
    return (
      <div className={styles.containerVideoPage}>
        <MoviesVideo movieVideoId={movieVideo.id} />
        <Suspense
          fallback={
            <FontAwesomeIcon
              icon={faCircleNotch}
              spin
              className={styles.loadingIcon}
            />
          }
        >
          {" "}
          <SimilarMovies movieId={movieVideo.id} />
        </Suspense>
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
  if (serieVideo.id) {
    return (
      <>
        <div>
          <SeriesVideo serieVideoId={serieVideo.id} />
          <Suspense
            fallback={
              <FontAwesomeIcon
                icon={faCircleNotch}
                spin
                className={styles.loadingIcon}
              />
            }
          >
            {" "}
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
};
export default VideoIdPage;
