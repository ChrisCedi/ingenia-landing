import axios from "axios";

export const instance = axios.create({
  baseURL: "http://ingenia.com/snippets/test",
  timeout: 30000,
  headers: { "Content-Type": "multipart/form-data" },
  withCredentials: false,
});

instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);
