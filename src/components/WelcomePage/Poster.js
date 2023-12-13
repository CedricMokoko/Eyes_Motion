import { getMovieByPath } from "@/utils/movieClient";
import React from "react";
import styles from "./Poster.module.scss";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright, faRightLong } from "@fortawesome/free-solid-svg-icons";

const Poster = async () => {
  const { results } = await getMovieByPath("/tv/top_rated", []);
  const bestSeller = results.slice(7, 8);

  return (
    <div className={styles.container}>
      {bestSeller.map((movie) => (
        <div key={movie.id} className={styles.details}>
          <div className={styles.background}>
            <Image
              src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/original${movie.backdrop_path}`}
              alt={movie.id}
              fill
            />
          </div>
          <div className={styles.content}>
            <div className={styles.description}>
              <h1>
                {
                  "Perché gli occhi sono il riflesso dell'anima, ogni storia sarà un viaggio nell'intimità dei tuoi sentimenti. "
                }
              </h1>
              <h2 className={styles.production}>
                <span>Benvenuto </span>
                {
                  "nel futuro dell'intrattenimento. Streaming senza limiti, solo per te."
                }
              </h2>
              <h3>
                {"Il racconto comincia qui "}
                <FontAwesomeIcon
                  icon={faRightLong}
                  className={`${styles.icon}`}
                />
                <Link href={`/register`}> registrati...</Link>
              </h3>
            </div>
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
                <span>Eyes Motion</span> by Cédric Mokoko
              </Link>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Poster;
