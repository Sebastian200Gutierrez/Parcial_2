import { useNavigate } from 'react-router-dom';
import fondo from '../assets/ImagenFondo.png';


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-500 via-red-600 to-green-500 p-4 flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row gap-8">
        {/* Imagen a la izquierda */}
        <div className="w-full lg:w-1/2 relative overflow-hidden rounded-3xl shadow-2xl">
          <img
            src={fondo}
            alt="Gana Como Loco Promoción"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 lg:p-8">
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-2 lg:mb-4">Gana Como Loco</h2>
            <p className="text-lg lg:text-xl text-white mb-4 lg:mb-6">¡La oportunidad de tu vida está aquí!</p>
            <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4">
              <button
                onClick={() => navigate('/login')}
                className="bg-yellow-400 text-black font-bold py-2 px-4 lg:px-6 rounded-full hover:bg-yellow-500 transition duration-300"
              >
                Ingresar
              </button>
              <button
                onClick={() => navigate('/register')}
                className="bg-red-500 text-white font-bold py-2 px-4 lg:px-6 rounded-full hover:bg-red-600 transition duration-300"
              >
                ¡Regístrate!
              </button>
            </div>
          </div>
        </div>

        {/* Tarjeta a la derecha */}
        <div className="w-full lg:w-1/2 bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="p-4 lg:p-8">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-center mb-4 lg:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-red-500">
              ¡Inserta tu código y gana al instante!
            </h1>
            <p className="text-base lg:text-xl text-center mb-6 lg:mb-8 text-gray-700">
              Primero sigue estos pasos simples y podrías ganar premios increíbles:
            </p>
            <ul className="space-y-2 lg:space-y-4 mb-6 lg:mb-8">
              <li className="flex items-center">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center mr-2 lg:mr-3">1</span>
                <span className="text-sm lg:text-lg">Inicia sesion si ya tienes cuenta</span>
              </li>
              <li className="flex items-center">
                <span className="bg-red-500 text-white rounded-full w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center mr-2 lg:mr-3">2</span>
                <span className="text-sm lg:text-lg">Si no, registrate para poder cajear tu codigo y ver si eres ganador@</span>
              </li>
              <li className="flex items-center">
                <span className="bg-yellow-500 text-white rounded-full w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center mr-2 lg:mr-3">3</span>
                <span className="text-sm lg:text-lg">Presiona "Canjear" y cruza los dedos</span>
              </li>
              <li className="flex items-center">
                <span className="bg-green-500 text-white rounded-full w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center mr-2 lg:mr-3">4</span>
                <span className="text-sm lg:text-lg">¡Descubre tu premio al instante!</span>
              </li>
            </ul>
            <div className="text-center">
              <button
                onClick={() => navigate('/code')}
                className="bg-gradient-to-r from-yellow-500 to-red-500 text-white font-bold py-2 px-6 lg:py-3 lg:px-8 rounded-full text-base lg:text-lg hover:from-yellow-600 hover:to-red-600 transition duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg"
              >
                ¡Comenzar Ahora!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
