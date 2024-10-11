import axios from 'axios'

 const baseURL = 'http://localhost:3000'
const api = axios.create({
    url: baseURL,
   /*  headers: {
        'Content-Type': 'application/json',
    }, */
    timeout: 10000,
    withCredentials: true,
    crossdomain: true,
});

export const getAllUsers = (id) => api.get(`/api/user/${id}`)