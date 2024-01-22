// LikeMovies.js
"use client";
import { faPlus, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import styles from "./LikeMovies.module.scss";
import cookie from "js-cookie"; // Assicurati di installare il pacchetto js-cookie

const LikeMovies = ({ likedMoviesId }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Controlla se c'è uno stato di "like" salvato nei cookie
    const savedLikeState = cookie.get(`likeState_${likedMoviesId}`);
    if (savedLikeState !== undefined) {
      setIsLiked(savedLikeState === "true");
    }
  }, [likedMoviesId]);

  const handleLikeClicked = async (e) => {
    e.preventDefault();

    if (likedMoviesId && !isLoading) {
      try {
        setIsLoading(true);

        const response = await fetch(
          `/api/auth/like/moviesLike/${likedMoviesId}`,
          {
            method: "POST",
          }
        );

        if (response.ok) {
          const newLikeState = !isLiked;
          setIsLiked(newLikeState);

          // Salva lo stato di "like" nei cookie
          cookie.set(`likeState_${likedMoviesId}`, String(newLikeState), {
            expires: 365,
            domain: "eyes-motion.vercel.app",
            path: "/", // Imposta il percorso principale
          });
        } else {
          setError("Errore durante il like del film");
        }
      } catch (error) {
        setError("Errore di rete");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className={styles.likeButton}>
      <FontAwesomeIcon
        onClick={handleLikeClicked}
        icon={isLiked ? faCheckCircle : faPlus}
        className={`${styles.icon} ${isLiked ? styles.liked : ""} ${
          isLoading ? styles.loading : ""
        }`}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default LikeMovies;
