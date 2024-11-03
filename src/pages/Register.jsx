import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/api';

const Register = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        fechaNacimiento: '',
        cedula: '',
        email: '',
        celular: '',
        ciudad: '',
        password: '',
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await API.post('/auth/register', formData);
            alert(response.data.message); // Muestra el mensaje de respuesta
            navigate('/'); // Redirigir tras registro exitoso
        } catch (error) {
            console.error(error);
            setError('Error al registrarse. Intenta nuevamente.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url('https://files.oaiusercontent.com/file-6YzLu1qjLZwOVcFTTS35vj2V?se=2024-10-31T20%3A10%3A57Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D0a8b4a21-4e8b-4d47-a04b-a6c079a29ae0.webp&sig=JNDVCin0FxzbTQDHZ5xoIpTeCCC9Y%2B5M6xSKF%2Bm9grA%3D')` }}>
            <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-2xl w-full max-w-lg">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Crear Cuenta</h2>
                {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
                <form onSubmit={handleSubmit}>
                    {/* Nombre */}
                    <div className="mb-4">
                        <input
                            type="text"
                            name="nombre"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                            placeholder="Nombre completo"
                            value={formData.nombre}
                            onChange={handleChange}
                        />
                    </div>
                    {/* Fecha de nacimiento */}
                    <div className="mb-4">
                        <input
                            type="date"
                            name="fechaNacimiento"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                            placeholder="Fecha de nacimiento"
                            value={formData.fechaNacimiento}
                            onChange={handleChange}
                        />
                    </div>
                    {/* Cédula */}
                    <div className="mb-4">
                        <input
                            type="text"
                            name="cedula"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                            placeholder="Cédula"
                            value={formData.cedula}
                            onChange={handleChange}
                        />
                    </div>
                    {/* Email */}
                    <div className="mb-4">
                        <input
                            type="email"
                            name="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                            placeholder="Correo electrónico"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    {/* Celular */}
                    <div className="mb-4">
                        <input
                            type="tel"
                            name="celular"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                            placeholder="Celular"
                            value={formData.celular}
                            onChange={handleChange}
                        />
                    </div>
                    {/* Ciudad */}
                    <div className="mb-4">
                        <input
                            type="text"
                            name="ciudad"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                            placeholder="Ciudad"
                            value={formData.ciudad}
                            onChange={handleChange}
                        />
                    </div>
                    {/* Contraseña */}
                    <div className="mb-6">
                        <input
                            type="password"
                            name="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
                            placeholder="Contraseña"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>
                    {/* Botón de registro */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-yellow-500 to-red-500 text-white font-bold py-3 rounded-lg hover:from-yellow-600 hover:to-red-600 transition-all duration-300"
                    >
                        Registrarse
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
