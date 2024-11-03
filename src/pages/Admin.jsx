import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Admin() {
    const [winners, setWinners] = useState([]);

    useEffect(() => {
        const fetchWinners = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/winners');
                setWinners(response.data);
            } catch (error) {
                console.error('Error al obtener la lista de ganadores', error);
            }
        };

        fetchWinners();
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black">
            <div className="relative z-10 w-full max-w-6xl p-10 bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl shadow-lg">
                <h2 className="text-4xl font-extrabold mb-10 text-center text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-500">
                    Panel de Administración
                </h2>
                <p className="text-center text-white mb-6">Gestiona todos los códigos ingresados</p>
                <div className="mb-6 flex flex-wrap gap-4">
                    <input type="text" placeholder="Filtrar por nombre" className="flex-1 p-2 rounded" />
                    <input type="text" placeholder="Filtrar por cédula" className="flex-1 p-2 rounded" />
                    <input type="text" placeholder="Filtrar por código" className="flex-1 p-2 rounded" />
                    <select className="flex-1 p-2 rounded">
                        <option>Filtrar por premio</option>
                    </select>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                        Refrescar
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Fecha</th>
                                <th className="py-3 px-6 text-left">Nombre</th>
                                <th className="py-3 px-6 text-left">Cédula</th>
                                <th className="py-3 px-6 text-left">Teléfono</th>
                                <th className="py-3 px-6 text-left">Código</th>
                                <th className="py-3 px-6 text-left">Premio</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm font-light">
                            {winners.map((winner) => (
                                <tr key={winner._id} className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left whitespace-nowrap">
                                        {new Date(winner.date).toLocaleDateString()}
                                    </td>
                                    <td className="py-3 px-6 text-left">{winner.name}</td>
                                    <td className="py-3 px-6 text-left">{winner.cedula}</td>
                                    <td className="py-3 px-6 text-left">{winner.phone}</td>
                                    <td className="py-3 px-6 text-left">{winner.code}</td>
                                    <td className="py-3 px-6 text-left">{winner.prize}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-4 flex justify-between items-center">
                    <span className="text-white">Página 1 de 1</span>
                    <div>
                        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2 hover:bg-gray-400 transition-colors">
                            Anterior
                        </button>
                        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition-colors">
                            Siguiente
                        </button>
                    </div>
                </div>
            </div>

            {/* Fondos animados */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-yellow-400 to-yellow-700 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500 to-purple-800 rounded-full blur-3xl opacity-40"></div>
        </div>
    );
}