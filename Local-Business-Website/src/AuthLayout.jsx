import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./assets/contexts/AuthContext";
import Sidebar from "./components/Sidebar";

export default function AuthLayout() {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8 md:p-12 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
