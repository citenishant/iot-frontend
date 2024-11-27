import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

export const fetchDevices = () => API.get('/devices');
export const registerDevice = (name) => API.post('/devices', { name });
export const controlDevice = (id, command) =>
    API.post(`/devices/${id}/control`, { command });