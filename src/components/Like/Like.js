"use client";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styles from "./Like.module.scss";

const Like = ({ likedMoviesId, likedSeriesId }) => {
  const [isLiked, setIsLiked] = useState(false);

  console.log("Like Id Movie", likedMoviesId);
  console.log("Like Id Serie", likedSeriesId);

  const handleLikeClicked = async (e) => {
    e.preventDefault();
    if (likedSeriesId) {
      await fetch(`/api/auth/like/seriesLike/${likedSeriesId}`, {
        method: "POST",
      });
    }
    if (likedMoviesId) {
      await fetch(`/api/auth/like/moviesLike/${likedMoviesId}`, {
        method: "POST",
      });
    }

    // Inverte lo stato "liked"
    setIsLiked(!isLiked);
  };

  return (
    <FontAwesomeIcon
      onClick={handleLikeClicked}
      icon={isLiked ? faCheckCircle : faPlus}
      className={`${styles.icon} ${isLiked ? styles.liked : ""}`}
    />
  );
};

export default Like;
