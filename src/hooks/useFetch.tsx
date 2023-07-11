import { useState, useEffect } from "react";

export function useFetch(url: string) {
  // State to store the fetched data
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the provided URL
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [url]);

  // Return the fetched data
  return data;
}
