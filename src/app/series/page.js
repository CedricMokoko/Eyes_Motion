// import { getMovieByPath } from "@/utils/movieClient";
// import React from "react";
// import styles from "./pageSeries.module.scss";
// import MediaCardPages from "@/components/MediaCard/Series/MediaCardPages";
// import Link from "next/link";

// const SeriesPage = async () => {
//   const { results: topRated } = await getMovieByPath("/tv/top_rated");
//   const { results: airingToday } = await getMovieByPath("/tv/airing_today");
//   const { results: popular } = await getMovieByPath("/tv/popular");
//   const topRatedSeries = topRated.slice(10, 20);
//   const onTheHairSeries = topRated.slice(0, 10);
//   const airingTodaySeries = airingToday.slice(10, 20);
//   const popularSeries = popular.slice(0, 6);
//   return (
//     <div className={styles.container}>
//       <h2>Series</h2>

//       <div className={styles.content}>
//         {topRatedSeries.map((movie) => (
//           <div key={movie.id} className={`${styles.cardContainer}`}>
//             <MediaCardPages media={movie} />
//           </div>
//         ))}
//         {airingTodaySeries.map((movie) => (
//           <div key={movie.id} className={`${styles.cardContainer}`}>
//             <MediaCardPages media={movie} />
//           </div>
//         ))}
//         {popularSeries.map((movie) => (
//           <div key={movie.id} className={`${styles.cardContainer}`}>
//             <MediaCardPages media={movie} />
//           </div>
//         ))}{" "}
//         {onTheHairSeries.map((movie) => (
//           <div key={movie.id} className={`${styles.cardContainer}`}>
//             <MediaCardPages media={movie} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SeriesPage;

import { getMovieByPath } from "@/utils/movieClient";
import React from "react";
import styles from "./pageSeries.module.scss";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import MediaCardSeries from "@/components/MediaCardRefact/Series/MediaCardSeries";

const SeriesPage = async () => {
  const { results: topRated } = await getMovieByPath("/tv/top_rated");
  const { results: airingToday } = await getMovieByPath("/tv/airing_today");
  const { results: popular } = await getMovieByPath("/tv/popular");
  const topRatedSeries = topRated.slice(10, 20);
  const onTheHairSeries = topRated.slice(0, 10);
  const airingTodaySeries = airingToday.slice(10, 20);
  const popularSeries = popular.slice(0, 6);

  const session = await getServerSession(authOptions);
  if (session) {
    return (
      <div className={styles.container}>
        <h2>Series</h2>

        <div className={styles.content}>
          {topRatedSeries.map((serie) => (
            <div key={serie.id} className={`${styles.cardContainer}`}>
              <MediaCardSeries media={serie} />
            </div>
          ))}
          {airingTodaySeries.map((serie) => (
            <div key={serie.id} className={`${styles.cardContainer}`}>
              <MediaCardSeries media={serie} />
            </div>
          ))}
          {popularSeries.map((serie) => (
            <div key={serie.id} className={`${styles.cardContainer}`}>
              <MediaCardSeries media={serie} />
            </div>
          ))}{" "}
          {onTheHairSeries.map((serie) => (
            <div key={serie.id} className={`${styles.cardContainer}`}>
              <MediaCardSeries media={serie} />
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    redirect("login");
  }
};

export default SeriesPage;
