"use client";
import { redirect } from "next/navigation";
import styles from "./pageConfermaLogout.module.scss";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const LogoutPopUp = () => {
  // const session = await getServerSession(authOptions);
  // if (!session) {
  // }
  // Get the router instance
  const router = useRouter();

  // Handle the sign out button click
  const handleSignOut = () => {
    // You can perform any sign-out logic here
    // ...

    // Redirect to the confirmation logout page
    router.push("/private/homepage");

    // redirect("/private/user");
  };

  return (
    <div className={styles.containerPopUp}>
      <div className={styles.popUp}>
        <div className={styles.question}>
          <p>Sei sicuro di voler uscire dall'applicazione?</p>
        </div>
        <div className={styles.buttonContainer}>
          <button
            // data-tooltip="Are you sure you want to exit the application?"
            className={`${styles.button}`}
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            <h2>Si, esco</h2>
          </button>
          <button className={styles.button} onClick={handleSignOut}>
            <h2>No, rimango</h2>
          </button>
        </div>
      </div>
    </div>
  );
};
export default LogoutPopUp;
