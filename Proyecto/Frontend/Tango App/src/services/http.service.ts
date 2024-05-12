import axios from "axios";

export const httpService = axios.create({
    baseURL:"http://172.20.10.2:3000",
    responseType: "json",
    withCredentials:false
});


