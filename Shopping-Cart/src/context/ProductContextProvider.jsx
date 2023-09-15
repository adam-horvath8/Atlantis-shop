import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext(null);

export const ProductContextProvider = ({ children }) => {
  const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < productsData.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  const [productsData, setProductsData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState({});
  const [numberOfItemsInCart, setNumberOfItemsInCart] = useState(0);


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

  useEffect(() => {
    if (productsData.length > 0) {
      setCartItems(getDefaultCart());
    }
  }, [productsData]);

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = {
        ...prev,
        [itemId]: prev[itemId] + 1,
      };
      console.log(updatedCart); // Log the updated cart here
      return updatedCart; // Return the new state object
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      if (prev[itemId] > 0) {
        return { ...prev, [itemId]: prev[itemId] - 1 };
      } else {
        return { ...prev };
      }
    });
  };

  const contextValue = {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    productsData,
    error,
    isLoading,
    setNumberOfItemsInCart,
    numberOfItemsInCart,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
