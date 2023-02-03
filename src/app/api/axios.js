import axios from 'axios';

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8080/api/'
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
    },
    (error) => Promise.reject(error)
);

export default axiosInstance;
