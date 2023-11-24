import React from "react";
import styles from "./pageContent.module.scss";

const ContentsIdPage = ({ params }) => {
  return (
    <div className={`pages ${styles.container}`}>
      <h2>Content with id: {params.id}</h2>
    </div>
  );
};
export default ContentsIdPage;
