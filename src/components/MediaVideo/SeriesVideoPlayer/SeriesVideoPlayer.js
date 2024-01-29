"use client";
import YouTube from "react-youtube";
import styles from "./SeriesVideoPlayer.module.scss";

const SeriesVideoPlayer = ({ mediaVideoSeries }) => {
  return (
    <YouTube
      className={`${styles.youtubeComponent}`}
      videoId={`${mediaVideoSeries.key}`}
      alt={mediaVideoSeries.name}
      opts={{
        height: "100%",
        width: "100%",
        playerVars: {
          autoplay: 1,
          controls: 1,
          modestbranding: 1, // Rimuovi il logo di YouTube
          rel: 0, // Nascondi i video correlati alla fine
          fs: 1,
          hd: 1080, // Imposta la qualità del video a HD (1080p)
        },
      }}
    />
  );
};

export default SeriesVideoPlayer;
