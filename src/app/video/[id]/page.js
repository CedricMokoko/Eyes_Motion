import React, { Suspense } from "react";
//import { notFound } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getMovieByPath } from "@/utils/movieClient";
import MoviesVideo from "@/components/ContentsVideos/MoviesVideo/MoviesVideo";
import SeriesVideo from "@/components/ContentsVideos/SeriesVideo/SeriesVideo";
import SimilarSeries from "@/components/ContentsDetails/SimilarSeries/SimilarSeries";
import SimilarMovies from "@/components/ContentsDetails/SimilarMovies/SimilarMovies";

export const revalidate = 3600;

const VideoIdPage = async ({ params: { id } }) => {
  const session = await getServerSession(authOptions);
  const movieVideo = await getMovieByPath(`/movie/${id}`, []);
  const serieVideo = await getMovieByPath(`/tv/${id}`, []);

  if (!session) {
    redirect("/login");
  }
  if (session) {
    // if (!multiMovie.original_title) {
    //   return notFound();
    // }
    if (movieVideo.id) {
      return (
        <div>
          <Suspense fallback={<p>Chargement ...</p>}>
            <MoviesVideo movieVideoId={movieVideo.id} />
          </Suspense>
          <Suspense fallback={<p>Chargement ...</p>}>
            <SimilarMovies movieId={movieVideo.id} />
          </Suspense>
        </div>
      );
    }
    if (serieVideo.id) {
      return (
        <div style={{ backgroundColor: "black" }}>
          <SeriesVideo serieVideoId={serieVideo.id} />
          <Suspense fallback={<p>Chargement ...</p>}>
            <SimilarSeries seriesId={serieVideo.id} />
          </Suspense>
        </div>
      );
    }
  }
};
export default VideoIdPage;
