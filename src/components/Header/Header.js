"use client";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faRightToBracket,
  faUser,
  faVideo,
  faTv,
  faPlus,
  faMagnifyingGlass,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Header = ({ session }) => {
  const [hasShownWelcomeToast, setHasShownWelcomeToast] = useState(false);
  const router = useRouter(); // Inizializza useRouter

  useEffect(() => {
    if (session && !hasShownWelcomeToast) {
      // Mostra un toast solo se l'utente è autenticato e il toast non è stato ancora mostrato
      toast.success(`Hi, ${session.user.name}!`, {
        id: "Messages",
        style: { marginTop: "90px", marginRight: "0px" },
      });
      // Imposta la variabile di stato per indicare che il toast è stato mostrato
      setHasShownWelcomeToast(true);
    }
  }, [session, hasShownWelcomeToast]);

  const handleIconClick = () => {
    router.push("/private/user");
    router.refresh(true);
  };

  return (
    <>
      {session ? (
        <header className={`${styles.header}`}>
          <div className={`${styles.logo}`}>
            <h2>
              <Link href={`/homepage`}>
                Eyes<small>_Motion</small>
              </Link>
            </h2>
          </div>
          <div className={`${styles.navigation}`}>
            <nav>
              <ul>
                <li>
                  <Link href={`/homepage`}>
                    <FontAwesomeIcon
                      icon={faHouse}
                      className={`${styles.icon}`}
                    />
                    HOME
                  </Link>
                </li>
                <li className={`${styles.word}`}>
                  <Link href={`/search`}>
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      className={`${styles.icon}`}
                    />
                    CERCA
                  </Link>
                </li>
                <li>
                  <span
                    onClick={() => handleIconClick("/private/user")}
                    className={`${styles.icon}`}
                  >
                    <FontAwesomeIcon
                      icon={faPlus}
                      className={`${styles.icon}`}
                    />
                    LA TUA LISTA
                  </span>
                </li>
                <li>
                  <Link href={`/series`}>
                    <FontAwesomeIcon icon={faTv} className={`${styles.icon}`} />
                    SERIE
                  </Link>
                </li>
                <li>
                  <Link href={`/movies`}>
                    <FontAwesomeIcon
                      icon={faVideo}
                      className={`${styles.icon}`}
                    />
                    FILM
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={`${styles.user}`}>
            <span
              onClick={() => handleIconClick("/private/user")}
              className={`${styles.icon}`}
            >
              {session?.user?.name}
              <FontAwesomeIcon icon={faUser} className={`${styles.iconUser}`} />
            </span>
          </div>
        </header>
      ) : (
        <header className={`${styles.header2}`}>
          <div className={`${styles.logo}`}>
            <h2>
              <Link href={`/`}>
                Eyes<small>_Motion</small>
              </Link>
            </h2>
          </div>
          <div className={`${styles.navigation}`}>
            <nav>
              <ul>
                <li>
                  <Link href={`/register`} data-tooltip="Register">
                    <FontAwesomeIcon
                      icon={faUserPlus}
                      className={`${styles.icon}`}
                    />
                  </Link>
                </li>
                <li>
                  <Link href={`/login`} data-tooltip="Login">
                    <FontAwesomeIcon
                      icon={faRightToBracket}
                      className={`${styles.icon}`}
                    />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      )}
    </>
  );
};
export default Header;
