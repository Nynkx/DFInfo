import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
  //   baseURL: "https://api.dfoneople.com/df",
  //   withCredentials: false,
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  //   },
});

api.interceptors.request.use((config) => {
  //   config.headers = {
  //     ...config.headers,

  //   };
  //   config.url = `${config.url}?apikey=${import.meta.env.VITE_API_KEY}`;
  //   config.params = { ...config.params, apikey: import.meta.env.API_KEY };
  return config;
});

api.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default api;
