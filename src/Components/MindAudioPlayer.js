import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const MindAudioPlayer = ({ audioUrl }) => {
  return (
    <div>
      <AudioPlayer
        autoPlay
        src={audioUrl}
        // onPlay={(e) => console.log("onPlay")}
        autoPlay={false}
      />
    </div>
  );
};

export default MindAudioPlayer;
