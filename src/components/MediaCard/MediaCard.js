import React from "react";
import Image from "next/image";
import styles from "./MediaCard.module.scss";
import Link from "next/link";

const MediaCard = ({ media }) => {
  const formattedVoteAverage = media.vote_average.toFixed(1);

  return (
    <div className={`${styles.card}`}>
      <Link href={`/contents/${media.id}`}>
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
export default MediaCard;
