import axios from "axios";

const api = axios.create({
    baseURL:'https://api-bora-viajar.vercel.app'
})

export default api


