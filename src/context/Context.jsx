import React, { useState, useEffect, createContext, useMemo } from "react";

import { fetchData, fetchImage } from "../utils/api";

export const Context = createContext();

export const AppContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState([]);
  const [resultImage, setResultImage] = useState([]);
  const [apiCalled, setApiCalled] = useState(false);
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);

  const fetchResult = () => {
    setLoading(true);
    fetchData(query)
      .then((res) => {
        setResultData(res);
        setApiCalled(true);
        console.log(res);
        setLoading(false);
        setError(false);
      })
      .catch((err) => setError(err));
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      if (query.length > 1) {
        fetchResult();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [query]);

  const fetchImageResult = () => {
    setLoading(true);
    fetchImage(query)
      .then((res) => {
        console.log(res);
        setResultImage(res);
        setApiCalled(true);
        setLoading(false);
      })
      .catch((err) => console.log("Error", err));
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      if (query.length > 2) {
        fetchImageResult();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [query]);
  return (
    <Context.Provider
      value={{
        query,
        loading,
        setLoading,
        setQuery,
        resultData,
        resultImage,
        fetchResult,
        apiCalled,
        error,
      }}
    >
      {children}
    </Context.Provider>
  );
};
