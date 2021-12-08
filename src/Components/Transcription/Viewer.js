import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./viewer.css";
import "./style.css";

const Viewer = ({ transcription }) => {
  return (
    <div id="text-container">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          style={{ marginRight: "auto", marginLeft: "3rem" }}
        >
          {/* <hr /> */}
          <br />
          <br />
          {transcription && transcription.map(
            (spkr) =>
              spkr && (
                <h4 className="spkr-txt">
                  <b>Speaker</b>
                  {spkr}
                  {"\n"}
                </h4>
              )
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Viewer;
