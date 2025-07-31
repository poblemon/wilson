import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Check, X } from 'lucide-react';

const CommonMistakes: React.FC = () => {
  const errores = [
    {
      title: "Invertir sin fondo de emergencia",
      description: "Construir inversiones antes de tener seguridad financiera puede tener consecuencias negativas si necesitas retirar dinero durante una caída del mercado.",
      impact: "Obliga a vender inversiones en momentos potencialmente malos",
      solution: "Crea un fondo de emergencia de 3-6 meses antes de invertir agresivamente",
      example: {
        mistake: "Alex invirtió todos los $10,000 de ahorros en acciones, luego necesitó $5,000 para una reparación de automóvil de emergencia durante una caída del mercado, lo que lo obligó a vender con una pérdida del 20%.",
        better: "Alex mantuvo $6,000 en una cuenta de ahorro de alto rendimiento como fondo de emergencia e invirtió los $4,000 restantes en acciones. Cuando se necesitaron reparaciones de automóvil, el fondo de emergencia cubrió el costo sin tocar las inversiones."
      }
    },
    {
      title: "Perseguir el rendimiento pasado",
      description: "Invertir en fondos o acciones solo porque han tenido un buen rendimiento recientemente, sin entender los fundamentos subyacentes.",
      impact: "A menudo conduce a comprar a precios altos y vender a precios bajos",
      solution: "Enfócate en la estrategia a largo plazo, no en los rendimientos recientes",
      example: {
        mistake: "Jordan vio que las acciones de tecnología ganaron un 40% el año pasado, así que invirtió pesadamente en tecnología a precios máximos, solo para experimentar una corrección del 30% en el sector poco después.",
        better: "Jordan investigó varios sectores, creó una cartera diversificada basada en su tolerancia al riesgo y horizonte de tiempo, y se comprometió a contribuir regularmente independientemente del rendimiento a corto plazo."
      }
    },
    {
      title: "Descuidar el interés compuesto",
      description: "Esperar demasiado tiempo para empezar a invertir porque las cantidades parecen demasiado pequeñas para importar.",
      impact: "Perderse los años más poderosos del crecimiento compuesto",
      solution: "Comienza temprano con cualquier cantidad que puedas, luego aumenta las contribuciones con el tiempo",
      example: {
        mistake: "Taylor esperó hasta los 35 años para empezar a invertir $500 mensuales, alcanzando aproximadamente $590,000 a los 65 años (con un rendimiento del 7%).",
        better: "Taylor comenzó a los 25 años con solo $200 mensuales, aumentando a $500 mensuales a los 35 años, alcanzando más de $1 millón a los 65 años (con un rendimiento del 7%)."
      }
    },
    {
      title: "Intentar cronometrar el mercado",
      description: "Intentar comprar en los mínimos del mercado y vender en los máximos del mercado de manera consistente.",
      impact: "Por lo general, conduce a un rendimiento peor que una estrategia de compra y mantenimiento",
      solution: "Invierte regularmente independientemente de las condiciones del mercado (promedio de costo en dólares)",
      example: {
        mistake: "Morgan siguió esperando el 'momento perfecto' para invertir, manteniendo el dinero en efectivo durante años mientras intentaba predecir las caídas del mercado, perdiendo un crecimiento del mercado del 67% en 5 años.",
        better: "Morgan configuró inversiones mensuales automáticas, comprando más acciones cuando los precios eran bajos y menos cuando los precios eran altos, logrando rendimientos promedio del mercado independientemente del cronometraje."
      }
    },
    {
      title: "Descuidar las cuentas con ventajas fiscales",
      description: "Invertir en cuentas de corretaje gravables antes de maximizar las cuentas de jubilación con ventajas fiscales.",
      impact: "Pagar más impuestos de los necesarios, reduciendo los rendimientos netos",
      solution: "Prioriza las cuentas con ventajas fiscales como las 401(k) y las IRA",
      example: {
        mistake: "Casey invirtió $6,000 anuales en una cuenta de corretaje estándar, pagando impuestos sobre dividendos y ganancias de capital cada año, reduciendo significativamente los rendimientos a largo plazo.",
        better: "Casey contribuyó $6,000 anuales a una IRA Roth, permitiendo que las inversiones crecieran completamente libres de impuestos para la jubilación, potencialmente ahorrando decenas de miles de dólares en impuestos durante décadas."
      }
    },
    {
      title: "Toma de decisiones emocionales",
      description: "Tomar decisiones de inversión basadas en el miedo, la emoción o las noticias del mercado en lugar de un plan estratégico.",
      impact: "Vender en pánico durante las caídas del mercado, comprar con FOMO durante las burbujas",
      solution: "Crea un plan de inversión y manténlo independientemente de las emociones",
      example: {
        mistake: "Durante una caída del mercado, Pat se asustó y vendió inversiones después de una caída del 25%, perdiendo la recuperación posterior del 35% en el próximo año.",
        better: "A pesar de sentirse ansioso durante la caída del mercado, Pat revisó su plan a largo plazo, confirmó que nada había cambiado fundamentalmente y mantuvo sus inversiones, incluso agregando más durante la caída."
      }
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
            <AlertTriangle className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Errores comunes de inversión para evitar</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Aprende de los errores de otros en lugar de cometerlos tú mismo. Estos errores comunes pueden tener un impacto significativo en tu crecimiento financiero.
          </p>
        </motion.div>

        <div className="space-y-8">
          {errores.map((error, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-amber-100 rounded-lg text-amber-600 mr-3">
                    <AlertTriangle className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{error.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4">{error.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <X className="h-5 w-5 text-red-600 mr-2" />
                      <h4 className="font-medium text-gray-900">Impacto</h4>
                    </div>
                    <p className="text-gray-700">{error.impact}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Check className="h-5 w-5 text-green-600 mr-2" />
                      <h4 className="font-medium text-gray-900">Solución</h4>
                    </div>
                    <p className="text-gray-700">{error.solution}</p>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-medium text-gray-900 mb-3">Ejemplo real</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-start">
                        <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5 mr-2" />
                        <div>
                          <h5 className="text-sm font-medium text-gray-900 mb-1">El error</h5>
                          <p className="text-sm text-gray-600">{error.example.mistake}</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5 mr-2" />
                        <div>
                          <h5 className="text-sm font-medium text-gray-900 mb-1">Mejor enfoque</h5>
                          <p className="text-sm text-gray-600">{error.example.better}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommonMistakes;