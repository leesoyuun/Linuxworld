import axios from "axios";


const Instance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/v1/"
})

export const getProfile = () => Instance.get("profile/1/").then(response => response.data);