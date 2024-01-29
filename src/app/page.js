// "use client";
import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopyright,
  faPause,
  faRightLong,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { redirect } from "next/navigation";
import WelcomePage from "@/components/WelcomePage/WelcomePage";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default function Home() {
  return (
    <div className={styles.main}>
      <WelcomePage />
    </div>
  );

  // }
}
