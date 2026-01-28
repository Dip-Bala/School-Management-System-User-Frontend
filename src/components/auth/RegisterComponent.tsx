import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface RegisterData {
  schoolName: string;
  schoolLocation: string;
  adminName: string;
  phoneNumber: string;
  emailId: string;
}

const RegisterComponent = ({ onSubmit }: { onSubmit: (data: RegisterData) => void }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RegisterData>({
    schoolName: "",
    schoolLocation: "",
    adminName: "",
    phoneNumber: "",
    emailId: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.schoolName.trim()) {
      newErrors.schoolName = "School name is required";
    }
    if (!formData.schoolLocation.trim()) {
      newErrors.schoolLocation = "School location is required";
    }
    if (!formData.adminName.trim()) {
      newErrors.adminName = "Admin name is required";
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber.replace(/\D/g, ""))) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }
    if (!formData.emailId.trim()) {
      newErrors.emailId = "Email ID is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailId)) {
      newErrors.emailId = "Invalid email format";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-[#e8f1ff] py-8">
      {/* Background circles */}
      <div className="fixed top-[-10%] left-[-5%] w-[40%] h-[60%] bg-blue-200/20 rounded-full blur-3xl -z-10"></div>
      <div className="fixed bottom-[-10%] right-[-5%] w-[40%] h-[60%] bg-blue-300/20 rounded-full blur-3xl -z-10"></div>

      {/* Register Card */}
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
              School Registration
            </h1>
            <p className="text-gray-500">Create your school account</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* School Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                School Name
              </label>
              <input
                type="text"
                name="schoolName"
                value={formData.schoolName}
                onChange={handleChange}
                placeholder="Enter school name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              {errors.schoolName && (
                <p className="text-red-500 text-xs mt-1">{errors.schoolName}</p>
              )}
            </div>

            {/* School Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                School Location
              </label>
              <input
                type="text"
                name="schoolLocation"
                value={formData.schoolLocation}
                onChange={handleChange}
                placeholder="Enter school location"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              {errors.schoolLocation && (
                <p className="text-red-500 text-xs mt-1">{errors.schoolLocation}</p>
              )}
            </div>

            {/* Admin Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Admin Name
              </label>
              <input
                type="text"
                name="adminName"
                value={formData.adminName}
                onChange={handleChange}
                placeholder="Enter admin name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              {errors.adminName && (
                <p className="text-red-500 text-xs mt-1">{errors.adminName}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter 10-digit phone number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>
              )}
            </div>

            {/* Email ID */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email ID
              </label>
              <input
                type="email"
                name="emailId"
                value={formData.emailId}
                onChange={handleChange}
                placeholder="Enter email address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
              />
              {errors.emailId && (
                <p className="text-red-500 text-xs mt-1">{errors.emailId}</p>
              )}
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition duration-200 mt-6"
            >
              Register
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-blue-600 font-medium cursor-pointer hover:text-blue-700"
            >
              Login here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
