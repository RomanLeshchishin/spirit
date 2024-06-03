import axios from "axios";

const BASE_URL = 'https://bba34l2b0gum3icighb8.containers.yandexcloud.net'
export const authApi = axios.create({
    baseURL: BASE_URL
})
