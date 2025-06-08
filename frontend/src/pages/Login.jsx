import React from "react";
import AuthForm from "../components/AuthForm";

const Login = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <AuthForm type="login" />
    </div>
  );
};

export default Login;