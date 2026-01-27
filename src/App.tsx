import { Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}

export default App
