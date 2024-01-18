import React, { Suspense } from "react";
//import { notFound } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { getMovieByPath } from "@/utils/movieClient";
import SeriesDetails from "@/components/ContentsDetails/SeriesDetails/SeriesDetails";
import SimilarSeries from "@/components/ContentsDetails/SimilarSeries/SimilarSeries";

export const revalidate = 3600;

const SeriesIdPage = async ({ params: { id } }) => {
  const session = await getServerSession(authOptions);
  const series = await getMovieByPath(`/tv/${id}`, []);

  if (!session) {
    redirect("/login");
  }
  if (session) {
    return (
      <div>
        <SeriesDetails series={series} />
        <Suspense
          fallback={
            <p style={{ fontSize: "50px", color: "red" }}>
              Chargement similar series...
            </p>
          }
        >
          <SimilarSeries seriesId={series.id} />
        </Suspense>
      </div>
    );
  }
};
export default SeriesIdPage;
