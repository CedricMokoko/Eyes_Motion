import React, { Suspense } from "react";
import MovieDetails from "@/components/ContentsDetails/MovieDetails/MovieDetails";
import SimilarMovies from "@/components/ContentsDetails/SimilarMovies/SimilarMovies";
import SeriesDetails from "@/components/ContentsDetails/SeriesDetails/SeriesDetails";
import SimilarSeries from "@/components/ContentsDetails/SimilarSeries/SimilarSeries";
import { getMovieByPath } from "@/utils/movieClient";
import styles from "./pageSearchId.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export const revalidate = 3600;

const SearchIdPage = async ({ params: { id } }) => {
  const multiSeries = await getMovieByPath(`/tv/${id}`, []);
  const multiMovie = await getMovieByPath(`/movie/${id}`, []);
  if (multiSeries.id) {
    return (
      <>
        <div>
          <SeriesDetails series={multiSeries} />
          <Suspense
            fallback={
              <FontAwesomeIcon
                icon={faCircleNotch}
                spin
                className={styles.loadingIcon}
              />
            }
          >
            <SimilarSeries seriesId={multiSeries.id} />
          </Suspense>
        </div>
      </>
    );
  }
  if (multiMovie.id) {
    return (
      <div>
        <MovieDetails movie={multiMovie} movieId={multiMovie.id} />
        <Suspense fallback={<p className={styles.loadingString}>Loading...</p>}>
          <SimilarMovies movieId={multiMovie.id} />
        </Suspense>
      </div>
    );
  }
};
export default SearchIdPage;
