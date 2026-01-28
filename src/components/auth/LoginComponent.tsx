import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeSlash } from "@phosphor-icons/react";

const LoginComponent = ({ onSubmit }: { onSubmit: (data: { userId: string; password: string }) => void }) => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!userId.trim() || !password.trim()) {
      setError("All fields are required");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    onSubmit({ userId, password });
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-[#e8f1ff]">
      {/* Background circles */}
      <div className="fixed top-[-10%] left-[-5%] w-[40%] h-[60%] bg-blue-200/20 rounded-full blur-3xl -z-10"></div>
      <div className="fixed bottom-[-10%] right-[-5%] w-[40%] h-[60%] bg-blue-300/20 rounded-full blur-3xl -z-10"></div>

      {/* Login Card */}
      <div className="w-full max-w-md">
        <div className="bg-white rounded-[2rem] shadow-xl p-8">
          {/* Logo */}
          <div className="flex flex-col items-center mb-6">
            <img src="/logo.svg" alt="GurukoolX Logo" className="h-16 w-auto object-contain mb-2" />
            <h2 className="text-xl font-bold text-blue-900/80 tracking-wide uppercase"></h2>
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              School Management
            </h1>
            <p className="text-gray-500">Login to your account</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* User ID Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                User ID
              </label>
              <input
                type="text"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="Enter your User ID"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeSlash size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
            >
              Login
            </button>
          </form>

          {/* Forgot Password & Register */}
          <div className="mt-6 space-y-4 text-center">
            <button
              onClick={handleForgotPassword}
              className="block w-full text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              Forgot Password?
            </button>
            <div className="text-sm text-gray-600">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/register")}
                className="text-blue-600 font-medium cursor-pointer hover:text-blue-700"
              >
                Register here
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
