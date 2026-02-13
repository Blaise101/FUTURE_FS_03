import { useEffect, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { useAuth } from "../contexts/AuthContext";

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    if (!token) return;

    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, [token]);

  const addProduct = async (userInput) => {
    if (!token) return null;

    try {
      const formDataObj = new FormData();
      formDataObj.append("name", userInput.name);
      formDataObj.append("price", userInput.price);
      formDataObj.append("category", userInput.category);
      formDataObj.append("description", userInput.description);
      if (userInput.imageFile) {
        formDataObj.append("image", userInput.imageFile);
      }

      const res = await fetch("http://localhost:8000/api/products/create", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataObj,
      });

      if (!res.ok) throw new Error("Failed to add product");

      const data = await res.json();
      // Append the new product to the current state
      setProducts((prev) => [...prev, data.product || data]);
      return data.product || data;
    } catch (err) {
      console.error("Error adding product:", err);
      return null;
    }
  };

  const updateProduct = async (userInput, id) => {
    if (!token) return null;

    try {
      const formDataObj = new FormData();
      formDataObj.append("name", userInput.name);
      formDataObj.append("price", userInput.price);
      formDataObj.append("category", userInput.category);
      formDataObj.append("description", userInput.description);

      if (userInput.imageFile) {
        formDataObj.append("image", userInput.imageFile);
      }

      // Debug properly
      console.log([...formDataObj.entries()]);

      const res = await fetch(
        `http://localhost:8000/api/products/update/${id}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
          body: formDataObj,
        },
      );

      if (!res.ok) throw new Error("Failed to update product");

      const data = await res.json();

      setProducts((prev) =>
        prev.map((product) =>
          product.id === id ? data.product || data : product,
        ),
      );

      return data.product || data;
    } catch (err) {
      console.error("Update error:", err);
      return null;
    }
  };

  const deleteProduct = async (id) => {
    if (!token) return;
    const res = await fetch(`http://localhost:8000/api/products/delete/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Failed to delete product");
    setProducts((prev) => prev.filter((product) => product.id !== id));
    return;
  };

  return (
    <ProductContext.Provider
      value={{ products, deleteProduct, addProduct, updateProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};
