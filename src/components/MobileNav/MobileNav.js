"use client";
import styles from "./MobileNav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMagnifyingGlass,
  faTv,
  faHouse,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const MobileNav = ({ session }) => {
  const router = useRouter(); // Inizializza useRouter
  const handleIconClick = () => {
    router.push("/private/user");
    router.refresh(true);
  };
  if (session) {
    return (
      <footer className={`${styles.container}`}>
        <div className={`${styles.navigation}`}>
          <nav>
            <ul>
              <li>
                <Link href={`/private/homepage`}>
                  <FontAwesomeIcon
                    icon={faHouse}
                    className={`${styles.icon}`}
                  />
                </Link>
              </li>
              <li>
                <Link href={`/private/search`}>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className={`${styles.icon}`}
                  />
                </Link>
              </li>

              <li>
                <Link href={`/private/series`}>
                  <FontAwesomeIcon icon={faTv} className={`${styles.icon}`} />
                </Link>
              </li>
              <li>
                <Link href={`/private/movies`}>
                  <FontAwesomeIcon
                    icon={faVideo}
                    className={`${styles.icon}`}
                  />
                </Link>
              </li>
              <li>
                <span onClick={() => handleIconClick("/private/user")}>
                  {" "}
                  <FontAwesomeIcon icon={faUser} className={`${styles.icon}`} />
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    );
  }
};
export default MobileNav;
