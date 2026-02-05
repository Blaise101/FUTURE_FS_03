export default function Footer() {
  const quickLinks = ["New Arrivals", "Dresses", "Accessories", "Gift Cards"];
  const supportLinks = [
    { name: "Our Story", path: "/about" },
    { name: "Shipping & Returns", path: "/contact" },
    { name: "Privacy Policy", path: "/contact" },
    { name: "FAQ", path: "/contact" },
  ];

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
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#C5A59E] transition-colors"
              >
                <span className="sr-only">Pinterest</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.017 0c-6.627 0-12 5.373-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.966 7.398 6.93 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
                </svg>
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
                    to="/shop"
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
                    to={supportLink.path}
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
