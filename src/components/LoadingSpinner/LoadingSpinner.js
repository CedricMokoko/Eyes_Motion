import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import styles from "./LoadingSpinner.module.scss";

const LoadingSpinner = () => {
  return (
    <div className={`${styles.loadingSpinner}`}>
      <div>
        <FontAwesomeIcon icon={faCircleNotch} className={`${styles.icon}`} />
      </div>
    </div>
  );
};

export default LoadingSpinner;
