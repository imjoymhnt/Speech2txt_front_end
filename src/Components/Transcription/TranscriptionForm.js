import React, { useEffect, useState } from "react";
import { Row, Col, Button, Form } from "antd";
import axios from "axios";
import Loader from "../Loader";
import "./style.css";
import Viewer from "./Viewer";
import MindAudioPlayer from "../MindAudioPlayer";

const TranscriptionForm = () => {
  const [form] = Form.useForm();
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState("");
  const [transcription, setTranscription] = useState("");
  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
  };

  const handleSubmit = async (values) => {
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
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let arr = [];
  if (transcription !== "") {
    arr = transcription.split("speaker");
    console.log(arr);
  }

  return (
    <Row gutter={15}>
      <Col xl={12} offset={6} className="form-container">
        {loading ? null : (
          <Form
            className="form"
            style={{ width: "100%" }}
            form={form}
            name="addProduct"
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
              <Button
                style={{ marginRight: "auto", marginLeft: "-87%" }}
                size="large"
                htmlType="submit"
                type="primary"
                raised
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        )}
        <br />
        {loading ? <Loader /> : <Viewer transcription={arr} />}
        {loading ? null : <MindAudioPlayer audioUrl={audioUrl} />}
      </Col>
    </Row>
  );
};

export default TranscriptionForm;
