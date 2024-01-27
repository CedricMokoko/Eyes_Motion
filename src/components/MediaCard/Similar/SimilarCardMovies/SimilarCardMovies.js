import React from "react";
import Image from "next/image";
import styles from "./SimilarCardMovies.module.scss";
import Link from "next/link";

const SimilarCardMovies = ({ media }) => {
  return (
    <div className={`${styles.card}`}>
      <Link href={`/private/movies/${media.id}`}>
        <div className={`${styles.image}`}>
          <Image
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w500${media.poster_path}`}
            alt={media.title}
            fill
          />
        </div>
      </Link>
    </div>
  );
};
export default SimilarCardMovies;
