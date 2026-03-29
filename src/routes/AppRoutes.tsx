import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import Technicians from "../pages/Technicians/Technicians";
import Login from "../pages/Login/Login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/technicians" element={<Technicians />} />
      </Route>
    </Routes>
  );
}
