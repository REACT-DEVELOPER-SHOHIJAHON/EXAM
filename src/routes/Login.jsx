import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, Alert } from "antd";
import { UserOutlined, LockOutlined, LoginOutlined } from "@ant-design/icons";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const mockUsers = [{ username: "emilys", password: "emilyspass" }];

  const handleSubmit = async () => {
    setError(null);
    try {
      const user = mockUsers.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        navigate("/products");
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg text-center">
        <div className="mb-6 flex flex-col items-center">
          <div className="text-4xl font-bold mb-2 text-gray-800">
            <LoginOutlined />
          </div>
          <h2 className="text-3xl font-semibold mb-2">Welcome Back</h2>
          <p className="text-lg font-medium text-gray-600 mb-4">
            Sign in to your account or{" "}
            <a className="text-blue-600 hover:underline" href="">
              create a new account
            </a>
          </p>
        </div>

        {error && <Alert message={error} type="error" className="mb-4" />}

        <Input
          placeholder="Username"
          prefix={<UserOutlined />}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-4"
        />
        <Input.Password
          placeholder="Password"
          prefix={<LockOutlined />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-6"
        />
        <Link to="/Collection">
          <Button
            type="primary"
            onClick={handleSubmit}
            block
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold"
          >
            Continue
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
