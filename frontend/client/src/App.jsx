import { Navigate, Route, Routes } from "react-router-dom";
import SuperAdminPage from "./components/SuperAdminPage";
import Dashboard from "./Dashboard";
import Login from "./Login";

const role = localStorage.getItem("role");

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/dashboard/*"
        element={role ? <Dashboard /> : <Navigate to="/" />}
      />
      <Route path="/superadmin" element={<SuperAdminPage />} />
    </Routes>
  );
}
