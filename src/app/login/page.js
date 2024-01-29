"use client";
import LoginForm from "@/components/Formulari/LoginForm/LoginForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "./page.module.scss";
import Image from "next/image";

const imageLoader = ({ src, width, quality }) => {
  return `https://eyes-motion.vercel.app/${src}?w=${width}&q=${quality || 75}`;
};

const LoginFormPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <div className={styles.background}>
          <Image
            loader={imageLoader}
            src="background1.png"
            alt="background demon slayer"
            priority={true}
            fill
          />{" "}
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
              <span className={`${styles.copyText}`}>
                Eyes_Motion by Cédric Mokoko
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default LoginFormPage;
