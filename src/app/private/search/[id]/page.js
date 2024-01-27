import React, { Suspense } from "react";
// import { notFound } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import MovieDetails from "@/components/ContentsDetails/MovieDetails/MovieDetails";
import SimilarMovies from "@/components/ContentsDetails/SimilarMovies/SimilarMovies";
import SeriesDetails from "@/components/ContentsDetails/SeriesDetails/SeriesDetails";
import SimilarSeries from "@/components/ContentsDetails/SimilarSeries/SimilarSeries";
import { getMovieByPath } from "@/utils/movieClient";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";

export const revalidate = 3600;

const SearchIdPage = async ({ params: { id } }) => {
  const session = await getServerSession(authOptions);
  const multiSeries = await getMovieByPath(`/tv/${id}`, []);
  const multiMovie = await getMovieByPath(`/movie/${id}`, []);
  if (!session) {
    redirect("/login");
  }
  if (session) {
    // if (!multiMovie.original_title) {
    //   return notFound();
    // }
    if (multiSeries.id) {
      return (
        <>
          <div>
            <SeriesDetails series={multiSeries} />
            <Suspense fallback={<LoadingSpinner />}>
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
          <Suspense fallback={<p>Chargement ...</p>}>
            <SimilarMovies movieId={multiMovie.id} />
          </Suspense>
        </div>
      );
    }
  }
};
export default SearchIdPage;
