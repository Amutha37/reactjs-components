import { useEffect, useState } from "react";
import "./styleload.css";

const LoadMoreProducts = () => {
  const [loading, setLoading] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);

  const maxProductCount = 100;
  const productsPerPage = 10;

  async function fetchData() {
    if (productsData.length >= maxProductCount) {
      // Already loaded maximum products, no more fetch needed
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${productsPerPage}&skip=${count * productsPerPage}`
      );

      if (!response.ok) {
        throw new Error(`An error has occurred: ${response.status}`);
      }

      const result = await response.json();
      if (result && result.products) {
        const newProducts = result.products.slice(0, maxProductCount - productsData.length);
        setProductsData((prevData) => [...prevData, ...newProducts]);
      }
    } catch (error) {
      setError(`Fetch error: ${error.message}`);
    } finally {
      setLoading(false); // Ensure loading is set to false after fetch operation
    }
  }

  useEffect(() => {
    fetchData();
  }, [count]);

  const handleLoadMore = () => {
    if (productsData.length < maxProductCount) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  if (loading) {
    return <div>Loading data! Please wait...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="load-more-container">
      <h1>Load More Products</h1>
      <div className="product-container">
        {productsData.map((item, index) => (
          <div className="product" key={index}>
            <img src={item.thumbnail} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      {productsData.length < maxProductCount && (
        <div className="button-container">
          <button className="load_button" onClick={handleLoadMore}>
            Load More...
          </button>
          {productsData.length}
        </div>
      )}
      {productsData.length >= maxProductCount && (
        <p className="button-disable">All products loaded.</p>
      )}
    </div>
  );
};

export default LoadMoreProducts;
