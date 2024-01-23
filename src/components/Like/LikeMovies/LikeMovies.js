"use client";
import { faCheckCircle, faPlusMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styles from "./LikeMovies.module.scss";

const LikeMovies = ({ likedMoviesId }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClicked = async (e) => {
    e.preventDefault();
    if (likedMoviesId) {
      await fetch(`/api/auth/like/moviesiesLike/${likedMoviesId}`, {
        method: "POST",
      });
    }
    // Inverte lo stato "liked"
    setIsLiked(!isLiked);
  };
  return (
    <FontAwesomeIcon
      onClick={handleLikeClicked}
      icon={isLiked ? faCheckCircle : faPlusMinus}
      className={`${styles.icon} ${isLiked ? styles.liked : ""}`}
    />
  );
};
export default LikeMovies;
