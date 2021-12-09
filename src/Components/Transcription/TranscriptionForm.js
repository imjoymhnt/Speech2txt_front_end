import React, { useEffect, useState } from "react";
import { Row, Col, Button, Form } from "antd";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "../Loader";
import "./style.css";
import Viewer from "./Viewer";
import MindAudioPlayer from "../MindAudioPlayer";
import Background from "../Animation/Background";

const TranscriptionForm = () => {
  let arr = [];
  const [showViewer, setShowViewer] = useState(false)
  const [form] = Form.useForm();
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState("");
  const [transcription, setTranscription] = useState("");
  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
  };

  const handleSubmit = async (values) => {
    setShowViewer(false)
    setLoading(true);
    let fd = new FormData();
    fd.append("file", fileName);

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    const url = `${process.env.REACT_APP_API}`;
    const result = await axios
      .post(url, fd, config)
      .then((response) => {
        console.log(response);
        setTranscription(response.data.data);
        setAudioUrl(response.data.audioUrl);
        setLoading(false);
        setFileName("")
        setShowViewer(true)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  if (transcription !== "") {
    arr = transcription.split("speaker");
    console.log(arr);
  }

  return (
    <Row gutter={15}>
      <Background />
      <Col
        xs={{ span: 12, offset: 2 }}
        sm={{ span: 12, offset: 2 }}
        md={{ span: 12, offset: 2 }}
        lg={{ span: 12, offset: 6 }}
        xl={{ span: 12, offset: 6 }}
        xxl={{ span: 12, offset: 6 }}
        className="form-container"
      >
        <AnimatePresence>
          {loading ? null : (
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              animate={{
                // x: [-1000, 80, 0],
                x: 0,
                opacity: 1,
                // rotate: [0, 5, -5, 5, 0],
                // scale: [1, 2, 2, 1, 1],
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              // animate={{ rotate: 5 }}
              // transition={{ duration: 2 }}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.6 },
              }}
              drag="x"
              dragConstraints={{ left: -100, right: 100 }}
              whileTap={{ scale: 0.9 }}
            >
              <Form
                className="form"
                style={{ width: "100%" }}
                form={form}
                // name="addProduct"
                onFinish={handleSubmit}
              >
                <Form.Item>
                  <h4 style={{ marginRight: "auto", marginLeft: "-82%" }}>
                    <u>Upload Audio file</u>..
                  </h4>
                  <input
                    //   fileName="image"
                    name="img"
                    onChange={onChangeFile}
                    type="file"
                  />
                </Form.Item>
                <Form.Item>
                  {fileName ? (
                    <Button
                      style={{ marginRight: "auto", marginLeft: "-87%" }}
                      size="large"
                      htmlType="submit"
                      type="primary"
                      raised
                    >
                      Submit
                    </Button>
                  ) : (
                    <Button
                      style={{ marginRight: "auto", marginLeft: "-87%" }}
                      size="large"
                      htmlType="submit"
                      type="primary"
                      raised
                      disabled
                    >
                      Submit
                    </Button>
                  )}
                </Form.Item>
              </Form>
            </motion.div>
          )}
        </AnimatePresence>
        <br />
        {loading ? <Loader /> : null}
        {arr.length > 0 && showViewer ? <Viewer transcription={arr} /> : null}

        {arr.length > 0 && showViewer ? <MindAudioPlayer audioUrl={audioUrl} /> : null}
      </Col>
    </Row>
  );
};

export default TranscriptionForm;
