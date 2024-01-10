"use client";
import { toast } from "react-hot-toast";
import styles from "./LoginForm.module.scss";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";

const LoginForm = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  //Uno dei modi per proteggere la pagina utente logato
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/homepage");
      router.refresh();
    }
  }, [status, router]);

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    signIn("credentials", {
      ...data,
      redirect: false, //Per non andare sulla pagina di Login fatta di Next
    }).then((callback) => {
      if (callback?.error) {
        toast.error(callback.error, {
          id: "Messages",
          style: { marginTop: "90px" },
        });
      }
      if (callback?.ok && !callback?.error) {
        router.push("/homepage");
        router.refresh();
      }
    });
  };

  // const handleGithubLogin = (e) => {
  //   e.preventDefault();
  //   signIn("github");
  // };
  // const handleGoogleLogin = (e) => {
  //   e.preventDefault();
  //   signIn("google");
  // };

  if (status !== "authenticated") {
    return (
      <>
        <div className={styles.signupForm}>
          <form onSubmit={handleLoginFormSubmit}>
            <h2>Sign In</h2>
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              required
              autoFocus
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              required
            />
            <input type="submit" value="Sign in" />
            {/* <p>Or</p>
            <div className={`${styles.containerBtnLogin}`}>
              <button onClick={handleGithubLogin}>
                <FontAwesomeIcon icon={faGithub} className={`${styles.icon}`} />
                <h4>Sign in with Github</h4>
              </button>
              <button onClick={handleGoogleLogin}>
                <FontAwesomeIcon icon={faGoogle} className={`${styles.icon}`} />
                <h4>Sign in with Google</h4>
              </button>
            </div> */}
          </form>
        </div>
      </>
    );
  }
};
export default LoginForm;
