import styles from "./ContentLiked.module.scss";
import { getServerSession } from "next-auth";
import prisma from "@/utils/prisma";
import { getHydratedMovies, getHydratedSeries } from "@/utils/movieClient";
import { authOptions } from "../../../app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const ContentLiked = async () => {
  const { user: session } = await getServerSession(authOptions);
  const { movieLikes } = await prisma.user.findFirst({
    where: { email: session.email },
    include: {
      movieLikes: true,
    },
  });

  const { serieLikes } = await prisma.user.findFirst({
    where: { email: session.email },
    include: {
      serieLikes: true,
    },
  });

  const movies = await getHydratedMovies(
    movieLikes.map((movie) => movie.movieId)
  );
  const series = await getHydratedSeries(
    serieLikes.map((serie) => serie.serieId)
  );

  if (!session) {
    redirect("/private/login");
  }
  if (session) {
    // Concatenare gli array movies e series
    const movieList = [...movies];
    const serieList = [...series];
    return (
      <div className={styles.contentList}>
        {serieList.map((itemSerie) => (
          <div key={itemSerie.id} className={`${styles.cardContainer}`}>
            <div className={`${styles.card}`}>
              <Link href={`/private/series/${itemSerie.id}`}>
                <div className={`${styles.image}`}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w500${itemSerie.poster_path}`}
                    alt={itemSerie.name}
                    fill
                  />
                </div>
              </Link>
            </div>
          </div>
        ))}
        {movieList.map((itemMovie) => (
          <div key={itemMovie.id} className={`${styles.cardContainer}`}>
            <div className={`${styles.card}`}>
              <Link href={`/private/movies/${itemMovie.id}`}>
                <div className={`${styles.image}`}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w500${itemMovie.poster_path}`}
                    alt={itemMovie.title}
                    fill
                  />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
};
export default ContentLiked;
