import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params = {
  key: "AIzaSyBWbAEdfB-odhAqktu75_vUFMCBpMMfIZM",
  cx: "02b20be6092bd4b41",
};

export const fetchData = async (url) => {
  const { data } = await axios.get(BASE_URL, {
    params: { ...params, ...url },
  });
  return await data;
};
