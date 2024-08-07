"use client";
import { toast } from "react-hot-toast";
import styles from "./LoginForm.module.scss";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { useState, useEffect } from "react";

const LoginForm = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  /*Uno dei modi per proteggere la pagina utente logato, in modo che se l'utente è logato 
  e provo a scrivere l'url /login non la chiama e mi rimanda sul /private/homepage*/
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/private/homepage");
      router.refresh();
    }
  }, [status, router]);

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    // Setta isLoading a true prima di effettuare la chiamata
    setIsLoading(true);

    signIn("credentials", {
      ...data,
      redirect: false, //Per non andare sulla pagina di Login fatta di Next
    }).then((callback) => {
      setIsLoading(false);
      if (callback?.error) {
        toast.error(callback.error, {
          id: "Messages",
          style: { marginTop: "90px" },
        });
      }
      if (callback?.ok && !callback?.error) {
        router.push("/private/homepage");
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
            {/* <input type="submit" value="Sign In" /> */}
            <input
              type="submit"
              value={isLoading ? "Loading..." : "Sign In"}
              disabled={isLoading}
            />

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
