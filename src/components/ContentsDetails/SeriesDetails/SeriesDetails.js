import React from "react";
import Image from "next/image";
import styles from "./SeriesDetails.module.scss";
import { Suspense } from "react";
import SeriesCredits from "../SeriesCredits/SeriesCredits";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPlay } from "@fortawesome/free-solid-svg-icons";

const SeriesDetails = ({ series }) => {
  return (
    <div className={styles.details}>
      <div className={styles.background}>
        <Image
          src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/original${series.backdrop_path}`}
          alt={series.name}
          fill
        />
      </div>
      <div className={styles.content}>
        <Image
          src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w342${series.poster_path}`}
          width={250}
          height={400}
          alt={series.name}
        />
        <div className={styles.description}>
          <h1>
            {series.name}{" "}
            <span className={styles.releaseDate}>
              ( {new Date(series.first_air_date).toLocaleDateString("fr-FR")} -{" "}
              {new Date(series.last_air_date).toLocaleDateString("fr-FR")} )
            </span>
          </h1>
          <p className={styles.production}>
            Production :{" "}
            <span>
              {series.production_companies
                .map((company) => company.name)
                .join(", ")}
            </span>
          </p>
          <h2>Synopsis</h2>
          <p className={styles.overview}>{series.overview}</p>
          <div className={styles.actions}>
            <Link href={`/video/${series.id}`}>
              <button className={styles.btn}>
                <FontAwesomeIcon icon={faPlay} className={`${styles.icon}`} />
                TRAILER
              </button>
            </Link>
            <FontAwesomeIcon icon={faHeart} className={`${styles.icon}`} />
          </div>
          <div className={styles.credits}>
            <Suspense fallback={<p>Chargement ...</p>}>
              <SeriesCredits seriesId={series.id} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SeriesDetails;
