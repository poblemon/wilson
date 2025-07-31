import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, AlertCircle } from 'lucide-react';

const SavingsMethodsTable: React.FC = () => {
  const métodosDeAhorro = [
    {
      name: "Presupuesto 50/30/20",
      description: "50% para necesidades, 30% para deseos, 20% para ahorros y pago de deudas",
      bestFor: "Principiantes que necesitan un marco de trabajo simple",
      difficulty: "Fácil",
      timeCommitment: "Bajo",
      pros: ["Fácil de entender", "Enfoque equilibrado", "Flexible dentro de categorías"],
      cons: ["Puede no funcionar para todos los niveles de ingresos", "No tiene en cuenta las diferencias de costos regionales", "A veces es difícil categorizar gastos"]
    },
    {
      name: "Sistema de sobres",
      description: "Asignar dinero en efectivo a sobres físicos o digitales para diferentes categorías de gastos",
      bestFor: "Aprendices visuales y aquellos que luchan con el gasto excesivo",
      difficulty: "Medio",
      timeCommitment: "Medio",
      pros: ["Muy tangible", "Ayuda a controlar el gasto impulsivo", "Claro cuando se está agotando"],
      cons: ["Consume tiempo mantener", "Menos conveniente para compras en línea", "Llevar dinero en efectivo puede ser riesgoso"]
    },
    {
      name: "Presupuesto de base cero",
      description: "Asignar cada dólar a un trabajo para que los ingresos menos gastos sean igual a cero",
      bestFor: "Personas detallistas que quieren control máximo",
      difficulty: "Difícil",
      timeCommitment: "Alto",
      pros: ["Altamente efectivo para la amortización de deudas", "Asegura que cada dólar tenga un propósito", "Gran visibilidad en el gasto"],
      cons: ["Consume tiempo", "Requiere ajustes regulares", "Puede sentirse restrictivo"]
    },
    {
      name: "Págate a ti mismo primero",
      description: "Ahorrar automáticamente un porcentaje de ingresos antes de pagar otros gastos",
      bestFor: "Personas ocupadas que quieren automatizar sus ahorros",
      difficulty: "Fácil",
      timeCommitment: "Muy bajo",
      pros: ["Automatización simple", "Prioriza los ahorros", "Enfoque de 'configura y olvida'"],
      cons: ["No ayuda con los hábitos de gasto", "Puede necesitar ajustes a medida que cambian los gastos", "Requiere ingresos estables"]
    },
    {
      name: "Presupuesto basado en valores",
      description: "Alinear el gasto con los valores personales mientras se reducen los gastos que no importan",
      bestFor: "Aquellos que quieren disfrutar del gasto mientras siguen ahorrando",
      difficulty: "Medio",
      timeCommitment: "Medio",
      pros: ["Se centra en la satisfacción", "Menos restrictivo", "Sostenible a largo plazo"],
      cons: ["Requiere autoconciencia", "Puede ser subjetivo", "Necesita reflexión regular"]
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full text-blue-600 mb-4">
            <TrendingUp className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Comparando métodos de ahorro</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Diferentes enfoques de ahorro funcionan para diferentes personas. Encuentra el método que se adapte a tu estilo de vida y personalidad.
          </p>
        </motion.div>

        <div className="overflow-hidden shadow-md rounded-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900">Método</th>
                  <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900">Descripción</th>
                  <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900">Mejor para</th>
                  <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900">Dificultad</th>
                  <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900">Tiempo necesario</th>
                  <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900">Ventajas y desventajas</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {métodosDeAhorro.map((método, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="py-4 px-4 text-sm font-medium text-gray-900">{método.name}</td>
                    <td className="py-4 px-4 text-sm text-gray-600">{método.description}</td>
                    <td className="py-4 px-4 text-sm text-gray-600">{método.bestFor}</td>
                    <td className="py-4 px-4 text-sm">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        método.difficulty === 'Easy' 
                          ? 'bg-green-100 text-green-800' 
                          : método.difficulty === 'Medium'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                      }`}>
                        {método.difficulty}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600">{método.timeCommitment}</td>
                    <td className="py-4 px-4 text-sm text-gray-600">
                      <div>
                        <p className="text-xs font-medium text-green-600">Ventajas:</p>
                        <ul className="list-disc ml-4 text-xs mt-1">
                          {método.pros.map((pro, i) => (
                            <li key={i}>{pro}</li>
                          ))}
                        </ul>
                        <p className="text-xs font-medium text-red-600 mt-2">Desventajas:</p>
                        <ul className="list-disc ml-4 text-xs mt-1">
                          {método.cons.map((con, i) => (
                            <li key={i}>{con}</li>
                          ))}
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-8 bg-amber-50 p-6 rounded-lg border border-amber-200">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <AlertCircle className="h-6 w-6 text-amber-600" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-amber-800">Nota importante</h3>
              <div className="mt-2 text-sm text-amber-700">
                <p>
                  Ningún método de presupuesto es perfecto para todos. Es común combinar elementos de diferentes enfoques o cambiar métodos a medida que cambia tu situación financiera. El mejor presupuesto es aquel con el que puedes mantener consistencia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsMethodsTable;