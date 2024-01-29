"use client";
import styles from "./pageConfermaLogout.module.scss";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const LogoutPopUp = () => {
  const router = useRouter();

  // Handle the sign out button click
  const handleSignIn = () => {
    router.push("/private/homepage");
  };

  return (
    <div className={styles.containerPopUp}>
      <div className={styles.popUp}>
        <div className={styles.question}>
          <p>Sei sicuro di voler uscire dall'applicazione?</p>
        </div>
        <div className={styles.buttonContainer}>
          <button
            className={`${styles.button}`}
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            <h2>Si, esco</h2>
          </button>
          <button className={styles.button} onClick={handleSignIn}>
            <h2>No, rimango</h2>
          </button>
        </div>
      </div>
    </div>
  );
};
export default LogoutPopUp;
