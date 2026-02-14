import { useEffect, useState } from "react";
import { NoAuthContext } from "../contexts/NoAuthContext";

export const NoAuthProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const addMessage = async (userInput) => {
    const formDataObj = new FormData();
    formDataObj.append("name", userInput.name);
    formDataObj.append("email", userInput.email);
    formDataObj.append("message", userInput.message);
    const res = await fetch("http://localhost:8000/api/messages/create", {
      method: "POST",
      body: formDataObj,
    });
    if (!res.ok) throw new Error("Failed to add product");
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/products", {});

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
  }, []);

  return (
    <NoAuthContext.Provider value={{ addMessage, products }}>
      {children}
    </NoAuthContext.Provider>
  );
};
