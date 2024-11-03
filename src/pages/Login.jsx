import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/api';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await API.post('/auth/login', { email, password });
            console.log(response.data); // Aquí puedes manejar los datos de respuesta, como un token

            if (response.status === 200) {
                navigate('/dashboard'); // Redirige al dashboard si el login es exitoso
            }
        } catch (error) {
            console.error('Error en el login:', error);
            setError('Error al iniciar sesión. Verifica tus credenciales.');
        }
    };

    return (
        <div 
            className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('https://www.shutterstock.com/image-vector/winner-slots-machine-casino-jackpot-600nw-2461871613.jpg')",
                backgroundSize: 'cover', // Asegura que la imagen cubra toda la pantalla sin distorsionarse
                backgroundPosition: 'center', // Centra la imagen de fondo
            }}
        >
            <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-2xl w-full max-w-lg">
                <h2 className="text-3xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
                    Iniciar Sesión
                </h2>
                {error && <p className="text-red-500 mb-4 text-center">{error}</p>} {/* Mensaje de error */}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-yellow-500"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-red-500"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-yellow-400 to-red-500 text-white font-bold py-3 px-6 rounded-full text-lg hover:from-yellow-500 hover:to-red-600 transition duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg"
                    >
                        Iniciar Sesión
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
