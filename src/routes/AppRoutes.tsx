import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login/Login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      {/* rota coringa de fallback */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}