import React from 'react';

// Importa las imágenes
import JewelersImg from '../image/Jewelers.png';
import TierMakerImg from '../image/Tier-maker.png';
import WikipediaImg from '../image/Wikipedia-vegetta777.png';
import ArkanoidImg from '../image/Arkanoid-game.png';

const PortfolioProjects = () => {
  const projects = [
    { 
      name: 'Jewelers', 
      description: 'Tienda online de relojes de lujo con diseño elegante y navegación intuitiva.',
      link: 'https://kleiver01.github.io/11-watches/',
      device: 'PC/Móvil',
      image: JewelersImg
    },
    { 
      name: 'Tier Maker', 
      description: 'App web para crear y compartir rankings visuales tipo tier-maker.', 
      link: 'https://kleiver01.github.io/10-tier-maker/',
      device: 'PC/Móvil',
      image: TierMakerImg
    },
    { 
      name: 'wikipedia-vegeta777', 
      description: 'Plataforma colaborativa inspirada en Wikipedia para crear y editar artículos.',
      link: 'https://kleiver01.github.io/Wikipedia-Vegetta777/',
      device: 'PC/Móvil',
      image: WikipediaImg
    },
    { 
      name: 'Arkanoid-game', 
      description: 'Juego web retro inspirado en el clásico Arkanoid.',
      link: 'https://kleiver01.github.io/08-arkanoid-game/',
      device: 'PC',
      image: ArkanoidImg
    },
  ];

  return (
    <div className="p-10 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl border border-gray-700 transform translate-y-4 opacity-0 animate-fade-in-up group">
      <h2 className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 animate-text-glow">
        &lt;Proyectos /&gt;
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-gray-700 p-8 rounded-xl shadow-lg border border-gray-600 overflow-hidden
                       transform hover:scale-105 transition-all duration-500 group
                       before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-purple-500 before:to-pink-500 before:opacity-0 before:transition-opacity before:duration-500
                       hover:before:opacity-20"
          >
            {/* Mini letrero de dispositivo */}
            <div className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-bold shadow-md
              ${project.device === 'PC' 
                ? 'bg-yellow-500 text-white' 
                : 'bg-green-500 text-white'}`}>
              {project.device}
            </div>
            {/* Imagen del proyecto */}
            <div className="mb-4 w-full h-40 bg-gray-600 rounded-lg flex items-center justify-center overflow-hidden">
              {project.image 
                ? <img src={project.image} alt={project.name} className="object-cover w-full h-full" />
                : <span className="text-gray-300 text-sm">Imagen del proyecto</span>
              }
            </div>
            <h3 className="text-3xl font-bold mb-3 text-white relative z-10">{project.name}</h3>
            <p className="text-lg text-gray-300 relative z-10">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-full font-semibold text-lg
                         transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                         transition-all duration-500 delay-200 relative z-10
                         hover:bg-purple-700 shadow-md inline-block text-center"
            >
              Ver Proyecto
            </a>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-purple-500 rounded-full opacity-20 transform translate-x-1/2 translate-y-1/2 group-hover:scale-150 transition-transform duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default PortfolioProjects;