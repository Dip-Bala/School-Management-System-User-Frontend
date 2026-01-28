import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ForgotPasswordComponent from "@/components/auth/ForgotPasswordComponent";
import OTPVerificationComponent from "@/components/auth/OTPVerificationComponent";
import ResetPasswordComponent from "@/components/auth/ResetPasswordComponent";

type ForgotPasswordStep = "forgot-password" | "otp-verification" | "reset-password";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<ForgotPasswordStep>("forgot-password");
  const [userIdData, setUserIdData] = useState<{ userId: string; mobileNumber: string }>({
    userId: "",
    mobileNumber: "",
  });

  const handleForgotPassword = (data: { userId: string; mobileNumber: string }) => {
    // TODO: Connect to backend API to send OTP
    console.log("Forgot password data:", data);
    
    // Simulate API call
    toast.info("OTP sent to your mobile number", {
      autoClose: 3000,
    });

    setUserIdData(data);
    setCurrentStep("otp-verification");
  };

  const handleOTPSubmit = (data: { otp: string }) => {
    // TODO: Connect to backend API to verify OTP
    console.log("OTP verification:", data);
    
    // Simulate API call
    toast.success("OTP verified successfully", {
      autoClose: 3000,
    });

    setCurrentStep("reset-password");
  };

  const handleOTPResend = () => {
    // TODO: Connect to backend API to resend OTP
    console.log("Resend OTP for:", userIdData.mobileNumber);
    
    toast.info("OTP resent to your mobile number", {
      autoClose: 3000,
    });
  };

  const handleResetPassword = (data: { newPassword: string; confirmPassword: string }) => {
    // TODO: Connect to backend API to reset password
    console.log("Reset password data:", data);
    
    // Simulate API call
    toast.success("✅ Password reset successfully!", {
      autoClose: 3000,
    });

    // Redirect to login after 2 seconds
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <>
      {currentStep === "forgot-password" && (
        <ForgotPasswordComponent onSubmit={handleForgotPassword} />
      )}
      {currentStep === "otp-verification" && (
        <OTPVerificationComponent 
          onSubmit={handleOTPSubmit} 
          onResend={handleOTPResend}
        />
      )}
      {currentStep === "reset-password" && (
        <ResetPasswordComponent onSubmit={handleResetPassword} />
      )}
    </>
  );
};

export default ForgotPasswordPage;
