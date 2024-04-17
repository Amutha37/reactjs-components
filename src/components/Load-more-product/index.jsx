import { useEffect, useState} from "react";

import "./styleload.css";

const LoadMoreProducts = () => {
  const [loading, setLoading] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  //   const { data, error, pending } = useFetch(
  //          `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`,

  //         )

  //  const ref = useRef();

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      // waits until the request completes...

      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProductsData((prevData) => [...prevData, ...result.products]);
        setLoading(false);
        // setProductsData(result.products);
        setError(null);
        setLoading(false);
      }
    } catch (error) {
      console.log("Fetch error: ", error);
      setError(`${error}. Some Error Occured`);
      setLoading(false);
    }
  }

  console.log("PRODUCT", productsData, "DATA", productsData.length);
  // get more data when count change
  useEffect(() => {
    fetchData();
  }, [count]);

  // Disable more button when product limits reached it's max

  useEffect(() => {
    if (productsData && productsData.length === 100) setDisableButton(true);
  }, [productsData]);

  if (loading) {
    return <div>Loading data ! please wait </div>;
  }

  // const handleMoreProducts = () => {
  //   setCount(count + 1);

  //   // ref.current.scrollIntoView({behavior: 'smooth'})
  // };

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
      <div className="button-container">
        <p>
          count : {count} {productsData.length}
        </p>
        {!disableButton ? 
        <button className="load_button"
          disable={productsData.length === 100 ? !disableButton : disableButton}
          onClick={() => setCount(count + 1)}
        >
          Load More...{" "}
        </button> : null}



     
        {disableButton ? (
          <p className="button-disable">Reached Maximum Products to view.</p>
        ) : null}
      </div>
    </div>
  );
};

export default LoadMoreProducts;
//  className={disableButton ? "button-able" : "button-disable"}
