import React, { useEffect, useState } from "react";
import axios from "axios";

const Viewer = ({ transcription }) => {
  //   const [transcription, setTranscription] = useState("");

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const { data } = await axios.post(`${process.env.REACT_APP_API}/`);
  //       setTranscription(data);
  //       console.log(data);
  //     };
  //     fetchData();
  //   }, []);
  return (
    <div>
      <p>{transcription}</p>
    </div>
  );
};

export default Viewer;
