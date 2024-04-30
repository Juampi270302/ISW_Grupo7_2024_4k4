import axios from "axios";

export const httpService = axios.create({
    baseURL:"http://192.168.100.21:3000",
    responseType: "json",
    withCredentials:false
});


