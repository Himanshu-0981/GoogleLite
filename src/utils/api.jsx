import axios from "axios";

const URL = "https://google-search74.p.rapidapi.com/?query=";

const options = {
  query: { q: "Computer" },
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "af2c7c631cmsh45754f6e80f5b57p155206jsn677410b5b868",
    "X-RapidAPI-Host": "google-search74.p.rapidapi.com",
  },
};

export const fetchData = async () => {
  const { data } = await axios.get(`${URL}${options.query.q}`, options);
  return data;
};
