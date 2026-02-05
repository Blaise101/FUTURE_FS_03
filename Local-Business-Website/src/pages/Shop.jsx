import { products } from "../assets/constants/products";
import { useState } from "react";
import ProductCard from "../components/home/partials/ProductCard";

export default function Shop() {
  const categories = ["All", "Clothing", "Accessories", "Shoes"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className="mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 serif">
          The Collection
        </h1>
        <p className="text-gray-500 font-light max-w-2xl">
          Browse our carefully curated selection of timeless pieces and seasonal
          favorites.
        </p>
      </header>
      <div className="flex flex-wrap gap-4 mb-12 border-b border-gray-100 pb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2 text-xs uppercase tracking-widest transition-all ${
              activeCategory === cat
                ? "bg-[#1A1A1A] text-white"
                : "bg-white text-gray-500 hover:text-[#1A1A1A]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}
