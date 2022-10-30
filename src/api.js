import axios from "axios";


const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/v1/"
})

export const getProfile = () => instance.get("profile/1/").then(response => response.data);