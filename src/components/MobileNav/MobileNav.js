"use client";
import { useSession } from "next-auth/react";
import styles from "./MobileNav.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMagnifyingGlass,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const MobileNav = () => {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return (
      <footer className={`${styles.container}`}>
        <div className={`${styles.navigation}`}>
          <nav>
            <ul>
              <li>
                <Link href={`/api/homepage`}>
                  <FontAwesomeIcon
                    icon={faHouse}
                    className={`${styles.icon}`}
                  />
                </Link>
              </li>
              <li>
                <Link href={`/allmovies`}>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className={`${styles.icon}`}
                  />
                </Link>
              </li>
              <li>
                <Link href={`/user/profile`}>
                  <FontAwesomeIcon
                    icon={faUser}
                    className={`${styles.iconUser}`}
                  />
                  {/* | {session.user.name} */}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    );
  }
};
export default MobileNav;
