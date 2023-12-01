import styles from "./page.module.scss";
import Homepage from "@/components/Homepage/Homepage";
//import { getServerSession } from "next-auth";
//import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  // const session = await getServerSession(authOptions);
  return (
    <div className={styles.main}>
      <Homepage />
    </div>
  );
}
