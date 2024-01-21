"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import styles from "./LikeSeries.module.scss";

const LikeSeries = ({ likedSeriesId }) => {
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    // Carica lo stato dal localStorage al mount della componente
    const storedIsLiked = localStorage.getItem(`likeStatus_${likedSeriesId}`);
    if (storedIsLiked !== null) {
      setIsLiked(JSON.parse(storedIsLiked));
    }

    // Esegui la tua logica per verificare lo stato dal database
    fetch(`/api/auth/like/seriesLike/${likedSeriesId}`)
      .then((response) => response.json())
      .then((data) => {
        setIsLiked(data.isLiked || false);
      })
      .catch((error) => {
        console.error("Error fetching like status:", error);
      });
  }, [likedSeriesId]);

  const handleLikeClicked = async (e) => {
    e.preventDefault();
    const newIsLiked = !isLiked;

    // Aggiorna lo stato nel localStorage
    localStorage.setItem(
      `likeStatus_${likedSeriesId}`,
      JSON.stringify(newIsLiked)
    );

    // Aggiorna lo stato nel database
    fetch(`/api/auth/like/seriesLike/${likedSeriesId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isLiked: newIsLiked }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Puoi gestire la risposta del server se necessario
        console.log("Response from server:", data);
      })
      .catch((error) => {
        console.error("Error updating like status:", error);
      });

    setIsLiked(newIsLiked);
  };

  return (
    <FontAwesomeIcon
      onClick={handleLikeClicked}
      icon={isLiked ? faCheckCircle : faPlus}
      className={`${styles.icon} ${isLiked ? styles.liked : ""}`}
    />
  );
};

export default LikeSeries;
