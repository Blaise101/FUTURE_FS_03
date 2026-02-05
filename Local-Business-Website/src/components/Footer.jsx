import { FaInstagram, FaPinterest } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const quickLinks = ["New Arrivals", "Dresses", "Accessories", "Gift Cards"];
  const supportLinks = [
    { name: "Our Story", path: "/about" },
    { name: "Shipping & Returns", path: "/contact" },
    { name: "Privacy Policy", path: "/contact" },
    { name: "FAQ", path: "/contact" },
  ];
  const navigate = useNavigate();

  return (
    <footer className="bg-white border-t border-gray-100 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold uppercase tracking-widest serif">
              Luna Thread
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Curated fashion, crafted for you. Supporting local designers and
              sustainable practices since 2026.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#C5A59E] transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <FaInstagram className="h-7 w-7" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#C5A59E] transition-colors"
              >
                <span className="sr-only">Pinterest</span>
                <FaPinterest className="h-7 w-7" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider">
              Shop
            </h4>
            <ul className="space-y-4 text-sm text-gray-500">
              {quickLinks.map((quickLink) => (
                <li>
                  <button
                    className="hover:text-[#C5A59E]"
                    onClick={() => navigate("/shop")}
                    key={quickLink}
                  >
                    {quickLink}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider">
              Support
            </h4>
            <ul className="space-y-4 text-sm text-gray-500">
              {supportLinks.map((supportLink) => (
                <li>
                  <button
                    key={supportLink.name}
                    onClick={() => navigate(supportLink.path)}
                    className="hover:text-[#C5A59E]"
                  >
                    {supportLink.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider">
              Visit Us
            </h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>123 Boutique Lane</li>
              <li>20 KG 10 Avenue</li>
              <li>Mon-Sat: 10am - 7pm</li>
              <li>Sun: 12pm - 5pm</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-3 border-t border-gray-100 text-center">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} Luna Thread Boutique. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
