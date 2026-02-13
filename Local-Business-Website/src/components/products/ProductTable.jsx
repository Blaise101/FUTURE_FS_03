import { useState } from "react";
import DeleteModal from "./DeleteModal";
import { useProduct } from "../../assets/contexts/ProductContext";

export default function ProductTable({ onEdit }) {
  const [deleteProduct, setDeleteProduct] = useState(false);
  const [productTodelete, setProductToDelete] = useState(null);
  const handleDelete = (product) => {
    setDeleteProduct(true);
    setProductToDelete(product);
  };
  const handleCancelDelete = () => {
    setDeleteProduct(false);
  };
  const { products } = useProduct();

  return (
    <>
      {deleteProduct && (
        <div className={`${deleteProduct ? "" : "hidden"}`}>
          <DeleteModal
            onCancel={handleCancelDelete}
            product={productTodelete}
          />
        </div>
      )}
      <div className="bg-white border border-gray-100 rounded-sm overflow-hidden shadow-sm">
        {products.length > 0 ? (
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 text-xs uppercase tracking-widest font-bold text-gray-400">
                  Product
                </th>
                <th className="px-6 py-4 text-xs uppercase tracking-widest font-bold text-gray-400">
                  Category
                </th>
                <th className="px-6 py-4 text-xs uppercase tracking-widest font-bold text-gray-400">
                  Price
                </th>
                <th className="px-6 py-4 text-xs uppercase tracking-widest font-bold text-gray-400 text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {products.map((product, index) => (
                <tr
                  key={product.id}
                  className="hover:bg-gray-50 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={`http://localhost:8000/${product.image}`}
                        alt=""
                        className="w-12 h-16 object-cover rounded-sm"
                      />
                      <div>
                        <p className="font-semibold text-sm">{product.name}</p>
                        <p className="text-xs text-gray-400">ID: {index + 1}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {product.category}
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-gray-900">
                    ${product.price}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-3 md:opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => onEdit(product)}
                        className="p-2 text-blue-500 hover:bg-blue-50 rounded-sm"
                        title="Edit"
                      >
                        ✏️
                      </button>
                      <button
                        onClick={() => handleDelete(product)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-sm"
                        title="Delete"
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 px-6">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No Products Yet
            </h3>
            <p className="text-gray-500 text-center max-w-md">
              Your product library is empty. Start by adding your first product
              to get started.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
