import React from "react";
import styles from "./HeaderHomePage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const HeaderHomePage = () => {
  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.logo}`}>
        <h2>
          <Link href={`/`}>
            {" "}
            Eyes<small>_Motion</small>
          </Link>
        </h2>
      </div>
      <div className={`${styles.navigation}`}>
        <nav>
          <ul>
            <li>
              <Link href={`/api/register`}>
                Register{" "}
                <FontAwesomeIcon
                  icon={faUserPlus}
                  className={`${styles.icon}`}
                />
              </Link>
            </li>
            <li>
              {/* <Link href={`/api/auth/signin`}> */}
              <Link href={`/api/login`}>
                Login{" "}
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
  );
};
export default HeaderHomePage;
