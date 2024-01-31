"use client";
import Image from "next/image";
import styles from "./WelcomePage.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopyright,
  faPause,
  faRightLong,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const imageLoader = ({ src, width, quality }) => {
  return `https://eyes-motion.vercel.app/${src}?w=${width}&q=${quality || 75}`;
};

export default function WelcomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const delay = 3000;
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, delay);
    // Pulizia del timeout nel caso in cui il componente venga smontato prima che scada il timeout
    return () => clearTimeout(timeoutId);
  }, []);

  /*Uno dei modi per proteggere la pagina utente logato, in modo che se l'utente è logato 
  e provo a scrivere l'url / non la chiama e mi rimanda sul /private/homepage*/
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/private/homepage");
      router.refresh();
    }
  }, [status, router]);

  if (isLoading) {
    return (
      <div className={styles.loadingOverlay}>
        <div className={styles.loadingContent}>
          <FontAwesomeIcon
            icon={faSpinner}
            spin
            size="1x"
            className={styles.icon}
          />
          <div className={`${styles.logo}`}>
            <h2>
              <span className={styles.loadingText}>
                {" "}
                Eyes<small>_Motion</small>
              </span>
            </h2>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.details}>
          <div className={styles.background}>
            <Image
              loader={imageLoader}
              src="background1.png"
              alt="background demon slayer"
              priority={true}
              fill
            />
          </div>
          <div className={styles.content}>
            <div className={styles.description}>
              <h1>
                {
                  "Perché gli occhi sono il riflesso dell'anima, ogni storia sarà un viaggio nell'intimità dei tuoi sentimenti. "
                }
              </h1>
              <h2 className={styles.production}>
                <span>Benvenuto </span>
                {
                  "nel futuro dell'intrattenimento. Streaming senza limiti, solo per te."
                }
              </h2>
              <h3>
                {"Il racconto comincia qui "}
                <FontAwesomeIcon
                  icon={faRightLong}
                  className={`${styles.icon}`}
                />
                <Link href={`/register`}> registrati... </Link>
                <FontAwesomeIcon icon={faPause} className={`${styles.icon}`} />
                <Link href={`/login`}> accedi...</Link>
              </h3>
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
      //{" "}
    </div>
  );
}
