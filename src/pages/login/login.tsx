import { LockFilled, LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Flex, Form, Input, Layout, Space } from "antd";

const Login = () => {
  return (
    <>
      <Layout
        style={{ height: "100vh", display: "grid", placeItems: "center" }}
      >
        <Space orientation="vertical" align="center" size="large">
          <Layout.Content
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="/icons/pizzaria-logo.svg" alt="" />
          </Layout.Content>
          <Card
            title={
              <Space
                style={{
                  width: "100%",
                  fontSize: 16,
                  justifyContent: "center",
                }}
              >
                <LockFilled />
                Sign in
              </Space>
            }
            variant="borderless"
            style={{ width: 300 }}
          >
            <Form
              initialValues={{
                remember: true,
                username: "madlanidev@gmail.com",
                password: "Test@123",
              }}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please enter username" },
                  { type: "email", message: "Enter valid mail" },
                ]}
              >
                <Input prefix={<UserOutlined />} placeholder="Username" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: "Please enter password" }]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Password"
                />
              </Form.Item>

              <Flex justify="space-between">
                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a href="" id="login-form-forgot">
                  Forgot password
                </a>
              </Flex>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Space>
      </Layout>
    </>
  );
};

export default Login;
