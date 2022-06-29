import axios from "axios";

const {BACKEND_URL} = process.env

const axiosClient = axios.create({
    baseURL: BACKEND_URL,
    timeout: 1000,
})

export default {
    axiosClient
}