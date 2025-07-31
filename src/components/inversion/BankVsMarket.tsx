import React from 'react';
import { motion } from 'framer-motion';
import { Building2, TrendingUp, Calculator, ShieldAlert } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const BankVsMarket: React.FC = () => {
  // Datos de ejemplo para la comparación de crecimiento de 30 años
  const growthData = [
    { year: 0, savings: 10000, market: 10000 },
    { year: 5, savings: 10510, market: 14026 },
    { year: 10, savings: 11046, market: 19672 },
    { year: 15, savings: 11609, market: 27590 },
    { year: 20, savings: 12201, market: 38697 },
    { year: 25, savings: 12824, market: 54274 },
    { year: 30, savings: 13478, market: 76123 },
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
          <h2 className="text-3xl font-bold text-gray-900">Ahorro vs. Inversión: ¿Cuál es la diferencia?</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Entender cuándo ahorrar y cuándo invertir puede tener un impacto significativo en tu futuro financiero.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full text-blue-600 mr-4">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Ahorro en el banco</h3>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 py-1">
                  <h4 className="font-medium text-gray-900">Propósito</h4>
                  <p className="text-gray-600">Para emergencias, objetivos a corto plazo y seguridad financiera. Este es dinero que puedes necesitar acceder rápidamente.</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4 py-1">
                  <h4 className="font-medium text-gray-900">Retornos típicos</h4>
                  <p className="text-gray-600">0.01% a 1% en cuentas de ahorro regulares. Hasta 3-5% en cuentas de alto rendimiento en condiciones económicas favorables.</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4 py-1">
                  <h4 className="font-medium text-gray-900">Nivel de riesgo</h4>
                  <p className="text-gray-600">Muy bajo. Asegurado por el FDIC hasta $250,000 por depositante, por banco.</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4 py-1">
                  <h4 className="font-medium text-gray-900">Accesibilidad</h4>
                  <p className="text-gray-600">Altamente líquido. El dinero está disponible siempre que lo necesites (excepto algunos CDs y productos similares).</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-4 py-1">
                  <h4 className="font-medium text-gray-900">Mejor para</h4>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1.5">•</span> Fondos de emergencia
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1.5">•</span> Objetivos a corto plazo (1-3 años)
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1.5">•</span> Gastos regulares y facturas
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1.5">•</span> Dinero que no puedes permitirte perder
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-emerald-100 rounded-full text-emerald-600 mr-4">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Inversión en el mercado</h3>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-emerald-500 pl-4 py-1">
                  <h4 className="font-medium text-gray-900">Propósito</h4>
                  <p className="text-gray-600">Para la construcción de patrimonio a largo plazo, superar la inflación y lograr un crecimiento significativo con el tiempo.</p>
                </div>
                
                <div className="border-l-4 border-emerald-500 pl-4 py-1">
                  <h4 className="font-medium text-gray-900">Retornos típicos</h4>
                  <p className="text-gray-600">Históricamente, el S&P 500 ha promediado alrededor del 7-10% anualmente durante períodos largos (antes de la inflación).</p>
                </div>
                
                <div className="border-l-4 border-emerald-500 pl-4 py-1">
                  <h4 className="font-medium text-gray-900">Nivel de riesgo</h4>
                  <p className="text-gray-600">Moderado a alto, dependiendo de las opciones de inversión. El valor puede fluctuar dramáticamente en el corto plazo.</p>
                </div>
                
                <div className="border-l-4 border-emerald-500 pl-4 py-1">
                  <h4 className="font-medium text-gray-900">Accesibilidad</h4>
                  <p className="text-gray-600">Menos líquido. Puede tomar días vender inversiones y acceder a efectivo, y vender en el momento equivocado puede resultar en pérdidas.</p>
                </div>
                
                <div className="border-l-4 border-emerald-500 pl-4 py-1">
                  <h4 className="font-medium text-gray-900">Mejor para</h4>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-1.5">•</span> Objetivos a largo plazo (5+ años)
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-1.5">•</span> Planificación de la jubilación
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-1.5">•</span> Construcción de patrimonio
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-1.5">•</span> Superar la inflación con el tiempo
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-md overflow-hidden mb-12"
        >
          <div className="p-8">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-purple-100 rounded-full text-purple-600 mr-4">
                <Calculator className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">La diferencia de crecimiento con el tiempo</h3>
            </div>
            
            <p className="text-gray-600 mb-6">
              Ve cómo $10,000 crecería durante 30 años en una cuenta de ahorro (1% de interés) versus el mercado de valores (retorno promedio del 7%).
            </p>
            
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={growthData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" label={{ value: 'Años', position: 'insideBottomRight', offset: -10 }} />
                  <YAxis label={{ value: 'Valor ($)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip 
                    formatter={(value) => [`$${value.toLocaleString()}`, undefined]}
                    labelFormatter={(label) => `Año ${label}`}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="savings"
                    name="Ahorro bancario (1%)"
                    stroke="#3b82f6"
                    activeDot={{ r: 8 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="market"
                    name="Inversión en el mercado (7%)"
                    stroke="#10b981"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Valor final después de 30 años</p>
                <h4 className="font-bold text-2xl text-blue-600">$13,478</h4>
                <p className="text-sm text-gray-600">Ahorro bancario (1% de interés)</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Valor final después de 30 años</p>
                <h4 className="font-bold text-2xl text-emerald-600">$76,123</h4>
                <p className="text-sm text-gray-600">Inversión en el mercado (7% de retorno)</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-amber-50 p-6 rounded-lg border border-amber-200"
        >
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <ShieldAlert className="h-6 w-6 text-amber-600" />
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-amber-800">Cómo equilibrar el ahorro y la inversión</h3>
              <div className="mt-2 text-amber-700">
                <p className="mb-4">
                  El enfoque ideal es tener tanto ahorro como inversiones:
                </p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li><strong>Primero, crea un fondo de emergencia</strong> en una cuenta de ahorro de alto rendimiento (3-6 meses de gastos).</li>
                  <li><strong>Luego, invierte para la jubilación</strong> a través de cuentas con ventajas fiscales como un 401(k) o IRA.</li>
                  <li><strong>A continuación, ahorra para objetivos a corto plazo</strong> (1-3 años) en cuentas de ahorro o CDs.</li>
                  <li><strong>Finalmente, invierte para objetivos a medio y largo plazo</strong> (4+ años) en vehículos de inversión adecuados.</li>
                </ol>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BankVsMarket;