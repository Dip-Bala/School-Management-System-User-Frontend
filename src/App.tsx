import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import ForgotPasswordPage from "@/pages/auth/ForgotPasswordPage";
import NewAdmission from "@/pages/admissions/NewAdmission";
import StudentList from "@/pages/admissions/StudentList";
import IdCards from "@/pages/admissions/IdCards";
import './App.css'

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        
        {/* Admissions Routes */}
        <Route path="/admissions/new" element={<NewAdmission />} />
        <Route path="/admissions/students" element={<StudentList />} />
        <Route path="/admissions/id-cards" element={<IdCards />} />
        
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  )
}

export default App
