import { createContext, useContext, useState } from "react";

const CartContext = createContext(undefined);

export const CartProvider = ({ children }) => {
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
    <CartProvider value={{ cartCount, addToCart, showNotification }}>
      {children}
    </CartProvider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
