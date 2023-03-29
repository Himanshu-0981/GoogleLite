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
    fetchData().then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    fetchResult();
  }, []);

  const fetchRandomUser = async () => {
    const { data } = await axios.get("https://randomuser.me/api/");
    setRandomUser(data.results[0].picture.thumbnail);
  };

  useEffect(() => {
    fetchRandomUser();
  }, []);
  return (
    <Context.Provider
      value={{
        query,
        setQuery,
        randomUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};
