import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CalendarClock, PiggyBank, TrendingUp, FileBarChart } from 'lucide-react';

const RetirementChecklist: React.FC = () => {
  const checklistItems = [
    {
      id: 1,
      title: "Calcula tu número de jubilación",
      icon: <Calculator className="h-6 w-6" />,
      description: "Determina cuánto dinero necesitarás para jubilarte cómodamente según tu estilo de vida deseado.",
      tasks: [
        { text: "Estima tus gastos anuales en la jubilación (típicamente 70-80% del ingreso antes de la jubilación)", done: false },
        { text: "Ten en cuenta la inflación (usa 3% como regla general)", done: false },
        { text: "Multiplica por el número de años en la jubilación (25-30 años es típico)", done: false },
        { text: "Usa la regla del 4% como punto de partida (multiplica los gastos anuales por 25)", done: false }
      ]
    },
    {
      id: 2,
      title: "Configura cuentas de jubilación",
      icon: <FileBarChart className="h-6 w-6" />,
      description: "Establece cuentas con ventajas fiscales para maximizar tus ahorros para la jubilación.",
      tasks: [
        { text: "Inscríbete en el programa 401(k) de tu empleador si está disponible", done: false },
        { text: "Abre una Cuenta de Jubilación Individual (IRA)", done: false },
        { text: "Considera una IRA Roth para crecimiento libre de impuestos", done: false },
        { text: "Configura contribuciones automáticas a cuentas de jubilación", done: false }
      ]
    },
    {
      id: 3,
      title: "Optimiza tus contribuciones",
      icon: <TrendingUp className="h-6 w-6" />,
      description: "Maximiza tus ahorros para la jubilación para aprovechar el interés compuesto.",
      tasks: [
        { text: "Contribuye al menos lo suficiente para obtener la coincidencia completa de tu empleador", done: false },
        { text: "Apunta a ahorrar el 15% de tu ingreso para la jubilación", done: false },
        { text: "Aumenta las contribuciones en un 1% anualmente o con cada aumento", done: false },
        { text: "Considera contribuciones de catch-up si estás empezando tarde", done: false }
      ]
    },
    {
      id: 4,
      title: "Desarrolla una estrategia de inversión",
      icon: <PiggyBank className="h-6 w-6" />,
      description: "Crea un portafolio de inversión diversificado alineado con tu cronograma de jubilación.",
      tasks: [
        { text: "Determina tu tolerancia al riesgo y horizonte de tiempo", done: false },
        { text: "Crea una estrategia de asignación de activos (acciones, bonos, alternativas)", done: false },
        { text: "Considera fondos de fecha objetivo para reequilibrio automático", done: false },
        { text: "Revisa y ajusta tu estrategia anualmente", done: false }
      ]
    },
    {
      id: 5,
      title: "Planifica los costos de atención médica",
      icon: <Heart className="h-6 w-6" />,
      description: "Ten en cuenta los gastos médicos, que pueden ser significativos en la jubilación.",
      tasks: [
        { text: "Entiende la cobertura y limitaciones de Medicare", done: false },
        { text: "Investiga opciones de seguros suplementarios", done: false },
        { text: "Considera una Cuenta de Ahorro para la Salud (HSA) si eres elegible", done: false },
        { text: "Presupuesta gastos de atención médica fuera de bolsillo", done: false }
      ]
    },
    {
      id: 6,
      title: "Crea un cronograma y metas",
      icon: <CalendarClock className="h-6 w-6" />,
      description: "Establece un mapa de ruta con objetivos específicos para mantener tu plan de jubilación en marcha.",
      tasks: [
        { text: "Crea metas de ahorro de 5, 10 y 20 años", done: false },
        { text: "Planifica la eliminación de deudas antes de la jubilación", done: false },
        { text: "Considera eventos importantes en tu cronograma", done: false },
        { text: "Establece una fecha objetivo de jubilación", done: false }
      ]
    }
  ];
  
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-2 bg-amber-100 rounded-full text-amber-600 mb-4">
            <Clock className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Lista de verificación para la planificación de la jubilación</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Empezar a planificar la jubilación a los 30 años te pone en una excelente posición. Sigue esta lista de verificación para ponerte en marcha.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {checklistItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-amber-100 rounded-lg text-amber-600 mr-3">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4">{item.description}</p>
                
                <div className="space-y-3">
                  {item.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="flex items-start">
                      <input
                        type="checkbox"
                        className="h-5 w-5 text-amber-600 border-gray-300 rounded mt-0.5 cursor-pointer"
                      />
                      <span className="ml-3 text-gray-700">{task.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-amber-50 to-yellow-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">El poder de empezar a los 30 años</h3>
          <p className="text-gray-700 mb-6">
            Empezar a ahorrar para la jubilación a los 30 años te da aproximadamente 35 años de crecimiento antes de una edad de jubilación tradicional de 65. Este horizonte de tiempo largo tiene ventajas significativas:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-lg text-gray-900 mb-2">Magia del interés compuesto</h4>
              <p className="text-gray-600">
                Con 35 años de crecimiento, incluso contribuciones modestas pueden crecer sustancialmente. $500 mensuales al 7% podrían convertirse en más de $800,000 a los 65 años.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-lg text-gray-900 mb-2">Requisitos mensuales más bajos</h4>
              <p className="text-gray-600">
                Empezar a los 30 años requiere contribuciones mensuales mucho más pequeñas que empezar a los 40 o 50 para alcanzar el mismo objetivo.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold text-lg text-gray-900 mb-2">Más espacio para el riesgo</h4>
              <p className="text-gray-600">
                Un horizonte de tiempo más largo te permite invertir más agresivamente, potencialmente aumentando tus rendimientos de manera significativa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Componentes necesarios para los iconos
const Calculator = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="16" height="20" x="4" y="2" rx="2" />
    <line x1="8" x2="16" y1="6" y2="6" />
    <line x1="16" x2="16" y1="14" y2="18" />
    <path d="M16 10h.01" />
    <path d="M12 10h.01" />
    <path d="M8 10h.01" />
    <path d="M12 14h.01" />
    <path d="M8 14h.01" />
    <path d="M12 18h.01" />
    <path d="M8 18h.01" />
  </svg>
);

const Heart = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

export default RetirementChecklist;