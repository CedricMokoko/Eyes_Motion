"use client";
import YouTube from "react-youtube";

const SeriesVideoPlayer = ({ mediaVideoSeries }) => {
  return (
    <YouTube
      videoId={`${mediaVideoSeries.key}`}
      alt={mediaVideoSeries.name}
      opts={{
        width: "100%",
        playerVars: {
          autoplay: 1,
          controls: 1,
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

export default SeriesVideoPlayer;
