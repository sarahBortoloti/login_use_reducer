import axios from "axios";
export const http = axios.create({
  baseURL: "https://hookedbe.herokuapp.com/api/login",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
