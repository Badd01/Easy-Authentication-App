import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        { email, password },
        { withCredentials: true }
      );
      alert(`Login successful! Welcome, ${response.data.name}`);
      navigate("/");
    } catch (error) {
      const errorMessage = error.response?.data?.error || "Login failed";
      alert(errorMessage);
    }
  };

  return (
    <div>
      <div className="card">
        <h1>Login</h1>
        <form onSubmit={handleLogin} className="login-form">
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>

          <button type="submit">Login</button>
        </form>
        <p>
          Or login with <a href="http://localhost:3000/auth/google">Google</a>
        </p>
        <p>
          Don't have an account? <a href="/register">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
