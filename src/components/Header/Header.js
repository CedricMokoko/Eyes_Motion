"use client";
import { useSession } from "next-auth/react";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faVideo,
  faTv,
  faPlus,
  faMagnifyingGlass,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Header = () => {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return (
      <header className={`${styles.header}`}>
        <div className={`${styles.logo}`}>
          <h2>
            <Link href={`/api/homepage`}>
              Eyes<small>_Motion</small>
            </Link>
          </h2>
        </div>
        <div className={`${styles.navigation}`}>
          <nav>
            <ul>
              <li>
                <Link href={`/api/homepage`}>
                  <FontAwesomeIcon
                    icon={faHouse}
                    className={`${styles.icon}`}
                  />
                  HOME
                </Link>
              </li>
              <li>
                <Link href={`/allmovies`}>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className={`${styles.icon}`}
                  />
                  CERCA
                </Link>
              </li>
              <li>
                <Link href={`/user/profile`}>
                  <FontAwesomeIcon icon={faPlus} className={`${styles.icon}`} />
                  LA TUA LISTA
                </Link>
              </li>
              <li>
                <Link href={`/serie`}>
                  <FontAwesomeIcon icon={faTv} className={`${styles.icon}`} />
                  SERIE{" "}
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
          <Link href={`/user/profile`}>
            {session.user.name}
            <FontAwesomeIcon icon={faUser} className={`${styles.iconUser}`} />
          </Link>
        </div>
      </header>
    );
  }
};
export default Header;
