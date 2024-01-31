import React, { Suspense } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "./homepage.module.scss";
import BestSeller from "@/components/Homepage/BestSeller/BestSeller";
import Popular from "@/components/Homepage/Movies/Popular/Popular";
import NowPlaying from "@/components/Homepage/Movies/NowPlaying/NowPlaying";
import Upcoming from "@/components/Homepage/Movies/Upcoming/Upcoming";
import TopRated from "@/components/Homepage/Movies/TopRated/TopRated";
import TopRatedSeries from "@/components/Homepage/Series/TopRated/TopRatedSeries";
import OnTheAir from "@/components/Homepage/Series/OnTheAir/OnTheAir";
import PopularSeries from "@/components/Homepage/Series/Popular/PopularSeries";
import AiringToday from "@/components/Homepage/Series/AiringToday/AiringToday";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";

export const revalidate = 3600;

const userHomepage = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.content}`}>
        <Suspense fallback={<LoadingSpinner />}>
          <BestSeller />
          <Popular />
          <NowPlaying />
          <Upcoming />
          <TopRated />
          <TopRatedSeries />
          <OnTheAir />
          <PopularSeries />
          <AiringToday />
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
export default userHomepage;
