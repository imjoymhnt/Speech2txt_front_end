import React from "react";
import { Skeleton } from "antd";
// import loader from ".Transcription/image.gif";

const Loader = () => {
  return <Skeleton active paragraph={{ rows: 8 }} />;
};

export default Loader;
