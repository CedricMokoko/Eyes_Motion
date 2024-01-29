import React, { Suspense } from "react";
import MovieDetails from "@/components/ContentsDetails/MovieDetails/MovieDetails";
import SimilarMovies from "@/components/ContentsDetails/SimilarMovies/SimilarMovies";
import SeriesDetails from "@/components/ContentsDetails/SeriesDetails/SeriesDetails";
import SimilarSeries from "@/components/ContentsDetails/SimilarSeries/SimilarSeries";
import { getMovieByPath } from "@/utils/movieClient";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";

export const revalidate = 3600;

const SearchIdPage = async ({ params: { id } }) => {
  const multiSeries = await getMovieByPath(`/tv/${id}`, []);
  const multiMovie = await getMovieByPath(`/movie/${id}`, []);
  if (multiSeries.id) {
    return (
      <>
        <div>
          <SeriesDetails series={multiSeries} />
          <Suspense fallback={<p>Loading similar series...</p>}>
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
        <Suspense fallback={<p>Loading similar series...</p>}>
          <SimilarMovies movieId={multiMovie.id} />
        </Suspense>
      </div>
    );
  }
};
export default SearchIdPage;
