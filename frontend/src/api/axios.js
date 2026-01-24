import axios from 'axios';

// Get the API URL from environment variables
// For production: https://qr-code-backend-hiqg.onrender.com
// For development: http://localhost:5000 (via Vite proxy)
const API_URL = import.meta.env.VITE_API_URL || '';

// Create axios instance with base URL
const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 30000, // 30 seconds timeout for QR generation
});

// Add response interceptor for error handling
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.code === 'ECONNABORTED') {
            console.error('Request timeout - QR generation took too long');
        } else if (error.response) {
            console.error('API Error:', error.response.data);
        } else if (error.request) {
            console.error('Network Error - No response received');
        } else {
            console.error('Error:', error.message);
        }
        return Promise.reject(error);
    }
);

export default api;
