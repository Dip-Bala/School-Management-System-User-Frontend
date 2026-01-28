import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import RegisterComponent from "@/components/auth/RegisterComponent";

interface RegisterData {
  schoolName: string;
  schoolLocation: string;
  adminName: string;
  phoneNumber: string;
  emailId: string;
}

const RegisterPage = () => {
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const countdownRef = useRef(30);

  const handleRegister = (data: RegisterData) => {
    // TODO: Connect to backend API to save school data
    console.log("Registration data:", data);
    
    // Temporary: Save to localStorage for demo
    localStorage.setItem("schoolData", JSON.stringify(data));
    
    // Show success toast (simple notification)
    toast.success("✅ Registration Successful!", {
      autoClose: 5000,
      hideProgressBar: false,
      closeButton: true,
    });
    
    // Hide the register form
    setIsRegistered(true);
    
    // Reset countdown
    countdownRef.current = 30;
    setCountdown(30);

    // Countdown timer
    const countdownInterval = setInterval(() => {
      countdownRef.current -= 1;
      setCountdown(countdownRef.current);
      
      if (countdownRef.current <= 0) {
        clearInterval(countdownInterval);
        navigate("/login");
      }
    }, 1000);
  };

  // Show modal with countdown when registered
  if (isRegistered) {
    const progress = ((30 - countdown) / 30) * 100;
    
    return (
      <div className="flex items-center justify-center w-full min-h-screen bg-[#e8f1ff]">
        <div className="fixed top-[-10%] left-[-5%] w-[40%] h-[60%] bg-blue-200/20 rounded-full blur-3xl -z-10"></div>
        <div className="fixed bottom-[-10%] right-[-5%] w-[40%] h-[60%] bg-blue-300/20 rounded-full blur-3xl -z-10"></div>

        {/* Modal Card */}
        <div className="w-full max-w-md">
          <div className="bg-white rounded-[2rem] shadow-xl p-8">
            <div className="text-center">
              <div className="text-6xl mb-6">✅</div>
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Registration Successful!
              </h1>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Super admin approval is pending. Please wait for 30 seconds; you will be redirected to the login page.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Your User ID, password, and school code will be sent to you via email.
              </p>

              {/* Countdown */}
              <p className="text-2xl font-bold text-blue-600 mb-6">{countdown} seconds</p>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-green-500 h-full transition-all duration-1000"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <RegisterComponent onSubmit={handleRegister} />;
};

export default RegisterPage;
