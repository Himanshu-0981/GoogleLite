import axios from "axios";

// For Web search
const FETCH_DATA_BASE_URL = "https://google-search83.p.rapidapi.com/google";

const options = {
  headers: {
    "X-RapidAPI-Key": "665274a7dfmsh1109dbea5759a8ep11be6cjsn0f409d12ad71",
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
