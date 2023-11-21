import React from "react";
import Header from "@/components/Header/Header";
import MobileNav from "@/components/MobileNav/MobileNav";
import SignOutButton from "@/components/SignOutButton/SignOutButton";

const UserPage = () => {
  return (
    <div>
      <Header />
      <MobileNav />
      <SignOutButton />
    </div>
  );
};
export default UserPage;
