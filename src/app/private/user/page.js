import SignOutButton from "@/components/SignOutButton/SignOutButton";
import styles from "./pageUser.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";
import ContentLiked from "@/components/PrivatePageUser/ContentLiked/ContentLiked";
import UserData from "@/components/PrivatePageUser/UserData/UserData";

const UserPage = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.content}`}>
        <div className={`${styles.contentUser}`}>
          <Suspense fallback={<LoadingSpinner />}>
            <UserData />
          </Suspense>
          <SignOutButton />
        </div>
        <div className={`${styles.contentLiked}`}>
          <h1>La tua lista</h1>
          <h3>I tuoi film e serie</h3>
        </div>
        <Suspense fallback={<LoadingSpinner />}>
          <div className={styles.containerList}>
            <ContentLiked />
          </div>
        </Suspense>
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
};
// };
export default UserPage;
