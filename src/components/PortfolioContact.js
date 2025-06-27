import React from 'react';
 
const PortfolioContact = () => {
  return (
    <div className="p-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl border border-gray-700 transform translate-y-4 opacity-0 animate-fade-in-up group">
      <h2 className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500 animate-text-glow">
        &lt;Contacto /&gt;
      </h2>
      <p className="text-xl leading-relaxed mb-8 text-gray-200">
        ¿Listo para subir de nivel tu proyecto? ¡Envíame un mensaje y hagamos magia digital!
      </p>
      <form className="space-y-6">
        <input
          type="text"
          placeholder="Tu Nombre de Jugador"
          className="w-full px-6 py-4 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 text-lg
                     focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-75 transition-all duration-300
                     transform hover:scale-105"
        />
        <input
          type="email"
          placeholder="Tu Correo de Misión"
          className="w-full px-6 py-4 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 text-lg
                     focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-75 transition-all duration-300
                     transform hover:scale-105"
        />
        <textarea
          placeholder="Tu Mensaje Secreto"
          rows="6"
          className="w-full px-6 py-4 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-400 text-lg
                     focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-75 transition-all duration-300 resize-none
                     transform hover:scale-105"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-4 rounded-xl text-2xl font-bold
                     hover:from-blue-700 hover:to-green-700 transition-all duration-300 shadow-lg
                     transform hover:scale-105 animate-pulse-button"
        >
          Enviar Mensaje &gt;&gt;
        </button>
      </form>
    </div>
  );
};
 
export default PortfolioContact;