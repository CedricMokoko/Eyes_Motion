// "use client";
// import SignOutButton from "@/components/SignOutButton/SignOutButton";
// import styles from "./pageUser.module.scss";

// const UserPage = () => {
//   return (
//     <div className={`${styles.container}`}>
//       <div className={`${styles.content}`}>
//         <h1>La tua lista</h1>
//         <SignOutButton />
//       </div>
//       <h3>I tuoi film e serie</h3>
//     </div>
//   );
// };
// export default UserPage;
import SignOutButton from "@/components/SignOutButton/SignOutButton";
import styles from "./pageUser.module.scss";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const UserPage = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    return (
      <div className={`${styles.container}`}>
        <div className={`${styles.content}`}>
          <div className={`${styles.contentUser}`}>
            <p className={`${styles.userName}`}>{session?.user?.name}</p>
            <SignOutButton />
          </div>
          <div className={`${styles.contentLiked}`}>
            <h1>La tua lista</h1>
            <h3>I tuoi film e serie</h3>
          </div>
        </div>
      </div>
    );
  } else {
    redirect("/login");
  }
};
export default UserPage;
