import { useState } from 'react';
import { useNavigate } from 'react-router';

import { PokemonList } from '../components/Pokemon/PokemonList';
import { usePokemonList } from '../services/pockemonapi';
import { Paging } from '../components/Paging/Paging';

export const About = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-700 to-blue-500 p-6">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg text-center">
                <img
                    src={`${import.meta.env.BASE_URL}imagenes/yo.jpg`}
                    alt="Imagen de Perfil"
                    className="w-40 h-40 rounded-full mx-auto shadow-md border-4 border-blue-200 mb-6 object-cover"
                />
                <h1 className="text-3xl font-extrabold text-gray-800 mb-2">Josselin Johana Pineda Romero</h1>
                <p className="text-gray-600 text-lg mb-4 font-medium">
                    Desarrolladora Web
                </p>
                <div className="text-gray-700 mb-6 space-y-1 text-sm">
                    <p>📧 josselinpineda75@gmail.com</p>
                    <p>📞 +504 3224-3610</p>
                </div>
                <a
                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 text-sm font-semibold mb-4"
                    href="https://github.com/josselinPineda"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visitar GitHub
                </a>
                <p className="text-xs text-gray-400">Desarrollo de Portales Web II - 2025</p>
            </div>
        </div>
    );
};
