// frontend/my-project/src/api/api.js
import axios from 'axios';

// Configuración de axios para apuntar al backend
const API = axios.create({
  baseURL: 'http://localhost:5000/api', // URL del backend
});

// Interceptor para incluir el token de autenticación si existe
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
