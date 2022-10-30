import axios from "axios";


export async function getProfile(){
    const response = await axios.get("http://127.0.0.1:8000/api/v1/profile/1/");
    return response.data;
};