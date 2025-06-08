import axios from "axios";

const api = axios.create({
  baseURL: "/api", // Set to your backend API base URL
});

export default api;