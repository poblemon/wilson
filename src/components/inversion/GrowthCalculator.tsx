import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
import { Calculator } from 'lucide-react';

const GrowthCalculator: React.FC = () => {
  const [montoInicial, setMontoInicial] = useState(1000);
  const [contribuciónMensual, setContribuciónMensual] = useState(100);
  const [años, setAños] = useState(10);
  const [tasaDeInterés, setTasaDeInterés] = useState(7);
  const [datosDeGráfico, setDatosDeGráfico] = useState<any[]>([]);

  // Calcular interés compuesto con contribuciones mensuales
  const calcularCrecimiento = () => {
    const datos = [];
    let saldo = montoInicial;
    
    for (let año = 0; año <= años; año++) {
      if (año > 0) {
        for (let mes = 1; mes <= 12; mes++) {
          // Agregar contribución mensual
          saldo += contribuciónMensual;
          
          // Aplicar tasa de interés mensual
          saldo *= (1 + (tasaDeInterés / 100 / 12));
        }
      }
      
      datos.push({
        año,
        saldo: Math.round(saldo)
      });
    }
    
    return datos;
  };

  useEffect(() => {
    setDatosDeGráfico(calcularCrecimiento());
  }, [montoInicial, contribuciónMensual, años, tasaDeInterés]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>, 
    setter: React.Dispatch<React.SetStateAction<number>>,
    min: number,
    max: number
  ) => {
    const valor = parseInt(e.target.value, 10) || 0;
    setter(Math.min(Math.max(valor, min), max));
  };

  const contribucionesTotales = montoInicial + (contribuciónMensual * 12 * años);
  const interésGanado = datosDeGráfico.length > 0 ? datosDeGráfico[datosDeGráfico.length - 1].saldo - contribucionesTotales : 0;
  const saldoFinal = datosDeGráfico.length > 0 ? datosDeGráfico[datosDeGráfico.length - 1].saldo : 0;

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-2 bg-purple-100 rounded-full text-purple-600 mb-4">
            <Calculator className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Calculadora de crecimiento de inversiones</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Ve cómo tus inversiones podrían crecer con el tiempo gracias al poder del interés compuesto.
          </p>
        </motion.div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="montoInicial" className="block text-sm font-medium text-gray-700 mb-1">
                      Inversión inicial ($)
                    </label>
                    <input
                      type="number"
                      id="montoInicial"
                      value={montoInicial}
                      onChange={(e) => handleInputChange(e, setMontoInicial, 0, 1000000)}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    <div className="mt-1">
                      <input
                        type="range"
                        min="0"
                        max="10000"
                        step="100"
                        value={montoInicial}
                        onChange={(e) => setMontoInicial(parseInt(e.target.value, 10))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="contribuciónMensual" className="block text-sm font-medium text-gray-700 mb-1">
                      Contribución mensual ($)
                    </label>
                    <input
                      type="number"
                      id="contribuciónMensual"
                      value={contribuciónMensual}
                      onChange={(e) => handleInputChange(e, setContribuciónMensual, 0, 10000)}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    <div className="mt-1">
                      <input
                        type="range"
                        min="0"
                        max="1000"
                        step="10"
                        value={contribuciónMensual}
                        onChange={(e) => setContribuciónMensual(parseInt(e.target.value, 10))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="años" className="block text-sm font-medium text-gray-700 mb-1">
                      Período de tiempo (años)
                    </label>
                    <input
                      type="number"
                      id="años"
                      value={años}
                      onChange={(e) => handleInputChange(e, setAños, 1, 50)}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    <div className="mt-1">
                      <input
                        type="range"
                        min="1"
                        max="40"
                        value={años}
                        onChange={(e) => setAños(parseInt(e.target.value, 10))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="tasaDeInterés" className="block text-sm font-medium text-gray-700 mb-1">
                      Retorno anual estimado (%)
                    </label>
                    <input
                      type="number"
                      id="tasaDeInterés"
                      value={tasaDeInterés}
                      onChange={(e) => handleInputChange(e, setTasaDeInterés, 0, 30)}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    <div className="mt-1">
                      <input
                        type="range"
                        min="0"
                        max="15"
                        step="0.5"
                        value={tasaDeInterés}
                        onChange={(e) => setTasaDeInterés(parseFloat(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mt-8">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <p className="text-xs text-gray-500">Contribuciones totales</p>
                      <p className="font-bold text-lg text-blue-700">${contribucionesTotales.toLocaleString()}</p>
                    </div>
                    <div className="bg-emerald-50 p-4 rounded-lg text-center">
                      <p className="text-xs text-gray-500">Interés ganado</p>
                      <p className="font-bold text-lg text-emerald-700">${interésGanado.toLocaleString()}</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <p className="text-xs text-gray-500">Saldo final</p>
                      <p className="font-bold text-lg text-purple-700">${saldoFinal.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Crecimiento proyectado durante {años} años</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={datosDeGráfico}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="año" label={{ value: 'Años', position: 'insideBottomRight', offset: -10 }} />
                      <YAxis 
                        label={{ value: 'Valor ($)', angle: -90, position: 'insideLeft' }}
                        tickFormatter={(value) => value.toLocaleString()}  
                      />
                      <Tooltip
                        formatter={(value) => [`$${parseInt(value.toString()).toLocaleString()}`, 'Saldo']}
                        labelFormatter={(label) => `Año ${label}`}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="saldo"
                        name="Saldo de la inversión"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Notas importantes</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Esta calculadora asume que los rendimientos se calculan mensualmente</li>
                    <li>• Los rendimientos reales de la inversión variarán y no están garantizados</li>
                    <li>• La calculadora no tiene en cuenta impuestos ni inflación</li>
                    <li>• Utiliza esta herramienta como una estimación, no como una garantía de rendimiento futuro</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthCalculator;