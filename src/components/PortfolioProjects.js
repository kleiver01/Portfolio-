import React from 'react';
 
const PortfolioProjects = () => {
  const projects = [
    { name: 'E-commerce Galáctico', description: 'Una tienda en línea con animaciones de otro mundo y una experiencia de compra estelar.' },
    { name: 'Dashboard Cuántico', description: 'Panel de control interactivo con visualizaciones de datos en 3D y reportes instantáneos.' },
    { name: 'App de Tareas Futurista', description: 'Un gestor de tareas con inteligencia artificial y recordatorios holográficos.' },
    { name: 'Blog Interactivo', description: 'Plataforma de blog con efectos parallax y carga progresiva de contenido.' },
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
            <h3 className="text-3xl font-bold mb-3 text-white relative z-10">{project.name}</h3>
            <p className="text-lg text-gray-300 relative z-10">{project.description}</p>
            <button className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-full font-semibold text-lg
                               transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                               transition-all duration-500 delay-200 relative z-10
                               hover:bg-purple-700 shadow-md">
              Ver Proyecto
            </button>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-purple-500 rounded-full opacity-20 transform translate-x-1/2 translate-y-1/2 group-hover:scale-150 transition-transform duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default PortfolioProjects;