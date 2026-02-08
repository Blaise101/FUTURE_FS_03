import { createContext, useContext } from "react";

export const ProductContext = createContext();

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error("useProduct must be used within an ProductProvider");
  }
  return context;
};
