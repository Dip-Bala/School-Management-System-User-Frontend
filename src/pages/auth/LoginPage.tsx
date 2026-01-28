import React from "react";
import { useNavigate } from "react-router-dom";
import LoginComponent from "@/components/auth/LoginComponent";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (data: { userId: string; password: string }) => {
    console.log("Login attempt with:", data);
    
    // TODO: Connect to backend API
    // Temporary validation for demo
    if (data.userId === "school123" && data.password === "password123") {
      console.log("Login successful!");
      navigate("/dashboard");
    } else {
      console.log("Invalid credentials - userId:", data.userId, "password:", data.password);
      alert("Invalid credentials. Try: User ID: school123, Password: password123");
    }
  };

  return <LoginComponent onSubmit={handleLogin} />;
};

export default LoginPage;
