import axios from "axios";

// Get base URL from environment or use fallback
const getBaseURL = () => {
  // Try different environment variable names
  const baseURL = 
    import.meta.env.VITE_API_BASE_URL_DEVELOPMENT ||
    import.meta.env.VITE_API_BASE_URL ||
    "http://localhost:80/25th_decClinic_Website_Backend_PHP-"; // Fallback to common PHP backend URL
  
  return baseURL;
};

const api = axios.create({
  baseURL: getBaseURL(),
  withCredentials: true, // keep true if backend uses cookies
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
