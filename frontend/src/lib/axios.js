import axios from 'axios'
const isLocal = window.location.hostname === 'localhost';
console.log(isLocal)
const axiosInstance = axios.create({
  baseURL: isLocal
    ? 'http://localhost:5001'
    : import.meta.env.VITE_API_URL,
  withCredentials: true,
});
export default axiosInstance
