import SignOutButton from "@/components/SignOutButton/SignOutButton";
import styles from "./page.module.css";
//import { getServerSession } from "next-auth";
//import { authOptions } from "./api/auth/[...nextauth]/route";

export default function Home() {
  //const session = await getServerSession(authOptions);
  return (
    <div className={styles.main}>
      <SignOutButton />
    </div>
  );
}
