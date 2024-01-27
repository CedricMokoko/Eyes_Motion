import SignOutButton from "@/components/SignOutButton/SignOutButton";
import styles from "./UserData.module.scss";
import { getServerSession } from "next-auth";
import prisma from "@/utils/prisma";
import { getHydratedMovies, getHydratedSeries } from "@/utils/movieClient";
import { authOptions } from "../../../app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner/LoadingSpinner";

const UserData = async () => {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findFirst({
    where: { email: session.email },
  });
  if (user) {
    return (
      <div className={`${styles.container}`}>
        <p className={`${styles.user}`}>Ciao {session?.user?.name}!</p>
      </div>
    );
  }
};
export default UserData;
