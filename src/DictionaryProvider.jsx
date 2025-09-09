import { useState } from "react";
import { API_BASE_URL, API_ENDPOINT } from "./Constants";
import { DictionaryContext } from "./DictionaryContext";

export const DictionaryProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (query) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${API_BASE_URL}${API_ENDPOINT}/${query}`);

      if (!response.ok) {
        throw new Error("Data fetch failed");
      }

      const result = await response.json();
      const firstResult = result[0];
      console.log(firstResult);
      setData(result[0]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DictionaryContext.Provider value={{ data, loading, error, fetchData }}>
      {children}
    </DictionaryContext.Provider>
  );
};
