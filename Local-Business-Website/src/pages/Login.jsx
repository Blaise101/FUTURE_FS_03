import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useAuth } from "../assets/contexts/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("admin@lunathread.com");
  const [password, setPassword] = useState("wearetheones");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    await new Promise((r) => setTimeout(r, 800));
    const success = await login(email, password);
    if (success) {
      navigate("/admin/dashboard");
    } else {
      setError("The credentials provided do not match our records.");
    }
    setLoading(false);
  };
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-5%] w-1/2 h-1/2 bg-[#F3E5E5] rounded-full blur-[120px] opacity-60 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-1/2 h-1/2 bg-[#C5A59E]/10 rounded-full blur-[120px] opacity-60" />
      </div>

      <div className="max-w-md w-full relative z-10">
        <div className="mb-12 text-center">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center text-xs uppercase tracking-[0.3em] font-bold text-gray-400 hover:text-[#C5A59E] transition-colors group"
          >
            <MdOutlineArrowBackIosNew className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Return to Boutique
          </button>
        </div>

        <div className="bg-white/80 backdrop-blur-xl p-10 md:p-14 rounded-sm shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-white/50">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold serif uppercase tracking-[0.2em] mb-4 text-[#1A1A1A]">
              Welcome
            </h1>
            <p className="text-gray-400 text-[10px] uppercase tracking-[0.4em] font-semibold">
              Luna Thread Portal
            </p>
          </div>

          {error && (
            <div className="mb-8 p-4 bg-red-50 border-l-2 border-red-200 text-red-600 text-[11px] uppercase tracking-wider font-medium animate-fade-in">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <div className="space-y-2">
              <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 ml-1">
                Account Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/50 border-b-2 border-gray-100 py-4 px-1 text-sm focus:outline-none focus:border-[#C5A59E] transition-all placeholder-gray-300"
                placeholder="admin@lunathread.com"
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500">
                  Password
                </label>
                <button
                  type="button"
                  className="text-[10px] uppercase tracking-widest text-[#C5A59E] font-bold hover:underline"
                >
                  Forgot?
                </button>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/50 border-b-2 border-gray-100 py-4 px-1 text-sm focus:outline-none focus:border-[#C5A59E] transition-all placeholder-gray-300"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1A1A1A] text-white py-5 uppercase text-[10px] tracking-[0.3em] font-bold hover:bg-[#C5A59E] transition-all duration-500 disabled:opacity-50 relative overflow-hidden group"
            >
              <span
                className={`flex items-center justify-center transition-opacity duration-300 ${loading ? "opacity-0" : "opacity-100"}`}
              >
                Sign In to Dashboard
              </span>
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                </div>
              )}
            </button>
          </form>

          <div className="mt-12 text-center">
            <p className="text-[10px] text-gray-400 font-medium tracking-widest uppercase">
              Restricted Area — Authorized Access Only
            </p>
          </div>
        </div>

        {/* Support Info */}
        <div className="mt-12 text-center text-gray-400 text-[10px] uppercase tracking-widest font-bold">
          <p>
            Technical Issue?{" "}
            <a
              href="mailto:support@lunathread.com"
              className="text-[#C5A59E] hover:underline"
            >
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
