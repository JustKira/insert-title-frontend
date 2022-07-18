import axios from "axios";


const BASE_URL = "http://127.0.0.1:8000/api/";
const pat=((localStorage.getItem("persist:root")).user);
let TOKEN=null
if (pat){
  
   TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
}

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
