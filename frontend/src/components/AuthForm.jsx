import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AuthForm = ({ type }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const isLogin = type === "login";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your backend endpoint
      const endpoint = isLogin ? "/api/auth/login" : "/api/auth/register";
      const { data } = await axios.post(endpoint, { email, password });
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Authentication failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4">{isLogin ? "Login" : "Register"}</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <input
        type="email"
        className="w-full mb-3 p-2 border rounded"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        className="w-full mb-3 p-2 border rounded"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        {isLogin ? "Login" : "Register"}
      </button>
    </form>
  );
};

export default AuthForm;