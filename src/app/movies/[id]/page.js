import React, { Suspense } from "react";
import { notFound } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import MovieDetails from "@/components/ContentsDetails/MovieDetails/MovieDetails";
import SimilarMovies from "@/components/ContentsDetails/SimilarMovies/SimilarMovies";
import { getMovieByPath } from "@/utils/movieClient";
import MoviesVideo from "@/components/ContentsVideos/MoviesVideo/MoviesVideo";

export const revalidate = 3600;

const MoviesIdPage = async ({ params: { id } }) => {
  const session = await getServerSession(authOptions);
  const movie = await getMovieByPath(`/movie/${id}`, []);

  if (!session) {
    redirect("/login");
  }
  if (session) {
    if (!movie.original_title) {
      return notFound();
    } else {
      return (
        <div>
          <MovieDetails movie={movie} />
          <Suspense fallback={<p>Chargement ...</p>}>
            <SimilarMovies movieId={movie.id} />
          </Suspense>
          {/* Video */}
          {/* <MoviesVideo movieId={movie.id} /> */}
        </div>
      );
    }
  }
};
export default MoviesIdPage;
