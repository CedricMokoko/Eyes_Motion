import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./MovieSearchResults.module.scss";

const MovieSearchResults = ({ movieResults }) => {
  return (
    <>
      <h3 className={`${styles.entete}`}>Explore</h3>
      <div className={`${styles.searchResults}`}>
        {movieResults.map((movie) => (
          <div key={movie.id} className={`${styles.card}`}>
            <Link href={`/search/${movie.id}`}>
              <div className={`${styles.image}`}>
                <Image
                  fill
                  src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w500${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieSearchResults;
