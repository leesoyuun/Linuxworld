import axios from "axios";


const Instance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/v1/"
})

export async function getProfile(){
    const response = await Instance.get("profile/1/");
    return response.data;
};