import React from "react";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Login.css";
import { ReactComponent as YourSvg } from "./lock.svg";
import Background from "../Animation/Background";

const Login = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
    navigate("/voice");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Row>
      <Background />
      {/* <AnimatePresence> */}
        <Col
          // initial={{ x: -500 }}
          // animate={{ x: 0 }}
          // transition={{ duration: 1.5 }}
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 20, offset: 2 }}
          md={{ span: 20, offset: 2 }}
          lg={{ span: 12, offset: 6 }}
          xl={{ span: 12, offset: 0 }}
          xxl={{ span: 12, offset: 0 }}
        >
          <YourSvg className="side-image" />
        </Col>

        <Col
          // initial={{ x: 1000 }}
          // animate={{ x: 0 }}
          // transition={{ duration: 1.5 }}
          xs={{ span: 20, offset: 2 }}
          sm={{ span: 20, offset: 2 }}
          md={{ span: 20, offset: 2 }}
          lg={{ span: 12, offset: 6 }}
          xl={{ span: 12, offset: 0 }}
          xxl={{ span: 12, offset: 0 }}
          className="login-form"
        >
          <Form
            id="form"
            name="basic"
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 14,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <h1 style={{ color: "rgb(61, 61, 61)" }}>Sign In</h1>
            <hr />
            <br />
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input placeholder="user@yourdomain.com" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password placeholder="******" />
            </Form.Item>

            {/* <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

            <Form.Item
              wrapperCol={{
                offset: 4,
                span: 6,
              }}
            >
              <Button
                style={{ borderRadius: "5px" }}
                type="primary"
                htmlType="submit"
                size="large"
                id="signin-btn"
              >
                SignIn
              </Button>
            </Form.Item>
          </Form>
        </Col>
      {/* </AnimatePresence> */}
    </Row>
  );
};

export default Login;
