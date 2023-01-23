import axios from 'axios';

//FIXME узнать api
export const baseURL = '';

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL
});

axiosInstance.interceptors.response.use(
    async (response) => {
        return await response.data;
    }
);

axiosInstance.interceptors.request.use(
    async (config) => {
        const accessToken = localStorage.token || '';
        config.headers.Authorization = `Bearer ${ accessToken }`; // eslint-disable-line no-param-reassign
        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosInstance;