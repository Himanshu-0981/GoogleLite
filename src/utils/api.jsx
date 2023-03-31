import axios from "axios";

const URL = "https://g-search.p.rapidapi.co";

const options = {
  headers: {
    "X-RapidAPI-Key": "665274a7dfmsh1109dbea5759a8ep11be6cjsn0f409d12ad71",
    "X-RapidAPI-Host": "g-search.p.rapidapi.com",
  },
};

export const fetchData = async (query) => {
  const { data } = await axios.get(`${URL}/search?q=${query}`, options);
  return await data;
};
