import Cookies from "js-cookie";
import axios from "axios";


const instance = axios.create({
    baseURL: "http://127.0.0.1:8000/api/v1/",
    withCredentials: true
})

export const getProfile = () => instance.get("profile/1/").then(response => response.data);
export const getMe = () => instance.get("me/").then(response => response.data);
export const logOut = () => instance.post("logout/", null, {
    headers: {
        "X-CSRFToken": Cookies.get("csrftoken")
    }
}).then(response => response.data)