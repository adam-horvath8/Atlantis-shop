import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext(null);

export const ProductContextProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //   console.log(productsData);

  useEffect(() => {
    const getProductsData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error("Could not find the data");
        }

        let actualProductsData = await response.json();
        setProductsData(actualProductsData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    getProductsData();
  }, []);

  const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < productsData.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  const [cartItems, setCartItems] = useState(getDefaultCart());

  console.log(getDefaultCart());

  const addToCart = (itemId) => {
    console.log(itemId);
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    productsData,
    error,
    isLoading,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
