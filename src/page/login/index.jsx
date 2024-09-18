import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import Header from "../../component/header";
import api from "../../config/axios";
import "./index.scss";

const Login = () => {
  const navigate = useNavigate();
  // code javascript here

  const handleLogin = async (values) => {
    try {
      console.log(values);
      // promise nghia la khong co ket qua ngay lap tuc
      const response = await api.post("login", values);
      console.log(response.data);
      const { token } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Tai khoan mat khau khong dung dau !");
    }
  };
  return (
    <>
      <Header />
      <div className="login">
        <div className="login__image">
          <img
            src="https://img.freepik.com/free-photo/colorful-fish-swimming-underwater_23-2150777184.jpg"
            alt=""
          />
        </div>
        <div className="login__form">
          <div className="form-wrapper">
            <Form
              className="form"
              labelCol={{
                span: 24,
              }}
              onFinish={handleLogin}
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "PLease enter the username",
                  },
                ]}
              >
                <Input type="text" placeholder="Username" />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "PLease enter the username",
                  },
                ]}
              >
                <Input type="password" placeholder="Password" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Login
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
