import React from "react";
import RegisterForm from "@/components/Formulari/RegisterForm/RegisterForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "./page.module.scss";
import Image from "next/image";
import background1 from "../../../public/background1.png";

const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <div className={styles.background}>
          <Image src={background1} alt="background demon slayer" fill />
        </div>
        <div className={styles.content}>
          <div className={styles.description}>
            <RegisterForm />
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
    </div>
  );
};
export default RegisterPage;
