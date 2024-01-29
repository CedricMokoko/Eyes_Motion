"use client";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import styles from "./SignOutButton.module.scss";

const SignOutButton = () => {
  const router = useRouter();

  const handleSignOut = () => {
    router.push("/private/confermaLogout");
    router.refresh();
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={handleSignOut}>
        <h2>Sign out</h2>
        <FontAwesomeIcon icon={faRightToBracket} className={styles.icon} />
      </button>
    </div>
  );
};

export default SignOutButton;
