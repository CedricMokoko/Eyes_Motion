import { getMovieByPath } from "@/utils/movieClient";
import React from "react";
import styles from "./BestSeller.module.scss";
import Link from "next/link";
import Image from "next/image";

const BestSeller = async () => {
  const { results } = await getMovieByPath("/tv/top_rated");
  const bestSeller = results.slice(8, 12);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {bestSeller.map((series) => (
          <div key={series.id} className={`${styles.cardContainer}`}>
            <div className={`${styles.card}`}>
              <Link href={`/search/${series.id}`}>
                <div className={`${styles.image}`}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w500${series.poster_path}`}
                    alt={series.name}
                    fill
                  />
                  <div className={`${styles.content}`}>
                    <p className={styles.vote}>
                      {" "}
                      {series.vote_average.toFixed(1)}
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
