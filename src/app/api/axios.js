import axios from 'axios';

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: process.env.BACK_URL
});

axiosInstance.interceptors.response.use(
    async (response) => {
        return await response.data;
    }
);

axiosInstance.interceptors.request.use(
    async (config) => {
        const accessToken = localStorage.token || '';
        config.headers.Authorization = `Bearer ${ accessToken }`;
        return config;
    }
);

export default axiosInstance;
