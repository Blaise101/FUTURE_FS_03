import { useState } from "react";
import DeleteModal from "./DeleteModal";

export default function ProductTable({ products, onEdit }) {
  const [deleteProduct, setDeleteProduct] = useState(false);
  const [productTodelete, setProductToDelete] = useState(null);
  const handleDelete = (product) => {
    setDeleteProduct(true);
    setProductToDelete(product);
  };
  const handleCancelDelete = () => {
    setDeleteProduct(false);
  };

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
            {products.map((product) => (
              <tr
                key={product.id}
                className="hover:bg-gray-50 transition-colors group"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={product.image}
                      alt=""
                      className="w-12 h-16 object-cover rounded-sm"
                    />
                    <div>
                      <p className="font-semibold text-sm">{product.name}</p>
                      <p className="text-xs text-gray-400">ID: {product.id}</p>
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
                      // onClick={() => {
                      //   if (
                      //     confirm("Are you sure you want to delete this product?")
                      //   )
                      //     onDelete(product.id);
                      // }}
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
      </div>
    </>
  );
}
