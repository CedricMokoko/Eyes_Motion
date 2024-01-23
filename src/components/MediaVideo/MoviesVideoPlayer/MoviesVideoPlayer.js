"use client";
import YouTube from "react-youtube";
import styles from "./MoviesVideoPlayer.module.scss";

const MoviesVideoPlayer = ({ mediaVideoMovies }) => {
  return (
    <YouTube
      className={`${styles.youtubeComponent}`}
      videoId={`${mediaVideoMovies.key}`}
      alt={mediaVideoMovies.name}
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
      // defaults -> ''
      // id={string}                       // defaults -> ''
      // className={string}                // defaults -> ''
      // iframeClassName={string}          // defaults -> ''
      // style={object}                    // defaults -> {}
      // title={string}                    // defaults -> ''
      // loading={string}                  // defaults -> undefined
      // onReady={func}                    // defaults -> noop
      // onPlay={func}                     // defaults -> noop
      // onPause={func}                    // defaults -> noop
      // onEnd={func}                      // defaults -> noop
      // onError={func}                    // defaults -> noop
      // onStateChange={func}              // defaults -> noop
      // onPlaybackRateChange={func}       // defaults -> noop
      // onPlaybackQualityChange={func}    // defaults -> noop
    />
  );
};
export default MoviesVideoPlayer;
