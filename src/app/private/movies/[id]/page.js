import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import MovieDetails from "@/components/ContentsDetails/MovieDetails/MovieDetails";
import SimilarMovies from "@/components/ContentsDetails/SimilarMovies/SimilarMovies";
import { getMovieByPath } from "@/utils/movieClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright, faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "./pageMoviesId.module.scss";

export const revalidate = 3600;

const MoviesIdPage = async ({ params: { id } }) => {
  const movie = await getMovieByPath(`/movie/${id}`, []);

  if (!movie.original_title) {
    return notFound();
  } else {
    return (
      <>
        <div>
          <MovieDetails movie={movie} />
          <Suspense
            fallback={
              <FontAwesomeIcon
                icon={faCircleNotch}
                spin
                className={styles.loadingIcon}
              />
            }
          >
            <SimilarMovies movieId={movie.id} />
          </Suspense>
        </div>
        <div className={styles.footer}>
          <div className={styles.link}>
            <p>Condizioni generali di abbonamento</p>
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
export default MoviesIdPage;
