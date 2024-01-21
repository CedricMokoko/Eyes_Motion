import SignOutButton from "@/components/SignOutButton/SignOutButton";
import styles from "./pageUser.module.scss";
import { getServerSession } from "next-auth";
import prisma from "@/utils/prisma";
import { getHydratedMovies, getHydratedSeries } from "@/utils/movieClient";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const UserPage = async () => {
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
    redirect("/login");
  }
  if (session) {
    // Concatenare gli array movies e series
    const combinedList = [...movies, ...series];
    return (
      <div className={`${styles.container}`}>
        <div className={`${styles.content}`}>
          <div className={`${styles.contentUser}`}>
            <p className={`${styles.user}`}>Ciao {session?.name}!</p>
            <SignOutButton />
          </div>
          <div className={`${styles.contentLiked}`}>
            <h1>La tua lista</h1>
            <h3>I tuoi film e serie</h3>
          </div>
          <div className={styles.containerList}>
            <div className={styles.contentList}>
              {combinedList.map((item) => (
                <div key={item.id} className={`${styles.cardContainer}`}>
                  <div className={`${styles.card}`}>
                    <Link href={`/search/${item.id}`}>
                      <div className={`${styles.image}`}>
                        <Image
                          src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w500${item.poster_path}`}
                          alt={item.name}
                          fill
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.link}>
            <p>Condizioni generali di abbonnamento</p>
            <p>Informazioni sulla privacy</p>
            <p>Norma sulla privacy in UE e UK</p>
            <p>Policy sui cookie</p>
            <p>Dispositivi supportati</p>
            <p>Assistenza</p>
            <p>Chi siamo</p>
            <p>Gestione preferenze dati personali</p>
          </div>
          <p className={`${styles.copyText}`}>
            <FontAwesomeIcon
              icon={faCopyright}
              className={`${styles.copyRight}`}
            />
            <Link
              href={`https://cedricmokoko.com/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={`${styles.copyText}`}>
                Eyes_Motion by Cédric Mokoko
              </span>
            </Link>
          </p>
        </div>
      </div>
    );
  }
};
export default UserPage;
