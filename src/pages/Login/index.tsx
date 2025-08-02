import React from "react";
import { Form, Input, Button, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useAuthStore } from "@/stores/auth.store";
import { LoginCredentials } from "@/types";

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
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <Card
        title="Đăng nhập"
        style={{ width: 400 }}
        headStyle={{ textAlign: "center", fontSize: "24px" }}
      >
        <Form
          name="login"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Vui lòng nhập email!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Email" size="large" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Mật khẩu"
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
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
