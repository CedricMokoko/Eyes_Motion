"use client";
import SignOutButton from "@/components/SignOutButton/SignOutButton";
import styles from "./pageUser.module.scss";

const UserPage = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.content}`}>
        <h1>La tua lista</h1>
        <SignOutButton />
      </div>
      <h3>I tuoi film e serie</h3>
    </div>
  );
};
export default UserPage;
