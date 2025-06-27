import React from 'react';
 
const PortfolioAbout = () => {
  return (
    <div className="p-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl border border-gray-700 transform translate-y-4 opacity-0 animate-fade-in-up group">
      <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-text-glow">
        &lt;Sobre Mí /&gt;
      </h2>
      <p className="text-xl leading-relaxed mb-6 text-gray-200 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-green-400 pr-1 group-hover:animate-none group-hover:text-white transition-colors duration-300">
        ¡Saludos, jugador! Soy un programador de experiencias digitales, un mago del código.
      </p>
      <p className="text-xl leading-relaxed text-gray-300 animate-fade-in delay-500 group-hover:text-white transition-colors duration-300">
        Mi misión es construir interfaces que no solo sean funcionales, sino que también cuenten una historia y dejen una impresión duradera. Cada línea de código es un pixel en mi obra maestra.
      </p>
      <div className="mt-8 flex justify-center space-x-6">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
            <span className="flex items-center space-x-5">
              <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
              <span className="pr-6 text-gray-100 text-lg font-bold">Mi Código</span>
            </span>
            <span className="pl-6 text-purple-400 group-hover:text-gray-100 transition duration-200 text-lg font-bold">Ver en GitHub</span>
          </button>
        </div>
      </div>
    </div>
  );
};
 
export default PortfolioAbout;