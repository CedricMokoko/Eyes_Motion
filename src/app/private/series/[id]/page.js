import React, { Suspense } from "react";
import { getMovieByPath } from "@/utils/movieClient";
import SeriesDetails from "@/components/ContentsDetails/SeriesDetails/SeriesDetails";
import SimilarSeries from "@/components/ContentsDetails/SimilarSeries/SimilarSeries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "./pageSeriesId.module.scss";

export const revalidate = 3600;

const SeriesIdPage = async ({ params: { id } }) => {
  const series = await getMovieByPath(`/tv/${id}`, []);

  return (
    <>
      <div>
        <SeriesDetails series={series} />
        <Suspense fallback={<p className={styles.loadingString}>Loading...</p>}>
          <SimilarSeries seriesId={series.id} />
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
};
export default SeriesIdPage;
