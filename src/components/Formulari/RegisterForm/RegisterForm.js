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
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  //Uno dei modi per proteggere la pagina utente logato
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/private/homepage");
      router.refresh();
    }
  }, [status, router]);

  const handleSigninFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
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
    } finally {
      // Imposta isLoading su false indipendentemente dal successo o dal fallimento della chiamata API
      setIsLoading(false);
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
        <input
          type="submit"
          value={isLoading ? "Submitting..." : "Submit"}
          disabled={isLoading}
        />{" "}
      </form>
    </div>
  );
};
export default RegisterForm;
