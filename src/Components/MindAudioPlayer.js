import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { motion, AnimatePresence } from "framer-motion";

const MindAudioPlayer = ({ audioUrl }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ width: "100%", marginLeft: "7%" }}
      >
        <br />
        <AudioPlayer
          autoPlay
          src={audioUrl}
          // onPlay={(e) => console.log("onPlay")}
          autoPlay={false}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default MindAudioPlayer;
