import React from 'react';
import { motion } from 'framer-motion';
import { PiggyBank, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SavingsPreview: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800 mb-4">
              <PiggyBank className="h-4 w-4 mr-2" />
              Fundamentos del Ahorro
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Construye tu Red de Seguridad Financiera</h2>
            <p className="text-lg text-gray-600 mb-4">
              El fundamento de cualquier plan financiero sólido es tener dinero reservado para gastos inesperados. Aprender a ahorrar efectivamente lo cambia todo.
            </p>
            <div className="bg-gray-100 p-6 rounded-lg mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Conceptos Básicos del Fondo de Emergencia</h3>
              <p className="text-gray-700">
                Un fondo de emergencia es tu red de seguridad financiera que te ayuda a manejar costos inesperados sin endeudarte. Apunta a ahorrar 3-6 meses de gastos en una cuenta de fácil acceso.
              </p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mt-0.5">✓</div>
                <p className="ml-3 text-gray-600">Comienza con contribuciones pequeñas y consistentes</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mt-0.5">✓</div>
                <p className="ml-3 text-gray-600">Automatiza tus ahorros para eliminar la tentación</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mt-0.5">✓</div>
                <p className="ml-3 text-gray-600">Mantén los fondos de emergencia separados de las cuentas de gastos</p>
              </li>
            </ul>
            <Link 
              to="/savings" 
              className="inline-flex items-center font-medium text-emerald-600 hover:text-emerald-700"
            >
              Aprende más sobre estrategias de ahorro
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
          
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <img 
              src="https://images.pexels.com/photos/4386158/pexels-photo-4386158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Persona ahorrando dinero" 
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SavingsPreview;