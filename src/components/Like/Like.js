"use client";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./Like.module.scss";

const Like = ({ likedMoviesId, likedSeriesId }) => {
  console.log("Like Id Movie", likedMoviesId);
  console.log("Like Id Serie", likedSeriesId);

  const handleLikeClicked = (e) => {
    e.preventDefault();
    if (likedSeriesId) {
      fetch(`/api/auth/like/seriesLike/${likedSeriesId}`, {
        method: "POST",
      });
    }
    if (likedMoviesId) {
      fetch(`/api/auth/like/moviesLike/${likedMoviesId}`, {
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
