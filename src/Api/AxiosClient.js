import axios from "axios";


export default function (options = {}) {

    const {headers} = options
    return axios.create({
        baseURL: `http://127.0.0.1:8000/api/`,
        headers: {
            ...headers
        }
    })
}
