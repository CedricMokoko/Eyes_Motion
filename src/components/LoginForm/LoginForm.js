"use client";
import { toast } from "react-hot-toast";
import styles from "./LoginForm.module.scss";
import { useRouter } from "next/navigation";
import HeaderHomePage from "../HomePage/HeaderHomePage/HeaderHomePage";
import { signIn } from "next-auth/react";
import { useState } from "react";

const LoginForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();
    signIn("credentials", {
      ...data,
      redirect: false, //Per non andare sulla pagina di Login fatta di Next
    }).then((callback) => {
      if (callback?.error) {
        toast.error(callback.error);
      }

      if (callback?.ok && !callback?.error) {
        toast.success("Login andato a buon fine!");
        // Redirection vers la page d'accueil après une connexion réussie
        router.push("/api/homepage");
        router.refresh();
      }
    });
  };

  return (
    <>
      <HeaderHomePage />
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
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
            required
          />
          <input type="submit" value="Sign In" />
        </form>
      </div>
    </>
  );
};

export default LoginForm;
