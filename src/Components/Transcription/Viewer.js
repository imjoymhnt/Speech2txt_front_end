import React, { useEffect, useState } from "react";
import axios from "axios";

const Viewer = ({ transcription }) => {
  return (
    <div style={{ marginRight: "auto", marginLeft: "2rem" }}>
      {/* <hr /> */}
      <br />
      <br />
      {transcription.map(
        (spkr) =>
          spkr && (
            <h4>
              <b>Speaker</b>
              {spkr}
            </h4>
          )
      )}
    </div>
  );
};

export default Viewer;
