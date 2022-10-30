export async function getProfile(){
    const response = await fetch("http://127.0.0.1:8000/api/v1/profile/1/");
    const json = await response.json();
    return json;
};