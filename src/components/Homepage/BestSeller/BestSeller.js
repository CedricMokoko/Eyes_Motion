import { getMovieByPath } from "@/utils/movieClient";
import React from "react";
//import MediaCard from "../../MediaCard/MediaCard";
import styles from "./BestSeller.module.scss";
import Link from "next/link";
import Image from "next/image";

const BestSeller = async () => {
  const { results } = await getMovieByPath("/tv/top_rated");
  const bestSeller = results.slice(7, 11);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {bestSeller.map((movie) => (
          <div key={movie.id} className={`${styles.cardContainer}`}>
            <div className={`${styles.card}`}>
              <Link href={`/contents/${movie.id}`}>
                <div className={`${styles.image}`}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w500${movie.poster_path}`}
                    alt={movie.title}
                    fill
                  />
                  <div className={`${styles.content}`}>
                    <p className={styles.vote}>
                      {" "}
                      {movie.vote_average.toFixed(1)}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BestSeller;
