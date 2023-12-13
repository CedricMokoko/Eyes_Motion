"use client";
import styles from "./RegisterForm.module.scss";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { toast } from "react-hot-toast";

const RegisterForm = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [data, setData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  //Uno dei modi per proteggere la pagina utente logato
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/homepage");
      router.refresh();
    }
  }, [status, router]);

  const handleSigninFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          surname: data.surname,
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmPassword,
        }),
      });
      //Per avere accesso ai messaggi di NextResponse lato server
      const responseBody = await response.text();
      if (response.ok) {
        toast.success(responseBody, {
          id: "Messages",
          style: { marginTop: "60px" },
        });
        router.push("/login");
        router.refresh();
      } else {
        toast.error(responseBody, {
          id: "Messages",
          duration: 7000,
          style: { marginTop: "60px" },
        });
      }
    } catch (error) {
      toast.error(responseBody, { id: "ErrorGlobal" });
    }
  };

  return (
    <div className={styles.signupForm}>
      <form onSubmit={handleSigninFormSubmit}>
        <h2>INSCRIPTION</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          autoFocus
          required
        />
        <input
          type="text"
          name="surname"
          placeholder="Surname"
          value={data.surname}
          onChange={(e) => setData({ ...data, surname: e.target.value })}
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
  );
};

export default RegisterForm;
