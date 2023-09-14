import { useState, useEffect } from "react";

function useDataFetching(url) {
  const [productsData, setProductsData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  console.log(productsData);
  
  useEffect(() => {
    const getProductsData = async () => {
      try {
        const response = await fetch(url);

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

  return { productsData, error, isLoading };
}

export default useDataFetching;
