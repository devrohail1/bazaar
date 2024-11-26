import React, { createContext, useState } from "react";

// Create the context
export const ProductContext = createContext();

// Create the Provider component
export const ProductProvider = ({ children }) => {
  const [productData, setProductData] = useState({
    mainImg: "/airpods1.jpg",
    brandImg: "/brand.png",
    brandName: "Xiaomi",
    heading: "Heading 1",
    rating: 4,
    price: "$0.00",
  });

  return (
    <ProductContext.Provider value={{ productData, setProductData }}>
      {children}
    </ProductContext.Provider>
  );
};
