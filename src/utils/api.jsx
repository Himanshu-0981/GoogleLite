import axios from "axios";

// For Web search
const FETCH_DATA_BASE_URL = "https://google-search83.p.rapidapi.com/google";

const options = {
  headers: {
    "X-RapidAPI-Key": "af2c7c631cmsh45754f6e80f5b57p155206jsn677410b5b868",
    "X-RapidAPI-Host": "google-search83.p.rapidapi.com",
  },
};

export const fetchData = async (url) => {
  const { data } = await axios.get(
    `${FETCH_DATA_BASE_URL}?query=${url}&num=10&start=0`,
    options
  );
  return await data;
};

// For Image
const FETCH_IMAGE_BASE_URL =
  "https://google-search83.p.rapidapi.com/google/search_image";

export const fetchImage = async (url) => {
  const { data } = await axios.get(
    `${FETCH_IMAGE_BASE_URL}?query=${url}`,
    options
  );
  return await data;
};
