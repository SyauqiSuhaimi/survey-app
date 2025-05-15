// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:44381/', // Replace with your backend IP or ENV var
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
