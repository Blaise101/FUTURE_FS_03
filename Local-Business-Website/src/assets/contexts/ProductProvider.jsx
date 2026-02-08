import { useState } from "react";
import { products as PRODUCTS } from "../constants/products";
import { ProductContext } from "./ProductContext";

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <ProductContext.Provider value={{ deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
