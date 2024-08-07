import React from "react";
import Image from "next/image";
import styles from "./MovieDetails.module.scss";
import { Suspense } from "react";
import MovieCredits from "../MovieCredits/MovieCredits";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import LikeMovies from "@/components/Like/LikeMovies/LikeMovies";

const MovieDetails = ({ movie }) => {
  return (
    <div className={styles.details}>
      <div className={styles.background}>
        <Image
          src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/original${movie.backdrop_path}`}
          alt={movie.title}
          fill
        />
      </div>
      <div className={styles.content}>
        <Image
          src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w342${movie.poster_path}`}
          width={250}
          height={400}
          alt={movie.title}
        />
        <div className={styles.description}>
          <h1>
            {movie.title}{" "}
            <span className={styles.releaseDate}>
              ({new Date(movie.release_date).toLocaleDateString("fr-FR")})
            </span>
          </h1>
          <p className={styles.production}>
            Production :{" "}
            <span>
              {movie.production_companies
                .slice(0, 4)
                .map((company) => company.name)
                .join(", ")}
            </span>
          </p>
          <h2>Synopsis</h2>
          <p className={styles.overview}>{movie.overview}</p>
          <div className={styles.actions}>
            <Link href={`/private/video/${movie.id}`}>
              <button className={styles.btn}>
                <FontAwesomeIcon icon={faPlay} className={`${styles.icon}`} />
                TRAILER
              </button>
            </Link>
            <LikeMovies likedMoviesId={movie.id} className={`${styles.icon}`} />
          </div>
          <div className={styles.credits}>
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
              <MovieCredits movieId={movie.id} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;
