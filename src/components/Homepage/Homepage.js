import React, { Suspense } from "react";
import BestSeller from "./BestSeller/BestSeller";
import Popular from "./Movies/Popular/Popular";
import NowPlaying from "./Movies/NowPlaying/NowPlaying";
import TopRated from "./Movies/TopRated/TopRated";
import Upcoming from "./Movies/Upcoming/Upcoming";
import TopRatedSeries from "./Series/TopRated/TopRatedSeries";
import OnTheAir from "./Series/OnTheAir/OnTheAir";
import PopularSeries from "./Series/Popular/PopularSeries";
import AiringToday from "./Series/AiringToday/AiringToday";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "./Homepage.module.scss";

const Homepage = () => {
  return (
    <div>
      {/* <BestSeller />
      <Popular />
      <NowPlaying />
      <Upcoming />
      <TopRated />
      <TopRatedSeries />
      <OnTheAir />
      <PopularSeries />
      <AiringToday /> */}
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
export default Homepage;
