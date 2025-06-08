import React from "react";
import AuthForm from "../components/AuthForm";

const Register = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <AuthForm type="register" />
    </div>
  );
};

export default Register;