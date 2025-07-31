import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, BarChart, PieChart, Building } from 'lucide-react';

const InvestmentOptions: React.FC = () => {
  const investmentOptions = [
    {
      title: "Fondos mutuos",
      icon: <PieChart className="h-8 w-8 text-blue-600" />,
      description: "Una colección de acciones, bonos u otros valores propiedad de un grupo de inversores y gestionados por una empresa de inversión profesional.",
      riskLevel: "Bajo a moderado",
      beginner: true,
      minimums: "$0-$3,000 (varía según el fondo)",
      pros: [
        "Gestión profesional",
        "Diversificación automática",
        "Variedad de opciones para diferentes objetivos",
        "Fácil de empezar"
      ],
      cons: [
        "Puede tener tarifas más altas",
        "Menos control sobre inversiones específicas",
        "Posible ineficiencia fiscal",
        "El rendimiento varía ampliamente"
      ]
    },
    {
      title: "Fondos cotizados en bolsa (ETFs)",
      icon: <BarChart className="h-8 w-8 text-emerald-600" />,
      description: "Cestas de valores que siguen un índice subyacente y se negocian como acciones individuales en una bolsa.",
      riskLevel: "Bajo a moderado",
      beginner: true,
      minimums: "Precio de 1 acción (a menudo $20-300)",
      pros: [
        "Tarifas más bajas que los fondos mutuos",
        "Negociación durante todo el día",
        "Eficiencia fiscal",
        "Opciones diversas (sector, mercado total, etc.)"
      ],
      cons: [
        "Pueden aplicarse tarifas de negociación",
        "Más tentación de negociar activamente",
        "Algunos ETFs especializados son complejos",
        "Los precios fluctúan durante el día de negociación"
      ]
    },
    {
      title: "Acciones individuales",
      icon: <LineChart className="h-8 w-8 text-purple-600" />,
      description: "Acciones o propiedad en una empresa específica que pueden ser compradas y vendidas en bolsas de valores.",
      riskLevel: "Moderado a alto",
      beginner: false,
      minimums: "Precio de 1 acción o acciones fraccionarias",
      pros: [
        "Propiedad directa en empresas",
        "No hay tarifas de gestión",
        "Posibilidad de altos rendimientos",
        "Derechos de voto en decisiones de la empresa"
      ],
      cons: [
        "Requiere más investigación y conocimiento",
        "Mayor riesgo con menos diversificación",
        "Más tiempo necesario para gestionar la cartera",
        "La toma de decisiones emocionales puede afectar los rendimientos"
      ]
    },
    {
      title: "Bonos",
      icon: <Building className="h-8 w-8 text-amber-600" />,
      description: "Préstamos otorgados a una corporación o gobierno que pagan intereses fijos durante un período de tiempo específico.",
      riskLevel: "Bajo a moderado",
      beginner: true,
      minimums: "$1,000 para bonos individuales, $0 para fondos de bonos",
      pros: [
        "Pagos de ingresos regulares",
        "Generalmente menor riesgo que las acciones",
        "Puede ayudar a equilibrar la volatilidad de la cartera",
        "Los bonos gubernamentales tienen un riesgo de incumplimiento mínimo"
      ],
      cons: [
        "Rendimientos más bajos que las acciones históricamente",
        "Riesgo de tipo de interés",
        "La inflación puede erosionar el valor",
        "Los bonos corporativos tienen riesgo de incumplimiento"
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
          <h2 className="text-3xl font-bold text-gray-900">Opciones de inversión para principiantes</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Entender tus opciones es el primer paso para tomar decisiones de inversión informadas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {investmentOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      {option.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">{option.title}</h3>
                    <div className="flex mt-1">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        option.riskLevel.includes("Low") 
                          ? "bg-green-100 text-green-800" 
                          : option.riskLevel.includes("Moderate")
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                      }`}>
                        {option.riskLevel} Riesgo
                      </span>
                      {option.beginner && (
                        <span className="ml-2 px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                          Amigable para principiantes
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {option.description}
                </p>
                
                <div className="mb-6">
                  <p className="text-sm text-gray-500">Inversión mínima típica:</p>
                  <p className="font-medium text-gray-900">{option.minimums}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                      <span className="h-4 w-4 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2">+</span>
                      Ventajas
                    </h4>
                    <ul className="space-y-1">
                      {option.pros.map((pro, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start">
                          <span className="text-green-500 mr-1.5">•</span> {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                      <span className="h-4 w-4 rounded-full bg-red-100 flex items-center justify-center text-red-600 mr-2">−</span>
                      Desventajas
                    </h4>
                    <ul className="space-y-1">
                      {option.cons.map((con, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start">
                          <span className="text-red-500 mr-1.5">•</span> {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Cómo empezar a invertir</h3>
          <ol className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">1</div>
              <p><strong>Establece objetivos financieros claros</strong> (jubilación, compra de casa, educación) con plazos.</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">2</div>
              <p><strong>Crea un fondo de emergencia</strong> antes de invertir cantidades significativas.</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">3</div>
              <p><strong>Abre una cuenta de inversión</strong> con un corredor de confianza (tradicional o en línea).</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">4</div>
              <p><strong>Comienza con fondos de índice o ETFs</strong> para principiantes para obtener una exposición amplia al mercado.</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">5</div>
              <p><strong>Considera cuentas con ventajas fiscales</strong> como cuentas de jubilación antes de cuentas gravables.</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3">6</div>
              <p><strong>Contribuye regularmente</strong> independientemente de las condiciones del mercado (promedio de costo en dólares).</p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default InvestmentOptions;