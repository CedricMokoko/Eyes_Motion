import WelcomePage from "@/components/WelcomePage/WelcomePage";
import styles from "./page.module.scss";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";

export default async function Home() {
  // const session = await getServerSession(authOptions);
  // if (session) {
  // redirect("/homepage");
  // } else {
  return (
    <div className={styles.main}>
      <Suspense fallback={<LoadingSpinner />}>
        <WelcomePage />
      </Suspense>
    </div>
  );
  // }
}
