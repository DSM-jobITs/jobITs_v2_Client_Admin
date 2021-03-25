import axios from "axios";

export const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getClientAccessToken = () =>
  axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });

export default client;
