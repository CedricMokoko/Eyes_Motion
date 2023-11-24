import React from "react";

const SeriesIdPage = ({ params }) => {
  return (
    <div className="page">
      <h1>Serie with Id: {params.id} </h1>
    </div>
  );
};
export default SeriesIdPage;
