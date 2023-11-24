import React from "react";

const MoviesIdPage = ({ params }) => {
  return (
    <div className="pages">
      <h1>Movies with id: {params.id}</h1>
    </div>
  );
};
export default MoviesIdPage;
