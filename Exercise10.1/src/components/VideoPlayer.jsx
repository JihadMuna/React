import React from 'react'
import { useState, useRef } from "react";
import video from "../assets/video.mp4"

export default function VideoPlayer() {
  const [isPlaying, setIfPlaying] = useState(false);
    const videoRef = useRef();

    const handlePlay = () => {
        videoRef.current.play();
        setIfPlaying(true);
    } 

    const handlePause = () => {
      videoRef.current.pause();
      setIfPlaying(false);
    }
  
    return (
    <div>
      <video ref={videoRef} width={600} controls autoPlay>
        <source src={video} type='video/mp4'/>
        Your browser does not support the video tag.
      </video>
      <div>
      <button onClick={handlePlay} disabled={isPlaying}>
        Play
      </button>
      <button onClick={handlePause} disabled={!isPlaying}>
        Pause
      </button>
    </div>
    </div>
  )
}
