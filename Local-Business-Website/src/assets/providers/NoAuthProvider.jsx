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

  const [items, steItems] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  const addToCart = ({ id, quantity }) => {
    steItems((prev) => {
      const existing = prev.find((items) => items.id === id);
      if (existing) {
        return prev.map((item) => {
          item.id === id
            ? { ...item, quantity: item.quantity + quantity }
            : item;
        });
      }
      return [...prev, { id, quantity }];
    });
    // Trigger toast notification
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <NoAuthContext.Provider
      value={{ addMessage, products, cartCount, addToCart, showNotification }}
    >
      {children}
    </NoAuthContext.Provider>
  );
};
