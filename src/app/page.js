import styles from "./page.module.scss";
import WelcomePage from "@/components/WelcomePage/WelcomePage";

export default function Home() {
  return (
    <div className={styles.main}>
      <WelcomePage />
    </div>
  );
}
