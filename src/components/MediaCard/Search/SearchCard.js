import React from "react";
import Image from "next/image";
import styles from "./SearchCard.module.scss";
import Link from "next/link";

const SearchCard = ({ media }) => {
  return (
    <div className={`${styles.card}`}>
      <Link href={`/private/search/${media.id}`}>
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
export default SearchCard;
