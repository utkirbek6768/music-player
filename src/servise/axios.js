import axios from "axios";

const Api = axios.create({
  baseURL: "https://spotify23.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "dfec55f2eamsh9e958a02fea1f59p165595jsnd65e64867c33",
    "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
  },
});
Api.interceptors.request.use((config) => {
  const token =
    "BQDBKJ5eo5jxbtpWjVOj7ryS84khybFpP_lTqzV7uV-T_m0cTfwvdn5BnBSKPxKgEb11";
  const authorization = token ? `Bearer ${token}` : "";
  config.headers.Authorization = authorization;
  return config;
});

export default Api;
