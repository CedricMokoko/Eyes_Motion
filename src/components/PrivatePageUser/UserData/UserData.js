import styles from "./UserData.module.scss";
import { getServerSession } from "next-auth";
import prisma from "@/utils/prisma";
import { authOptions } from "../../../app/api/auth/[...nextauth]/route";

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
