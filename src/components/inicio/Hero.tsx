import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-blue-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Tu Camino Hacia la 
              <span className="text-emerald-600"> Libertad Financiera</span> 
              <span className="block mt-2">Empieza Aquí</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-2xl">
              Toma el control de tu futuro financiero con guía práctica sobre ahorro, 
              inversión y planificación. Hacemos la gestión del dinero simple, alcanzable 
              y hasta divertida para jóvenes adultos.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link 
                to="/savings" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 transition duration-300"
              >
                Empieza a Aprender
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/community"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition duration-300"
              >
                Únete a la Comunidad
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Joven adulto planificando sus finanzas" 
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block">
        <div className="w-96 h-96 rounded-full bg-emerald-200 opacity-20 blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 hidden lg:block">
        <div className="w-64 h-64 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
      </div>
    </div>
  );
};

export default Hero;