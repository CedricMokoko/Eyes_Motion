import React from "react";

const MoviesIdPage = ({ params }) => {
  return (
    <div>
      <h1>Movie with id: {params.id}</h1>
    </div>
  );
};
export default MoviesIdPage;
