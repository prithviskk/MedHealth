import axios from 'axios';

const isLocal = window.location.hostname === 'localhost';

const axiosInstance = axios.create({
  baseURL: isLocal
    ? 'http://localhost:5001/api'                 // local backend
    : import.meta.env.VITE_API_URL,              // deployed backend (from .env)
  withCredentials: true,
});

export default axiosInstance;
