import axios from "axios";

const BASE_URL = "https://google-search83.p.rapidapi.com/google";

const options = {
  headers: {
    "X-RapidAPI-Key": "665274a7dfmsh1109dbea5759a8ep11be6cjsn0f409d12ad71",
    "X-RapidAPI-Host": "google-search83.p.rapidapi.com",
  },
};

export const fetchData = async (url) => {
  const { data } = await axios.get(
    `${BASE_URL}?query=${url}&num=10&start=0`,
    options
  );
  return await data;
};
