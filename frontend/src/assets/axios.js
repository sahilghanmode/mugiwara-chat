import axios from "axios";

export const axiosInstance  = axios.create({
    baseURL : `${import.meta.env.VITE_SERVER_URL}/api`
})

axiosInstance.interceptors.request.use(
    (config)=>{
        config.withCredentials = true;
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)