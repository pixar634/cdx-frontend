import axios from 'axios';
import axiosRetry from 'axios-retry';
const BASE_URL = 'http://localhost:5000/';

const api = axios.create({
    baseURL: BASE_URL,
    timeout: 30000
});



axiosRetry(api, {
    retries: 2,
    retryDelay: (retryCount) => retryCount * 2000,
    retryCondition: (error) => {
        return error.response?.status === 500;
    }
});

// Request interceptor
api.interceptors.request.use(
    (config) => {
        // Add Authorization Header for when we need jwt tokens
        // const token = localStorage.getItem('jwtToken');
        // config.headers.Authorization = `Bearer ${token}`;

        return config;
    },
    (error) => {
        throw error;
    }
);

// Response interceptor
api.interceptors.response.use(
    // this is where you refresh the token in case it has expired during api call.
    (response) => response,
    async (error) => {
        // Check if token has expired
        // if (error.response?.status === 401 &&
        //     error.response.data.message === 'JSON token expired') {
        //     // Refresh token
        //     try {
        //         await refreshToken();
        //     } catch (error) {
        //         localStorage.clear();
        //     }
        //     const token = localStorage.getItem('jwtToken');
        //     error.config.headers.Authorization = `Bearer ${token}`;
        //     return axios.request(error.config);
        // }
        throw error;
    }
);
export default api;