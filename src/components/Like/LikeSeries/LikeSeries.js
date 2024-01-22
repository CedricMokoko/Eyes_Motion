"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import styles from "./LikeSeries.module.scss";

const LikeSeries = ({ likedSeriesId }) => {
  // // Legge lo stato iniziale da localStorage o imposta false se non c'è alcun valore salvato
  // const [isLiked, setIsLiked] = useState(
  //   localStorage.getItem(`likedSeriesState_${likedSeriesId}`) === "true"
  // );

  // // Effetto collaterale per aggiornare il localStorage quando lo stato cambia
  // useEffect(() => {
  //   // Salva il valore convertendolo in una stringa
  //   localStorage.setItem(
  //     `likedSeriesState_${likedSeriesId}`,
  //     JSON.stringify(isLiked)
  //   );
  // }, [isLiked, likedSeriesId]);

  // const handleLikeClicked = async (e) => {
  //   e.preventDefault();

  //   if (likedSeriesId) {
  //     await fetch(`/api/auth/like/seriesLike/${likedSeriesId}`, {
  //       method: "POST",
  //     });
  //   }
  //   // Inverte lo stato "liked"
  //   setIsLiked(!isLiked);
  // };

  const [isLiked, setIsLiked] = useState(false);
  const handleLikeClicked = async (e) => {
    e.preventDefault();
    if (likedSeriesId) {
      await fetch(`/api/auth/like/seriesLike/${likedSeriesId}`, {
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

export default LikeSeries;
