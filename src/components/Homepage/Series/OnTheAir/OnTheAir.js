import { getMovieByPath } from "@/utils/movieClient";
import React from "react";
import styles from "./OnTheAir.module.scss";
import Link from "next/link";
import Image from "next/image";

const OnTheAir = async () => {
  const { results } = await getMovieByPath("/tv/top_rated");
  const onTheAir = results.slice(0, 7);

  return (
    <div className={styles.container}>
      <h3>Series On The Air</h3>
      <div className={styles.content}>
        {onTheAir.map((series) => (
          <div key={series.id} className={`${styles.cardContainer}`}>
            <div className={`${styles.card}`}>
              <Link href={`/private/search/${series.id}`}>
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
export default OnTheAir;
