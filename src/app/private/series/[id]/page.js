import React, { Suspense } from "react";
//import { notFound } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getMovieByPath } from "@/utils/movieClient";
import SeriesDetails from "@/components/ContentsDetails/SeriesDetails/SeriesDetails";
import SimilarSeries from "@/components/ContentsDetails/SimilarSeries/SimilarSeries";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "./pageSeriesId.module.scss";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";

export const revalidate = 3600;

const SeriesIdPage = async ({ params: { id } }) => {
  const session = await getServerSession(authOptions);
  const series = await getMovieByPath(`/tv/${id}`, []);

  if (!session) {
    redirect("/login");
  }
  if (session) {
    return (
      <>
        <div>
          <Suspense fallback={<LoadingSpinner />}>
            <SeriesDetails series={series} />
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
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
  }
};
export default SeriesIdPage;
