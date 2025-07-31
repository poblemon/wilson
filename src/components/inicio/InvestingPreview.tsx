import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, BarChart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const InvestingPreview: React.FC = () => {
  // Datos de ejemplo para el gráfico de crecimiento de la inversión
  const investmentGrowthData = [
    { year: 'Año 1', bank: 10100, market: 10700 },
    { year: 'Año 2', bank: 10201, market: 11449 },
    { year: 'Año 3', bank: 10303, market: 12250 },
    { year: 'Año 4', bank: 10406, market: 13108 },
    { year: 'Año 5', bank: 10510, market: 14026 },
    { year: 'Año 6', bank: 10615, market: 15007 },
    { year: 'Año 7', bank: 10721, market: 16058 },
    { year: 'Año 8', bank: 10829, market: 17182 },
    { year: 'Año 9', bank: 10937, market: 18385 },
    { year: 'Año 10', bank: 11046, market: 19672 },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
              <LineChart className="h-4 w-4 mr-2" />
              Fundamentos de la inversión
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Haz crecer tu patrimonio con el tiempo</h2>
            <p className="text-lg text-gray-600 mb-6">
              La inversión es cómo haces que tu dinero trabaje para ti. Incluso pequeñas cantidades pueden crecer significativamente con el tiempo gracias al interés compuesto.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
              <h3 className="font-semibold text-gray-900 mb-4">Ahorro bancario vs. inversión en el mercado</h3>
              <p className="text-gray-700 mb-4">
                Ve cómo $10,000 crece durante 10 años con una tasa de interés bancaria del 1% en comparación con un rendimiento promedio del mercado del 7%.
              </p>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsLineChart
                    data={investmentGrowthData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="bank"
                      name="Ahorro bancario"
                      stroke="#94a3b8"
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="market"
                      name="Inversión en el mercado"
                      stroke="#10b981"
                      activeDot={{ r: 8 }}
                    />
                  </RechartsLineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <Link 
              to="/investing" 
              className="inline-flex items-center font-medium text-blue-600 hover:text-blue-700"
            >
              Explora opciones de inversión
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
          
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
                <h3 className="font-semibold text-lg mb-2">Fondos mutuos</h3>
                <p className="text-gray-600">
                  Una colección de acciones o bonos gestionados por profesionales. Excelente para principiantes debido a la diversificación integrada.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow border-l-4 border-emerald-500">
                <h3 className="font-semibold text-lg mb-2">Fondos cotizados en bolsa (ETFs)</h3>
                <p className="text-gray-600">
                  Similares a los fondos mutuos pero negociados como acciones. A menudo tienen tarifas más bajas y mayor eficiencia fiscal.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow border-l-4 border-purple-500">
                <h3 className="font-semibold text-lg mb-2">Acciones individuales</h3>
                <p className="text-gray-600">
                  Acciones de propiedad en una empresa específica. Rendimientos potenciales más altos pero también mayor riesgo.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow border-l-4 border-amber-500">
                <h3 className="font-semibold text-lg mb-2">Bonos</h3>
                <p className="text-gray-600">
                  Préstamos que haces a una empresa o gobierno. Generalmente más seguros que las acciones pero con rendimientos más bajos.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InvestingPreview;