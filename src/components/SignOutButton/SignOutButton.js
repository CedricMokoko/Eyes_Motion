"use client";
import { signOut } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import styles from "./SignOutButton.module.scss";

const SignOutButton = () => {
  return (
    <div className={`${styles.container}`}>
      <button
        // data-tooltip="Are you sure you want to exit the application?"
        className={`${styles.button}`}
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        <h2>Sign out</h2>
        <FontAwesomeIcon icon={faRightToBracket} className={`${styles.icon}`} />
      </button>
    </div>
  );
};

export default SignOutButton;
