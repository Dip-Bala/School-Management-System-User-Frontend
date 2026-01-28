import React, { useState } from "react";

interface OTPVerificationData {
  otp: string;
}

const OTPVerificationComponent = ({ 
  onSubmit, 
  onResend 
}: { 
  onSubmit: (data: OTPVerificationData) => void;
  onResend: () => void;
}) => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [resendTimer, setResendTimer] = useState(0);

  const validateForm = () => {
    if (!otp.trim()) {
      setError("OTP is required");
      return false;
    }
    if (!/^\d{6}$/.test(otp)) {
      setError("OTP must be 6 digits");
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (validateForm()) {
      onSubmit({ otp });
    }
  };

  const handleResend = () => {
    setResendTimer(30);
    setOtp("");
    setError("");
    onResend();

    const timer = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-[#e8f1ff]">
      {/* Background circles */}
      <div className="fixed top-[-10%] left-[-5%] w-[40%] h-[60%] bg-blue-200/20 rounded-full blur-3xl -z-10"></div>
      <div className="fixed bottom-[-10%] right-[-5%] w-[40%] h-[60%] bg-blue-300/20 rounded-full blur-3xl -z-10"></div>

      {/* OTP Verification Card */}
      <div className="w-full max-w-md">
        <div className="bg-white rounded-[2rem] shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Verify OTP
            </h1>
            <p className="text-gray-500">Enter the OTP sent to your mobile</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* OTP Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                OTP (6 digits)
              </label>
              <input
                type="text"
                value={otp}
                onChange={(e) => {
                  setOtp(e.target.value.replace(/\D/g, "").slice(0, 6));
                  setError("");
                }}
                placeholder="Enter 6-digit OTP"
                maxLength={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-2xl tracking-widest"
              />
            </div>

            {/* Verify Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
            >
              Verify OTP
            </button>
          </form>

          {/* Resend OTP */}
          <div className="mt-6 text-center">
            {resendTimer > 0 ? (
              <p className="text-sm text-gray-600">
                Resend OTP in {resendTimer} seconds
              </p>
            ) : (
              <button
                onClick={handleResend}
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Resend OTP
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPVerificationComponent;
