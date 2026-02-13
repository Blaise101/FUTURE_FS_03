import { useState } from "react";
import ProductTable from "../../components/products/ProductTable";
import ProductForm from "../../components/products/ProductForm";

export default function Products() {
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);
  const handleAddNew = () => {
    setCurrentProduct({
      name: "",
      price: 0,
      description: "",
      image: "",
      category: "Clothing",
    });
    setIsEditing(true);
  };
  const handleEdit = (product) => {
    setCurrentProduct(product);
    setIsEditing(true);
  };
  const handleSubmit = () => {};
  const handleCancel = () => {
    setCurrentProduct(null);
    setIsEditing(false);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold serif">Manage Products</h1>
        {!isEditing && (
          <button
            onClick={handleAddNew}
            className="bg-[#1A1A1A] text-white px-6 py-3 uppercase text-xs tracking-widest font-bold hover:bg-[#C5A59E] transition-colors"
          >
            Add New Product
          </button>
        )}
      </div>

      {isEditing && currentProduct && (
        <ProductForm
          initialData={currentProduct}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          isEditing={isEditing}
          title={currentProduct.id ? "Edit Product" : "Add New Product"}
        />
      )}

      {!isEditing && <ProductTable onEdit={handleEdit} />}
    </div>
  );
}
