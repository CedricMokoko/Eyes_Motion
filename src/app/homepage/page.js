import React from "react";
import Homepage from "@/components/Homepage/Homepage";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const userHomepage = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    return <Homepage />;
  } else {
    redirect("/login");
  }
};
export default userHomepage;
