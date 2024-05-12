import axios from "axios";
const BASE_URL = 'https://jsonplaceholder.typicode.com';

const instance = axios.create({
    baseURL: BASE_URL
});

export async function getUsers() {
    const response = await instance.get('users');
    return response.data;
}