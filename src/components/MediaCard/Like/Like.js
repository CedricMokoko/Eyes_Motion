"use client";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signIn, useSession } from "next-auth/react";
import React from "react";
import styles from "./Like.module.scss";

const Like = ({ mediaId }) => {
  const { data: session } = useSession();

  const handleLikeClicked = (e) => {
    e.preventDefault();
    if (!session) {
      signIn();
    }
    fetch(`/api/like/${mediaId}`, {
      method: "POST",
    });
  };
  return (
    <div onClick={handleLikeClicked} className={`${styles.like}`}>
      <FontAwesomeIcon icon={faHeart} />
    </div>
  );
};

export default Like;
