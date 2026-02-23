import { useLocation, useNavigate } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { useNoAuth } from "../assets/contexts/NoAuthContext";

export default function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;
  const { cartCount } = useNoAuth();

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <button
              onClick={() => navigate("/")}
              className="text-2xl font-bold tracking-widest cursor-pointer uppercase text-[#1A1A1A] serif"
            >
              Luna Thread
            </button>
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => navigate(link.path)}
                  className={`px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-200 ${
                    isActive(link.path)
                      ? "text-[#C5A59E] border-b-2 border-[#C5A59E]"
                      : "text-gray-600 hover:text-[#C5A59E]"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-4 border-l border-gray-100 pl-8">
              <button
                onClick={() => navigate("/login")}
                className="p-2 text-gray-600 hover:text-[#C5A59E] transition-colors"
                title={"Sign In"}
              >
                <FaRegUser className="h-5 w-5" />
              </button>
              {/* Shopping Bag Icon */}
              <button className="relative p-2 text-gray-600 hover:text-[#C5A59E] transition-colors">
                <span className="sr-only">View shopping bag</span>
                <HiOutlineShoppingBag className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-[10px] font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-[#C5A59E] rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
