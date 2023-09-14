import { createContext, useState } from "react";
import useDataFetching from "../utils/dataFetching";

export const ProductContext = createContext(null);

export const ProductContextProvider = ({ children }) => {
  const { productsData } = useDataFetching("https://fakestoreapi.com/products");

  const getDefaultCart = () => {
    let cart = {};
    // for (let i = 1; productsData.length + 1; i++) {
    //   cart[i] = 0;
    // }
    // return cart;
  };

  const [cartItems, setCartItems] = useState(getDefaultCart());

  console.log(cartItems);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = { cartItems, addToCart, removeFromCart };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
