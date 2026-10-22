import axios from "axios";

// This creates a default axios instance with a set url,header and timeout to be used
const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_EXPRESS_MONOLITH_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
  // This will allow us to send httpOnly credential cookies to the backend service
  withCredentials: true,
  retry: false,
});

export default apiClient;
