import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // backend URL
});

export const loginUser = (credentials) => API.post('/auth/login', credentials);
export const getAllUsers = () => API.get('/users');
export const getUserProfile = (id) => API.get(`/users/${id}`);
export const updateUserProfile = (id, updatedData) => API.put(`/users/${id}`, updatedData);

export default API;