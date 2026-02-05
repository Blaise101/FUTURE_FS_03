import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div className="group relative">
      <div className="aspect-[3/4] overflow-hidden bg-gray-100 rounded-sm">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors pointer-events-none" />

        <button
          onClick={() => navigate(`/product/${product.id}`)}
          className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm py-3 text-center text-xs uppercase tracking-widest font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          View Details
        </button>
      </div>
      <div className="mt-4 px-2 flex justify-between items-start">
        <div>
          <h3 className="text-sm text-gray-700">
            <button
              onClick={() => navigate(`/product/${product.id}`)}
              className="hover:text-[#C5A59E] transition-colors"
            >
              {product.name}
            </button>
          </h3>
          <p className="mt-1 text-xs text-gray-400 uppercase tracking-tighter">
            {product.category}
          </p>
        </div>
        <p className="text-sm font-medium text-gray-900">${product.price}</p>
      </div>
    </div>
  );
}
