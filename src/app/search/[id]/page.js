import React, { Suspense } from "react";
// import { notFound } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import MovieDetails from "@/components/ContentsDetails/MovieDetails/MovieDetails";
import SimilarMovies from "@/components/ContentsDetails/SimilarMovies/SimilarMovies";
import SeriesDetails from "@/components/ContentsDetails/SeriesDetails/SeriesDetails";
import SimilarSeries from "@/components/ContentsDetails/SimilarSeries/SimilarSeries";
import { getMovieByPath } from "@/utils/movieClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "./pageSearchId.module.scss";

export const revalidate = 3600;

const SearchIdPage = async ({ params: { id } }) => {
  const session = await getServerSession(authOptions);
  const multiSeries = await getMovieByPath(`/tv/${id}`, []);
  const multiMovie = await getMovieByPath(`/movie/${id}`, []);
  if (!session) {
    redirect("/login");
  }
  if (session) {
    // if (!multiMovie.original_title) {
    //   return notFound();
    // }
    if (multiSeries.id) {
      return (
        <>
          <div>
            <SeriesDetails series={multiSeries} />
            <Suspense
              fallback={
                <p style={{ fontSize: "50px", color: "red" }}>
                  Chargement Similar search...
                </p>
              }
            >
              <SimilarSeries seriesId={multiSeries.id} />
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
    if (multiMovie.id) {
      return (
        <>
          <div>
            <MovieDetails movie={multiMovie} movieId={multiMovie.id} />
            <Suspense fallback={<p>Chargement ...</p>}>
              <SimilarMovies movieId={multiMovie.id} />
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
export default SearchIdPage;
