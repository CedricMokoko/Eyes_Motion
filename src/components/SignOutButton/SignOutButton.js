"use client";
import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <div>
      <button
        style={{ cursor: "pointer" }}
        onClick={() => signOut({ callbackUrl: "/api/login" })}
      >
        Log out
      </button>
    </div>
  );
};

export default SignOutButton;
