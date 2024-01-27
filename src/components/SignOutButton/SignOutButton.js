// "use client";
// // import { signOut } from "next-auth/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
// import styles from "./SignOutButton.module.scss";
// import { redirect } from "next/dist/server/api-utils";

// const SignOutButton = () => {
//   return (
//     <div className={`${styles.container}`}>
//       <button
//         // data-tooltip="Are you sure you want to exit the application?"
//         className={`${styles.button}`}
//         onClick={() => redirect("/confermaLogout")}
//       >
//         <h2>Sign out</h2>
//         <FontAwesomeIcon icon={faRightToBracket} className={`${styles.icon}`} />
//       </button>
//     </div>
//   );
// };

// export default SignOutButton;

// Import necessary dependencies
"use client";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import styles from "./SignOutButton.module.scss";

const SignOutButton = () => {
  // Get the router instance
  const router = useRouter();

  // Handle the sign out button click
  const handleSignOut = () => {
    // You can perform any sign-out logic here
    // ...

    // Redirect to the confirmation logout page
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
