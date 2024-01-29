import React, { Suspense } from "react";
import styles from "./pageSeries.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import ContentsSeries from "@/components/ContentsMoviesSeries/ContentsSeries/ContentsSeries";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";

const SeriesPage = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.content}`}>
        <h2 className={styles.titlePage}>Serie</h2>
        <Suspense fallback={<LoadingSpinner />}>
          <ContentsSeries />
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
    </div>
  );
};

export default SeriesPage;
