// import MovieSearch from "@/components/MovieSearch/MovieSearch";
// import React from "react";

// const SearchBar = () => {
//   return (
//     <div>
//       <MovieSearch />
//     </div>
//   );
// };
// export default SearchBar;

import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import InputSearchBar from "@/components/SearchContents/InputSearchBar/InputSearchBar";

const SearchBar = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    return (
      <div>
        <InputSearchBar />
      </div>
    );
  } else {
    redirect("/login");
  }
};
export default SearchBar;
