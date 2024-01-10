import React from "react";
import Image from "next/image";
import styles from "./MediaCardHomepage.module.scss";
import Link from "next/link";

const MediaCard = ({ mediaMovies, mediaSeries }) => {
  if (mediaMovies) {
    return (
      <div className={`${styles.card}`}>
        <Link href={`/search/${mediaMovies.id}`}>
          <div className={`${styles.image}`}>
            <Image
              src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w500${mediaMovies.poster_path}`}
              alt={mediaMovies.title}
              fill
            />
          </div>
        </Link>
      </div>
    );
  }
  if (mediaSeries) {
    return (
      <div className={`${styles.card}`}>
        <Link href={`/search/${mediaSeries.id}`}>
          <div className={`${styles.image}`}>
            <Image
              src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w500${mediaSeries.poster_path}`}
              alt={mediaSeries.name}
              fill
            />
          </div>
        </Link>
      </div>
    );
  }
};
export default MediaCard;
