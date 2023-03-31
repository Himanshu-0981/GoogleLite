import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

import { fetchData } from "../utils/api";

export const Context = createContext();

export const AppContext = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [randomUser, setRandomUser] = useState("");

  const fetchResult = () => {
    setLoading(true);
    fetchData(query)
      .then((res) => {
        console.log(res);
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      if (query) {
        fetchResult();
      }
    }, 300);
    return () => clearTimeout(interval);
  }, [query]);

  const fetchRandomUser = async () => {
    const { data } = await axios.get("https://randomuser.me/api/");
    setRandomUser(data?.results[0]?.picture?.thumbnail);
  };

  useEffect(() => {
    fetchRandomUser();
  }, []);

  return (
    <Context.Provider
      value={{
        data,
        query,
        loading,
        setQuery,
        randomUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};
