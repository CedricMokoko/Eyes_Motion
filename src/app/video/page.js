"use client";
import VideoPlayer from "@/components/MediaVideo/VideoPlayer";
import { useState } from "react";
import styles from "./page.module.scss";

export default function VideoPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <>
      <button
        className={`${styles.btn}`}
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
      <div>
        <VideoPlayer
          isPlaying={isPlaying}
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        />
      </div>
    </>
  );
}
