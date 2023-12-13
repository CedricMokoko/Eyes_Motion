import LoginForm from "@/components/Formulari/LoginForm/LoginForm";
import React from "react";
import { getMovieByPath } from "@/utils/movieClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "./page.module.scss";
import Image from "next/image";

const LoginFormPage = async () => {
  const { results } = await getMovieByPath("/tv/top_rated", []);
  const bestSeller = results.slice(7, 8);

  return (
    <div className={styles.container}>
      {bestSeller.map((movie) => (
        <div key={movie.id} className={styles.details}>
          <div className={styles.background}>
            <Image
              src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/original${movie.backdrop_path}`}
              alt={movie.id}
              fill
            />
          </div>
          <div className={styles.content}>
            <div className={styles.description}>
              <LoginForm />
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.link}>
              <p>Condizioni generali di abbonamento</p>
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
                <span>Eyes Motion</span> by Cédric Mokoko
              </Link>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoginFormPage;
