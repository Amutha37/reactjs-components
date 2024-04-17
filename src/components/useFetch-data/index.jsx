import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  // console.log("url", url);

  const fetchData = async () => {
    setPending(true);

    axios
      .get(url, { ...options })
      .then((response) => {
        const result = response.data;

        // console.log("DATA:", result);
        setData(result);
        setError(null);
        setPending(false);
      })
      .catch((err) => {
        console.log(`Fetch Error: ${err}`);

        setError(`${error}. Some Error Occured`);
        setPending(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, pending };
};

export default useFetch;
