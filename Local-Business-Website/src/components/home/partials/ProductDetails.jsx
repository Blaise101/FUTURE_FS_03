import { useNavigate, useParams } from "react-router-dom";
import { products } from "../../../assets/constants/products";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const navigate = useNavigate();

  if (!product) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h2 className="text-2xl mb-4">Product not found</h2>
        <button
          onClick={() => navigate("/shop")}
          className="text-[#C5A59E] hover:underline"
        >
          Back to Shop
        </button>
      </div>
    );
  } else {
    return (
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* toast notification */}
        {/* {showNotification && (
          <div className="fixed top-24 right-4 z-[100] bg-[#1A1A1A] text-white px-6 py-3 rounded-sm shadow-xl animate-bounce flex items-center gap-3">
            <svg
              className="w-5 h-5 text-[#C5A59E]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-xs uppercase tracking-widest font-bold">
              Added to Bag
            </span>
          </div>
        )}
         */}
        <nav className="mb-8">
          <button
            onClick={() => navigate("/shop")}
            className="text-xs uppercase tracking-widest text-gray-400 hover:text-[#C5A59E] flex items-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Shop
          </button>
        </nav>
      </div>
    );
  }
}
