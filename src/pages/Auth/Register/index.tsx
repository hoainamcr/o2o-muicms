import React from "react";
import { Form, Input, Button, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useAuthStore } from "@/stores/auth.store";
import { LoginCredentials } from "@/types";
import { PageContainer } from "@/features/auth/components/PageContainer";
import { Link } from "react-router-dom";
import { AUTH_PATH } from "../route";

const Login: React.FC = () => {
  const { login, isLoading } = useAuthStore();

  const onFinish = async (values: LoginCredentials) => {
    try {
      await login(values);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <PageContainer>
      <Card
        title="Register"
        style={{ width: 400 }}
        styles={{
          header: {
            textAlign: "center",
            fontSize: "24px",
          },
        }}
      >
        <Form
          name="login"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Your email!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Email" size="large" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Enter your password!" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
              size="large"
            />
          </Form.Item>
          <Form.Item
            name="confirmpassword"
            rules={[
              { required: true, message: "Enter your confirm password!" },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Confirm password"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              block
              loading={isLoading}
            >
              Register
            </Button>
          </Form.Item>
        </Form>
        <Link to={`/${AUTH_PATH.LOGIN}`}>Back to login</Link>
      </Card>
    </PageContainer>
  );
};

export default Login;
