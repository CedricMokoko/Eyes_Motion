import WelcomePage from "@/components/WelcomePage/WelcomePage";
import styles from "./page.module.scss";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/homepage");
  } else {
    return (
      <div className={styles.main}>
        <Suspense
          fallback={
            <p style={{ fontSize: "50px", color: "red" }}>
              Chargement welcome page ...
            </p>
          }
        >
          <WelcomePage />
        </Suspense>
      </div>
    );
  }
}
