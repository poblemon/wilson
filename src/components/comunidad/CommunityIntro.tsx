import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, BookOpen, Calendar } from 'lucide-react';

const CommunityIntro: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
              <Users className="h-4 w-4 mr-2" />
              Únete a nuestra comunidad
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Aprende, comparte y crece con nosotros</h2>
            <p className="text-lg text-gray-600 mb-8">
              Conecta con personas con mentalidad similar en el camino hacia la libertad financiera. Nuestra comunidad es un espacio seguro para hacer preguntas, compartir experiencias y aprender de los viajes financieros de los demás.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-blue-100 rounded-md text-blue-600 mr-3">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Foros de apoyo</h3>
                </div>
                <p className="text-gray-600">
                  Discute temas que van desde la planificación presupuestaria para principiantes hasta estrategias de inversión avanzadas en nuestros foros moderados.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-blue-100 rounded-md text-blue-600 mr-3">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Contenido exclusivo</h3>
                </div>
                <p className="text-gray-600">
                  Accede a recursos, cuadernos de trabajo y guías exclusivas para miembros para ayudarte a alcanzar tus objetivos financieros más rápido.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-blue-100 rounded-md text-blue-600 mr-3">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Eventos virtuales</h3>
                </div>
                <p className="text-gray-600">
                  Únete a webinars mensuales, sesiones de preguntas y respuestas con expertos financieros y talleres educativos.
                </p>
              </div>
              
              <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-3">
                  <div className="p-2 bg-blue-100 rounded-md text-blue-600 mr-3">
                    <Users className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-gray-900">Responsabilidad</h3>
                </div>
                <p className="text-gray-600">
                  Asóciate con otros en viajes similares para mantener la motivación y seguir el progreso hacia tus objetivos.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#newsletter" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-300"
              >
                Únete gratis
              </a>
              <a 
                href="#testimonials" 
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition duration-300"
              >
                Ver testimonios
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Miembros de la comunidad discutiendo estrategias financieras" 
                className="rounded-xl shadow-lg w-full h-auto z-10 relative"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-blue-600 to-indigo-600 h-full w-full rounded-xl -z-10"></div>
              
              <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-md">
                <div className="flex items-center">
                  <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
                  <p className="text-sm font-medium text-gray-700">3,528 miembros en línea</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunityIntro;