"use client";
import { useEffect, useRef } from "react";

/**L’élément HTML video n'est pas un composant React, nous ne pouvons donc pas synchroniser 
 * une prop isPlaying avec l'état de lecture / pause du lecteur vidéo.
  Le seul moyen de le faire est de synchroniser une variable d'état isPlaying et 
  le déclenchement de la lecture et de la pause avec une référence sur l'élément HTML du lecteur. */
const VideoPlayer = ({ src, isPlaying }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  });

  return (
    <video
      ref={ref}
      src={src}
      loop
      playsInline
      style={{ maxWidth: "600px", marginTop: "10px" }}
    />
  );
};
export default VideoPlayer;
