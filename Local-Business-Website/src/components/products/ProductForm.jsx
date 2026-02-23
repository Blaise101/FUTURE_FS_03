import { useState } from "react";
import { useProduct } from "../../assets/contexts/ProductContext";

export default function ProductForm({ initialData, onCancel, title }) {
  const { addProduct, updateProduct } = useProduct();
  const [formData, setFormData] = useState(initialData);
  const [isLoading, setIsloading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true);
    if (initialData.id) {
      await updateProduct(formData, initialData.id);
    } else {
      await addProduct(formData);
    }
    setFormData(initialData);
    setIsloading(false);
    onCancel();
  };

  return (
    <div className="bg-white p-8 border border-gray-200 rounded-sm shadow-sm animate-fade-in mb-8">
      <h2 className="text-xl font-bold serif mb-6">{title}</h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        encType="multipart/form-data"
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
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
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
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    // store the file for uploading
                    setFormData({ ...formData, imageFile: file });

                    // optional: create a preview (base64)
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      setFormData((prev) => ({
                        ...prev,
                        imagePreview: event.target.result,
                      }));
                    };
                    reader.readAsDataURL(file);
                  }
                }}
                className="hidden"
                id="image-input"
              />

              <label
                htmlFor="image-input"
                className="w-full border border-gray-200 p-3 text-sm block cursor-pointer hover:bg-gray-50 transition-colors focus-within:outline-none focus-within:border-[#C5A59E] focus-within:ring-1 focus-within:ring-[#C5A59E]"
              >
                {formData.image ? "✓ Image selected" : "Click to select image"}
              </label>
            </div>
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
            disabled={isLoading}
            className="bg-[#C5A59E] text-white px-8 py-3 uppercase text-xs tracking-widest font-bold hover:bg-[#B4948E] transition-colors"
          >
            {!isLoading ? (
              <>Save Product</>
            ) : (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-[#e5c2ba] border-t-white rounded-full animate-spin" />
                <span>Saving Product...</span>
              </div>
            )}
          </button>
          <button
            type="button"
            onClick={onCancel}
            disabled={isLoading}
            className="bg-gray-100 disabled:hidden text-gray-600 px-8 py-3 uppercase text-xs tracking-widest font-bold hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
