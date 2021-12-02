import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import TranscriptionForm from "./Transcription/TranscriptionForm";
import Viewer from "./Transcription/Viewer";

const MindAudioPlayer = ({ audioUrl }) => {
  return (
    <div>
      {/* <Viewer /> */}
      <TranscriptionForm />
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
