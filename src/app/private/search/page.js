import React from "react";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../../api/auth/[...nextauth]/route";
// import { redirect } from "next/navigation";
import InputSearchBar from "@/components/SearchContents/InputSearchBar/InputSearchBar";

const SearchBar = async () => {
  // const session = await getServerSession(authOptions);
  // if (!session) {
  //   redirect("/login");
  // }
  // if (session) {
  return (
    <div>
      <InputSearchBar />
    </div>
  );
  // }
};
export default SearchBar;
