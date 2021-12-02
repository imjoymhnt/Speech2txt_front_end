import React, { useEffect, useState } from "react";
import { Row, Col, Input, Button, Form } from "antd";
import axios from "axios";

const TranscriptionForm = () => {
  const [form] = Form.useForm();
  const [fileName, setFileName] = useState("");
  const [transcription, setTranscription] = useState("");
  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
  };

  const handleSubmit = async (values) => {
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Row gutter={15}>
      <Col xl={12} offset={6}>
        <Form
          style={{ width: "100%" }}
          form={form}
          name="addProduct"
          onFinish={handleSubmit}
        >
          <Form.Item>
            <input
              //   fileName="image"
              name="img"
              onChange={onChangeFile}
              type="file"
            />
          </Form.Item>
          <Form.Item>
            <Button size="large" htmlType="submit" type="primary" raised>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
      <Col>
        <p>{transcription !== "" ? transcription : "Loading.."}</p>
      </Col>
    </Row>
  );
};

export default TranscriptionForm;
