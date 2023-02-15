import axios from 'axios';

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_BACK_URL
});

axiosInstance.interceptors.response.use(
    async (response) => {
        return await response.data;
    }
);

axiosInstance.interceptors.request.use(
    async (config) => {
        if (!(config.url === '/sign-up' || config.url === '/sign-in')) {
            const accessToken = localStorage.token || '';
            config.headers.Authorization = `Bearer ${ accessToken }`;
        }
        return config;
    }
);

export default axiosInstance;
