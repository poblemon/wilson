import React from 'react';
import { motion } from 'framer-motion';
import { Coins, Star, Lightbulb } from 'lucide-react';

const SavingOnLowIncome: React.FC = () => {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-2 bg-purple-100 rounded-full text-purple-600 mb-4">
            <Coins className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Ahorrar con un ingreso bajo</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            No necesitas un alto ingreso para construir ahorros. Pasos pequeños y consistentes pueden hacer una gran diferencia.
          </p>
        </motion.div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Guía rápida para ahorrar cuando el dinero es escaso
            </h3>
            
            <div className="space-y-8">
              <motion.div 
                className="border-l-4 border-purple-500 pl-4 py-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <h4 className="text-lg font-medium text-gray-900 mb-2">1. Comienza de manera increíblemente pequeña</h4>
                <p className="text-gray-600">
                  Comienza con solo $5 o $10 por pago. El hábito es más importante que la cantidad. A medida que aumenta tu ingreso o disminuyen tus gastos, puedes ahorrar más gradualmente.
                </p>
                <div className="mt-3 bg-purple-50 p-4 rounded-md">
                  <p className="text-sm text-purple-700">
                    <strong>Consejo de ahorro micro:</strong> Intenta el desafío del centavo. Ahorra 1¢ el primer día, 2¢ el segundo día, y así sucesivamente. Después de un año, habrás ahorrado casi $700.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="border-l-4 border-blue-500 pl-4 py-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <h4 className="text-lg font-medium text-gray-900 mb-2">2. Automatiza todo</h4>
                <p className="text-gray-600">
                  Configura transferencias automáticas a una cuenta de ahorros separada justo después del pago. Comienza con el 1-5% de tu ingreso. Te acostumbrarás al pago de menos en casa.
                </p>
                <div className="mt-3 flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '5%' }}></div>
                  </div>
                  <span className="ml-2 text-sm text-gray-600">5%</span>
                </div>
              </motion.div>

              <motion.div 
                className="border-l-4 border-emerald-500 pl-4 py-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <h4 className="text-lg font-medium text-gray-900 mb-2">3. Reduce un pequeño gasto</h4>
                <p className="text-gray-600">
                  Identifica un solo gasto regular para reducir o eliminar. Redirige ese dinero a ahorros. Por ejemplo, cortar un café de $5 a la semana ahorra $260 al año.
                </p>
                <div className="mt-3 grid grid-cols-3 gap-2 text-center text-sm">
                  <div className="bg-emerald-50 p-2 rounded-md">
                    <strong className="text-emerald-700">$5/week</strong>
                    <p className="text-gray-600">Café</p>
                  </div>
                  <div className="bg-emerald-50 p-2 rounded-md">
                    <strong className="text-emerald-700">$20/month</strong>
                    <p className="text-gray-600">Suscripción</p>
                  </div>
                  <div className="bg-emerald-50 p-2 rounded-md">
                    <strong className="text-emerald-700">$15/week</strong>
                    <p className="text-gray-600">Comida para llevar</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="border-l-4 border-red-500 pl-4 py-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <h4 className="text-lg font-medium text-gray-900 mb-2">4. Busca oportunidades de ingresos adicionales</h4>
                <p className="text-gray-600">
                  Considera un trabajo secundario, horas extras, vender artículos que no necesitas o pedir un aumento. Dedica al menos el 50% de cualquier dinero adicional a ahorros.
                </p>
                <div className="mt-3 bg-red-50 p-4 rounded-md">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-red-600 mr-2" />
                    <p className="text-sm text-red-700">
                      <strong>Consejo profesional:</strong> Ahorra el 100% de los ingresos imprevistos como devoluciones de impuestos, regalos, reembolsos y bonificaciones.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="border-l-4 border-amber-500 pl-4 py-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <h4 className="text-lg font-medium text-gray-900 mb-2">5. Utiliza la regla "Ahorra primero, gasta después"</h4>
                <p className="text-gray-600">
                  Cuando consideres una compra no esencial, agrega su costo a ahorros en su lugar. Si después de 30 días todavía quieres el artículo, puedes decidir si comprarlo o seguir ahorrando.
                </p>
              </motion.div>
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl">
              <div className="flex items-start">
                <div className="mr-4">
                  <div className="p-2 bg-indigo-100 rounded-full">
                    <Lightbulb className="h-6 w-6 text-indigo-600" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Recuerda esto</h4>
                  <p className="text-gray-700">
                    Ahorrar incluso $10-20 al mes hace una diferencia. Construye el hábito de ahorrar y crea un buffer financiero que reduce el estrés. A medida que aumenta tu ingreso, mantén o aumenta tu porcentaje de ahorro en lugar de aumentar tu estilo de vida en la misma cantidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingOnLowIncome;