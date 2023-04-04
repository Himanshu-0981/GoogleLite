import React, { useState, useEffect, createContext, useMemo } from "react";
import axios from "axios";

import { fetchData } from "../utils/api";

export const Context = createContext();

export const AppContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState([]);
  const [query, setQuery] = useState("");

  const fetchResult = () => {
    setLoading(true);
    fetchData(query).then((res) => {
      setLoading(false);
      setResultData(res);
      console.log(res);
    });
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      if (query.length > 1) {
        fetchResult();
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [query]);

  return (
    <Context.Provider
      value={{
        query,
        loading,
        setQuery,
        resultData,
      }}
    >
      {children}
    </Context.Provider>
  );
};
