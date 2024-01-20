import React from "react";
import Image from "next/image";
import styles from "./SimilarCardSeries.module.scss";
import Link from "next/link";

const SimilarCardSeries = ({ media }) => {
  return (
    <div className={`${styles.card}`}>
      <Link href={`/series/${media.id}`}>
        <div className={`${styles.image}`}>
          <Image
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w500${media.poster_path}`}
            alt={media.name}
            fill
          />
        </div>
      </Link>
    </div>
  );
};
export default SimilarCardSeries;
