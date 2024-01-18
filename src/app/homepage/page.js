import React, { Suspense } from "react";
import Homepage from "@/components/Homepage/Homepage";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const userHomepage = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  if (session) {
    return (
      <Suspense fallback={<p>Chargement homepage ...</p>}>
        <Homepage />
      </Suspense>
    );
  }
};
export default userHomepage;
