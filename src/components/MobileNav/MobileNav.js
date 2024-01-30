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
import { usePathname, useRouter } from "next/navigation";

const MobileNav = ({ session }) => {
  const pathname = usePathname();
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
              <li
                style={{
                  backgroundColor:
                    pathname === "/private/homepage" ? "#62829a" : "",
                  borderRadius: pathname === "/private/homepage" ? "6px" : "",
                  padding: pathname === "/private/homepage" ? "8px" : "",
                }}
              >
                <Link
                  href={`/private/homepage`}
                  style={{
                    color: pathname === "/private/homepage" ? "goldenrod" : "",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faHouse}
                    className={`${styles.icon}`}
                  />
                </Link>
              </li>
              <li
                style={{
                  backgroundColor:
                    pathname === "/private/search" ? "#62829a" : "",
                  borderRadius: pathname === "/private/search" ? "6px" : "",
                  padding: pathname === "/private/homepage" ? "8px" : "",
                }}
              >
                {" "}
                <Link
                  href={`/private/search`}
                  style={{
                    color: pathname === "/private/search" ? "goldenrod" : "",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className={`${styles.icon}`}
                  />
                </Link>
              </li>
              <li
                style={{
                  backgroundColor:
                    pathname === "/private/series" ? "#62829a" : "",
                  borderRadius: pathname === "/private/series" ? "6px" : "",
                  padding: pathname === "/private/homepage" ? "8px" : "",
                }}
              >
                {" "}
                <Link
                  href={`/private/series`}
                  style={{
                    color: pathname === "/private/series" ? "goldenrod" : "",
                  }}
                >
                  <FontAwesomeIcon icon={faTv} className={`${styles.icon}`} />
                </Link>
              </li>
              <li
                style={{
                  backgroundColor:
                    pathname === "/private/movies" ? "#62829a" : "",
                  borderRadius: pathname === "/private/movies" ? "6px" : "",
                  padding: pathname === "/private/homepage" ? "8px" : "",
                }}
              >
                {" "}
                <Link
                  href={`/private/movies`}
                  style={{
                    color: pathname === "/private/movies" ? "goldenrod" : "",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faVideo}
                    className={`${styles.icon}`}
                  />
                </Link>
              </li>
              <li
                style={{
                  backgroundColor:
                    pathname === "/private/user" ? "#62829a" : "",
                  borderRadius: pathname === "/private/user" ? "6px" : "",
                  padding: pathname === "/private/homepage" ? "8px" : "",
                }}
              >
                {" "}
                <span
                  onClick={() => handleIconClick("/private/user")}
                  style={{
                    color: pathname === "/private/user" ? "goldenrod" : "",
                  }}
                >
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
