import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VideoPlayer from './VIdeoPlayer'
import { useRef } from 'react'

function App() {
const Playeref = useRef(null)
const VideoLink = "https://localhost:8000/uploads/courses/${lessionId}/index.m3u8"
const videoPlayerOptions = {
  controls : true,
  Responsive : true,
  fluid : true,
  sources : [
    {
      src:VideoLink,
      type:"application/x-mpegURL"

    }
  ]
  
}
const handlePlayerReady = (player) => {
  playerRef.current = player;

  // You can handle player events here, for example:
  player.on("waiting", () => {
    videojs.log("player is waiting");
  });

  player.on("dispose", () => {
    videojs.log("player will dispose");
  });
};

  return (
    <>
    <div>
        <h1>Video player</h1>
      </div>
      <VideoPlayer
      options={videoPlayerOptions}
      onReady={handlePlayerReady}
      />
      
    </>
  )
}

export default App
