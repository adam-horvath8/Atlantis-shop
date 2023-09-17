import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext(null);

export const ProductContextProvider = ({ children }) => {
  // new object that sets quantity 0 on cartItems
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
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    // fetch the products data from API
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

  // Set all items quantity to 0
  useEffect(() => {
    if (productsData.length > 0) {
      setCartItems(getDefaultCart());
    }
  }, [productsData]);

  // array of items that have quantity more than 0
  const cartItemIds = Object.entries(cartItems)
    .filter(([itemId, quantity]) => quantity > 0)
    .map(([itemId]) => Number(itemId));

  useEffect(() => {
    setCartProducts(
      productsData.filter((product) => cartItemIds.includes(product.id))
    );

    setNumberOfItemsInCart(cartItemIds.length);
  }, [cartItems]);

  const addToCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = {
        ...prev,
        [itemId]: prev[itemId] + 1,
      };

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
    cartItemIds,
    cartProducts,
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
