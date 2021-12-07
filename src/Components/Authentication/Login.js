import React from "react";
import { Form, Input, Button, Checkbox, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { ReactComponent as YourSvg } from "./lock.svg";

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
      <Col
        xs={{ span: 20, offset: 2 }}
        sm={{ span: 20, offset: 2 }}
        md={{ span: 20, offset: 2 }}
        lg={{ span: 12, offset: 0 }}
        xl={{ span: 12, offset: 0 }}
        xxl={{ span: 12, offset: 0 }}
      >
        <YourSvg className="side-image" />
      </Col>
      <Col
        xs={{ span: 20, offset: 2 }}
        sm={{ span: 20, offset: 2 }}
        md={{ span: 20, offset: 2 }}
        lg={{ span: 12, offset: 0 }}
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
          <h1>SignIn</h1>
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
              type="primary"
              htmlType="submit"
              size="large"
              id="signin-btn"
            >
              Signin
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
