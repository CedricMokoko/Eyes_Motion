"use client";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./Like.module.scss";

const Like = ({ likedId, likedSeriesId }) => {
  console.log("Like Id Movie", likedId);
  console.log("Like Id", likedSeriesId);
  const handleLikeClicked = (e) => {
    e.preventDefault();
    if (likedSeriesId) {
      fetch(`/api/auth/like/seriesLike/${likedSeriesId}`, {
        method: "POST",
      });
    }
    if (likedId) {
      fetch(`/api/auth/like/moviesLike/${likedId}`, {
        method: "POST",
      });
    }
  };
  return (
    <FontAwesomeIcon
      onClick={handleLikeClicked}
      icon={faHeart}
      className={`${styles.icon}`}
    />
  );
};

export default Like;
