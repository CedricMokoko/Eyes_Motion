import { getMovieByPath } from "@/utils/movieClient";
import React from "react";
import styles from "./Upcoming.module.scss";
import Link from "next/link";
import Image from "next/image";

const Upcoming = async () => {
  const { results } = await getMovieByPath("/movie/upcoming");
  const upcomingdMovies = results.slice(10, 20);

  return (
    <div className={styles.container}>
      <h3>Upcoming Movies</h3>
      <div className={styles.content}>
        {upcomingdMovies.map((movie) => (
          <div key={movie.id} className={`${styles.cardContainer}`}>
            <div className={`${styles.card}`}>
              <Link href={`/private/search/${movie.id}`}>
                <div className={`${styles.image}`}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w500${movie.poster_path}`}
                    alt={movie.title}
                    fill
                  />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Upcoming;
