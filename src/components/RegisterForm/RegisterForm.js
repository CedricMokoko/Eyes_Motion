"use client";
import styles from "./RegisterForm.module.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";

import HeaderHomePage from "../HomePage/HeaderHomePage/HeaderHomePage";
import { toast } from "react-hot-toast";

const RegisterForm = () => {
  const [data, setData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();

  const handleSigninFormSubmit = async (e) => {
    e.preventDefault();

    if (data.password !== data.confirmPassword) {
      console.error("Les mots de passe ne correspondent pas.");
      toast.error("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.nome,
          surname: data.cognome,
          email: data.email,
          password: data.password,
        }),
      });

      if (response.ok) {
        toast.success("Registrazione andata a buon fine!");
        router.push("/api/login");
        router.refresh();
      } else {
        // Gérer les cas d'erreur si nécessaire
        console.error("Échec de l'inscription");
        toast.error("Échec de l'inscription");
      }
    } catch (erreur) {
      console.error("Erreur lors de l'inscription :", erreur);
      toast.error("Erreur lors de l'inscription");
    }
  };

  return (
    <>
      <HeaderHomePage />
      <div className={styles.signupForm}>
        <form onSubmit={handleSigninFormSubmit}>
          <h2>INSCRIPTION</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={data.nome}
            onChange={(e) => setData({ ...data, nome: e.target.value })}
            autoFocus
            required
          />
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            value={data.cognome}
            onChange={(e) => setData({ ...data, cognome: e.target.value })}
            required
          />
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
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={data.confirmPassword}
            onChange={(e) =>
              setData({ ...data, confirmPassword: e.target.value })
            }
            required
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
