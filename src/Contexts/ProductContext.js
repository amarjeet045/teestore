import React, { useContext, useState, useEffect } from "react";
import { productQuery } from "../helper";
const ProductContext = React.createContext();
export function ProductDetails() {
  return useContext(ProductContext);
}

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productFunction = async () => {
      const productDetails = await productQuery();
      console.log(productDetails);

      setProducts(productDetails);
    };
    productFunction()
      .then()
      .catch((err) => console.error(err));
  }, []);

  const value = {
    products
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
}
