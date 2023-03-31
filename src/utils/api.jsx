import axios from "axios";

const BASE_URL = "https://g-search.p.rapidapi.co";

const options = {
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_APP_GOOGLE_SEARCH_API_KEY,
    "X-RapidAPI-Host": "g-search.p.rapidapi.com",
  },
};

export const fetchData = async (query) => {
  const { data } = await axios.get(`${BASE_URL}/search?q=${query}`, options);
  return await data;
};
