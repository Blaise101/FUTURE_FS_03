import { useNavigate } from "react-router-dom";
import { products } from "../../assets/constants/products";
import ProductCard from "./partials/ProductCard";
import { useState } from "react";
import ProductDetails from "./partials/ProductDetails";

export default function FeaturedCollection() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();
  const featuredProducts = products.filter((p) => p.featured).slice(0, 3);

  if (selectedProduct) {
    return (
      <ProductDetails
        product={selectedProduct}
        onBack={() => {
          setSelectedProduct(null);
        }}
      />
    );
  } else {
    return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Summer Arrivals
            </h2>
            <p className="text-gray-500 font-light">
              The most loved pieces of the season.
            </p>
          </div>
          <button
            onClick={() => navigate("/shop")}
            className="text-sm font-medium border-b-2 border-transparent hover:border-[#C5A59E] transition-all pb-1 uppercase tracking-widest text-gray-400 hover:text-[#C5A59E]"
          >
            View All
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelect={(product) => setSelectedProduct(product)}
            />
          ))}
        </div>
      </section>
    );
  }
}
