import { useNavigate } from "react-router-dom";
import { useAuth } from "../assets/contexts/AuthContext";
import { useState } from "react";

export default function Sidebar() {
  const { user, logout } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    setLoading(true);
    await logout();
    navigate("/login", { replace: true });
  };
  const links = [
    { name: "Dashboard", path: "/admin/dashboard", icon: "📊" },
    { name: "Products", path: "/admin/products", icon: "👗" },
    { name: "Collections", path: "/admin/collections", icon: "📁" },
    { name: "Messages", path: "/admin/messages", icon: "✉️" },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col h-screen sticky top-0">
      <div className="p-6 border-b border-gray-100">
        <button
          onClick={() => navigate("/admin/dashboard")}
          className="text-xl font-bold tracking-widest uppercase serif block"
        >
          Luna Thread
        </button>
        <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">
          Admin Portal
        </p>
      </div>

      <div className="p-6 flex items-center gap-3">
        {user ? (
          <div className="w-10 h-10 rounded-full bg-[#C5A59E] flex items-center justify-center text-white font-bold">
            {user.name[0]}
          </div>
        ) : (
          <div className="h-10 w-10 bg-gradient-to-r from-gray-300 to-gray-100 rounded animate-pulse"></div>
        )}
        <div className="overflow-hidden">
          {user ? (
            <>
              <p className="text-sm font-semibold truncate">{user.name}</p>
              <p className="text-xs text-gray-400 truncate">{user.email}</p>
            </>
          ) : (
            <div className="h-10 bg-gradient-to-r from-gray-300 to-gray-100 rounded animate-pulse w-40"></div>
          )}
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {links.map((link) => (
          <button
            key={link.name}
            onClick={() => navigate(link.path)}
            className={`flex items-center gap-3 w-full px-4 py-3 rounded-md text-sm font-medium transition-colors ${
              location.pathname === link.path
                ? "bg-[#F3E5E5] text-[#C5A59E]"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <span>{link.icon}</span>
            {link.name}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-100">
        <button
          onClick={handleLogout}
          disabled={loading}
          className="w-full disabled:border-red-300 disabled:pointer-events-none flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-500 hover:bg-red-50 rounded-md transition-colors"
        >
          {!loading ? (
            <>
              <span>🚪</span>
              Logout
            </>
          ) : (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-red-300 border-t-red-500 rounded-full animate-spin" />
              <span>Signing out...</span>
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
