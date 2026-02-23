import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { useNoAuth } from "../../../assets/contexts/NoAuthContext";

export default function ProductDetails() {
  const { products, addToCart, showNotification } = useNoAuth();
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(0);
  const handleAdd = () => {
    addToCart({ id: product.id, quantity });
    setQuantity(0);
  };

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
        {showNotification && (
          <div className="fixed top-24 right-4 z-[100] bg-[#1A1A1A] text-white px-6 py-3 rounded-sm shadow-xl animate-bounce flex items-center gap-3">
            <FaCheck className="w-4 h-4 text-[#C5A59E]" />
            <span className="text-xs uppercase tracking-widest font-bold">
              Added to Bag
            </span>
          </div>
        )}

        <nav className="mb-8">
          <button
            onClick={() => navigate("/shop")}
            className="text-xs uppercase tracking-widest text-gray-400 hover:text-[#C5A59E] flex items-center gap-2"
          >
            <IoIosArrowBack className="w-4 h-4" />
            Back to Shop
          </button>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Image Section */}
          <div className="bg-gray-50 rounded-sm overflow-hidden">
            <img
              // src={product.image}
              src={`http://localhost:8000/${product.image}`}
              alt={product.name}
              className="w-full h-full object-cover aspect-[4/5]"
            />
          </div>

          {/* Details Section */}
          <div className="flex flex-col">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">
              {product.category}
            </p>
            <h1 className="text-4xl font-bold mb-4 serif tracking-tight">
              {product.name}
            </h1>
            <p className="text-2xl text-gray-900 mb-8 font-medium">
              ${product.price}
            </p>

            <div className="border-t border-b border-gray-100 py-8 mb-8">
              <h3 className="text-xs uppercase tracking-widest font-bold mb-4">
                Description
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                {product.description}
              </p>
            </div>

            {/* Size Selector */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-widest font-bold mb-4">
                Select Size
              </h3>
              <div className="flex gap-4">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 flex items-center justify-center text-sm border ${
                      selectedSize === size
                        ? "border-[#1A1A1A] bg-[#1A1A1A] text-white"
                        : "border-gray-200 text-gray-500 hover:border-[#C5A59E]"
                    } transition-all`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex border border-gray-200 h-14">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 hover:bg-gray-50 transition-colors"
                >
                  -
                </button>
                <span className="flex-1 min-w-[3rem] flex items-center justify-center font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 hover:bg-gray-50 transition-colors"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAdd}
                className="flex-1 bg-[#1A1A1A] text-white uppercase text-xs tracking-widest font-bold hover:bg-[#C5A59E] transition-colors h-14 px-8"
              >
                Add to Bag
              </button>
            </div>

            {/* Benefits */}
            <div className="mt-12 space-y-4">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <FaCheck className="w-4 h-4" />
                <span>Free delivery on orders over $140</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <FaCheck className="w-4 h-4" />
                <span>Eco-friendly packaging</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
