import axios from "axios";

// Ensure environment variable exists

// const token = import.meta.env.REACT_APP_ACCESS_TOKEN;
const token = import.meta.env.VITE_ACCESS_TOKEN;

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3", // ✅ Corrected key (baseURL)
  headers: {
    Authorization: token ? `Bearer ${token}` : "", // ✅ Safer way to handle missing token
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
