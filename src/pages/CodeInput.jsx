import { useState } from 'react';
import axios from 'axios';

const CodeInput = () => {
    const [code, setCode] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/verifyCode', { code });
            setMessage(response.data.message);
            setSuccess(response.data.success); // Asumimos que la API devuelve un campo "success"
        } catch (error) {
            setMessage('Error al verificar el código. Intenta nuevamente.');
            setSuccess(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-black to-gray-900">
            {/* Fondo interactivo */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-purple-900 via-black to-gray-900 opacity-70"></div>
                <div className="absolute top-0 left-0 right-0 bottom-0 z-10 pointer-events-none bg-[url('https://files.oaiusercontent.com/file-6YzLu1qjLZwOVcFTTS35vj2V?se=2024-10-31T20%3A10%3A57Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D0a8b4a21-4e8b-4d47-a04b-a6c079a29ae0.webp&sig=JNDVCin0FxzbTQDHZ5xoIpTeCCC9Y%2B5M6xSKF%2Bm9grA%3D')] opacity-30"></div>
                <div className="absolute w-full h-full bg-particle-pattern opacity-50 z-0"></div>
            </div>

            <div className="relative z-10 p-10 bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-3xl shadow-2xl w-full max-w-md transition transform hover:scale-105 hover:shadow-[0px_0px_20px_10px_rgba(255,255,255,0.1)]">
                <h2 className="text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600 font-extrabold mb-6">
                    Canjea tu Código Exclusivo
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="relative mb-6">
                        <input
                            type="text"
                            className="w-full px-6 py-4 text-lg bg-gray-700 bg-opacity-40 rounded-full text-white border-none focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300 placeholder-white placeholder-opacity-70"
                            placeholder="Ingresa tu código"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                        Verificar Código
                    </button>
                </form>

                {/* Mensaje dinámico */}
                {message && (
                    <p className={`mt-6 text-lg font-semibold text-center ${success ? 'text-green-400' : 'text-red-400'}`}>
                        {message}
                    </p>
                )}
            </div>

            {/* Efectos visuales de animación */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-yellow-500 to-yellow-800 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-full filter blur-3xl opacity-50 animate-pulse delay-200"></div>
        </div>
    );
};

export default CodeInput;
