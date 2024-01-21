"use client";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styles from "./LikeMovies.module.scss";

const LikeMovies = ({ likedMoviesId }) => {
  const [isLiked, setIsLiked] = useState(false);

  console.log("Like Id Movie", likedMoviesId);

  const handleLikeClicked = async (e) => {
    e.preventDefault();

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

export default LikeMovies;
