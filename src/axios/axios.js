import axios from 'axios';

// TODO This belongs in config file.
const BASE_URL = 'http://localhost:8000/api/v1/';

export const api = axios.create({
    baseURL: BASE_URL,
})
