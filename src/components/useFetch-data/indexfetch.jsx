import { useState, useEffect } from "react";

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  console.log("url", url);

  async function fetchData() {
    setPending(true);
    try {
      const response = await fetch(url, { ...options });
      // waits until the request completes...

      if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
      }

      const result = await response.json();

     
      setData(result);
      setError(null);
      setPending(false);
    } catch (error) {
      console.log("Fetch error: ", error);
      setError(`${error}. Some Error Occured`);
      setPending(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, pending };
};

export default useFetch;
