import { useState } from "react";

export default function ProductForm({ initialData, onCancel, title }) {
  const handleSubmit = () => {};
  const [formData, setFormData] = useState(initialData);

  return (
    <div className="bg-white p-8 border border-gray-200 rounded-sm shadow-sm animate-fade-in mb-8">
      <h2 className="text-xl font-bold serif mb-6">{title}</h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">
              Product Name
            </label>
            <input
              type="text"
              required
              value={formData.name || ""}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-[#C5A59E]"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">
              Price ($)
            </label>
            <input
              type="number"
              required
              value={formData.price || 0}
              onChange={(e) =>
                setFormData({ ...formData, price: Number(e.target.value) })
              }
              className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-[#C5A59E]"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">
              Category
            </label>
            <select
              value={formData.category || "Clothing"}
              // onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
              className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-[#C5A59E]"
            >
              <option value="Clothing">Clothing</option>
              <option value="Accessories">Accessories</option>
              <option value="Shoes">Shoes</option>
            </select>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">
              Image URL
            </label>
            <input
              type="text"
              required
              value={formData.image || ""}
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
              className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-[#C5A59E]"
              placeholder="https://images.unsplash.com/..."
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">
              Description
            </label>
            <textarea
              required
              rows={4}
              value={formData.description || ""}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-[#C5A59E] resize-none"
            />
          </div>
        </div>
        <div className="md:col-span-2 flex gap-4 pt-4">
          <button
            type="submit"
            className="bg-[#C5A59E] text-white px-8 py-3 uppercase text-xs tracking-widest font-bold hover:bg-[#B4948E] transition-colors"
          >
            Save Product
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-100 text-gray-600 px-8 py-3 uppercase text-xs tracking-widest font-bold hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
