import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Sliders } from 'lucide-react';
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

const FinancialSimulator: React.FC = () => {
  // Estado para las entradas del usuario
  const [edad, setEdad] = useState(30);
  const [ingresoMensual, setIngresoMensual] = useState(4000);
  const [gastosMensuales, setGastosMensuales] = useState(3000);
  const [tasaDeAhorro, setTasaDeAhorro] = useState(15);
  const [ahorroActual, setAhorroActual] = useState(10000);
  const [retornoDeInversión, setRetornoDeInversión] = useState(7);
  const [edadDeJubilación, setEdadDeJubilación] = useState(65);
  
  // Estado para los cálculos de salida
  const [ahorroMensual, setAhorroMensual] = useState(0);
  const [añosHastaLaJubilación, setAñosHastaLaJubilación] = useState(0);
  const [proyecciónDeAhorro, setProyecciónDeAhorro] = useState<any[]>([]);
  
  // Calcular resultados cada vez que cambian las entradas
  useEffect(() => {
    // Calcular la cantidad de ahorro mensual
    const ahorroMensualCalculado = (ingresoMensual * (tasaDeAhorro / 100));
    setAhorroMensual(ahorroMensualCalculado);
    
    // Calcular los años hasta la jubilación
    const añosHastaLaJubilaciónCalculados = edadDeJubilación - edad;
    setAñosHastaLaJubilación(añosHastaLaJubilaciónCalculados);
    
    // Generar datos de proyección
    const datosDeProyección = generarProyección(
      ahorroActual,
      ahorroMensualCalculado,
      retornoDeInversión,
      añosHastaLaJubilaciónCalculados
    );
    setProyecciónDeAhorro(datosDeProyección);
  }, [edad, ingresoMensual, gastosMensuales, tasaDeAhorro, ahorroActual, retornoDeInversión, edadDeJubilación]);
  
  // Generar datos de proyección para el gráfico
  const generarProyección = (
    ahorroInicial: number,
    cantidadDeAhorroMensual: number,
    retornoAnual: number,
    años: number
  ) => {
    const datos = [];
    let saldo = ahorroInicial;
    const retornoMensual = retornoAnual / 100 / 12;
    
    datos.push({
      edad: edad,
      ahorro: Math.round(saldo),
      contribuciones: 0,
      ganancias: 0
    });
    
    let contribucionesTotales = 0;
    let gananciasTotales = 0;
    
    for (let año = 1; año <= años; año++) {
      let contribucionesAnuales = 0;
      let gananciasAnuales = 0;
      
      for (let mes = 1; mes <= 12; mes++) {
        // Agregar contribución mensual
        saldo += cantidadDeAhorroMensual;
        contribucionesAnuales += cantidadDeAhorroMensual;
        
        // Aplicar rendimientos mensuales
        const gananciasMensuales = saldo * retornoMensual;
        saldo += gananciasMensuales;
        gananciasAnuales += gananciasMensuales;
      }
      
      contribucionesTotales += contribucionesAnuales;
      gananciasTotales += gananciasAnuales;
      
      datos.push({
        edad: edad + año,
        ahorro: Math.round(saldo),
        contribuciones: Math.round(contribucionesTotales),
        ganancias: Math.round(gananciasTotales)
      });
    }
    
    return datos;
  };
  
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>, 
    setter: React.Dispatch<React.SetStateAction<number>>,
    min: number,
    max: number
  ) => {
    const valor = parseInt(e.target.value, 10) || 0;
    setter(Math.min(Math.max(valor, min), max));
  };
  
  // Cantidad final de ahorro en la jubilación
  const cantidadFinalDeAhorro = proyecciónDeAhorro.length > 0 
    ? proyecciónDeAhorro[proyecciónDeAhorro.length - 1].ahorro 
    : 0;
    
  // Ingreso mensual estimado en la jubilación (utilizando la regla del 4%)
  const ingresoMensualEstimadoEnLaJubilación = cantidadFinalDeAhorro * 0.04 / 12;
  
  // Ingreso en la jubilación como porcentaje del ingreso actual
  const porcentajeDeIngresoEnLaJubilación = (ingresoMensualEstimadoEnLaJubilación / ingresoMensual) * 100;
  
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-2 bg-indigo-100 rounded-full text-indigo-600 mb-4">
            <Calculator className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Simulador de futuro financiero</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Ve cómo tus decisiones financieras actuales podrían moldear tu futuro. Ajusta las variables para crear tu propia proyección financiera.
          </p>
        </motion.div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Panel de entradas */}
              <div className="lg:col-span-1">
                <div className="flex items-center mb-6">
                  <Sliders className="h-6 w-6 text-indigo-600 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">Tu información</h3>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="edad" className="block text-sm font-medium text-gray-700 mb-1">
                      Edad actual
                    </label>
                    <input
                      type="number"
                      id="edad"
                      value={edad}
                      onChange={(e) => handleInputChange(e, setEdad, 18, 80)}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <div className="mt-1 flex items-center">
                      <input
                        type="range"
                        min="18"
                        max="80"
                        value={edad}
                        onChange={(e) => setEdad(parseInt(e.target.value, 10))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="ingresoMensual" className="block text-sm font-medium text-gray-700 mb-1">
                      Ingreso mensual (después de impuestos)
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">$</span>
                      </div>
                      <input
                        type="number"
                        id="ingresoMensual"
                        value={ingresoMensual}
                        onChange={(e) => handleInputChange(e, setIngresoMensual, 0, 100000)}
                        className="block w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="mt-1 flex items-center">
                      <input
                        type="range"
                        min="1000"
                        max="20000"
                        step="100"
                        value={ingresoMensual}
                        onChange={(e) => setIngresoMensual(parseInt(e.target.value, 10))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="gastosMensuales" className="block text-sm font-medium text-gray-700 mb-1">
                      Gastos mensuales
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">$</span>
                      </div>
                      <input
                        type="number"
                        id="gastosMensuales"
                        value={gastosMensuales}
                        onChange={(e) => handleInputChange(e, setGastosMensuales, 0, ingresoMensual)}
                        className="block w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="mt-1 flex items-center">
                      <input
                        type="range"
                        min="500"
                        max={ingresoMensual}
                        step="100"
                        value={gastosMensuales}
                        onChange={(e) => setGastosMensuales(parseInt(e.target.value, 10))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="tasaDeAhorro" className="block text-sm font-medium text-gray-700 mb-1">
                      Tasa de ahorro (% de ingreso)
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <input
                        type="number"
                        id="tasaDeAhorro"
                        value={tasaDeAhorro}
                        onChange={(e) => handleInputChange(e, setTasaDeAhorro, 0, 50)}
                        className="block w-full pr-8 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">%</span>
                      </div>
                    </div>
                    <div className="mt-1 flex items-center">
                      <input
                        type="range"
                        min="0"
                        max="50"
                        value={tasaDeAhorro}
                        onChange={(e) => setTasaDeAhorro(parseInt(e.target.value, 10))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="ahorroActual" className="block text-sm font-medium text-gray-700 mb-1">
                      Ahorro actual
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">$</span>
                      </div>
                      <input
                        type="number"
                        id="ahorroActual"
                        value={ahorroActual}
                        onChange={(e) => handleInputChange(e, setAhorroActual, 0, 10000000)}
                        className="block w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="mt-1 flex items-center">
                      <input
                        type="range"
                        min="0"
                        max="100000"
                        step="1000"
                        value={ahorroActual}
                        onChange={(e) => setAhorroActual(parseInt(e.target.value, 10))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="retornoDeInversión" className="block text-sm font-medium text-gray-700 mb-1">
                      Retorno de inversión esperado
                    </label>
                    <div className="relative rounded-md shadow-sm">
                      <input
                        type="number"
                        id="retornoDeInversión"
                        value={retornoDeInversión}
                        onChange={(e) => handleInputChange(e, setRetornoDeInversión, 0, 15)}
                        className="block w-full pr-8 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">%</span>
                      </div>
                    </div>
                    <div className="mt-1 flex items-center">
                      <input
                        type="range"
                        min="0"
                        max="15"
                        step="0.5"
                        value={retornoDeInversión}
                        onChange={(e) => setRetornoDeInversión(parseFloat(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="edadDeJubilación" className="block text-sm font-medium text-gray-700 mb-1">
                      Edad de jubilación planificada
                    </label>
                    <input
                      type="number"
                      id="edadDeJubilación"
                      value={edadDeJubilación}
                      onChange={(e) => handleInputChange(e, setEdadDeJubilación, edad + 1, 90)}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <div className="mt-1 flex items-center">
                      <input
                        type="range"
                        min={edad + 1}
                        max="90"
                        value={edadDeJubilación}
                        onChange={(e) => setEdadDeJubilación(parseInt(e.target.value, 10))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Panel de resultados */}
              <div className="lg:col-span-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Tu proyección financiera</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-indigo-50 p-4 rounded-lg text-center">
                    <p className="text-sm text-gray-500">Ahorro mensual</p>
                    <p className="font-bold text-2xl text-indigo-700">${ahorroMensual.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">{tasaDeAhorro}% de ingreso</p>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg text-center">
                    <p className="text-sm text-gray-500">En la jubilación (edad {edadDeJubilación})</p>
                    <p className="font-bold text-2xl text-emerald-700">${cantidadFinalDeAhorro.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">Después de {añosHastaLaJubilación} años</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <p className="text-sm text-gray-500">Ingreso mensual estimado</p>
                    <p className="font-bold text-2xl text-blue-700">${Math.round(ingresoMensualEstimadoEnLaJubilación).toLocaleString()}</p>
                    <p className="text-xs text-gray-500">{Math.round(porcentajeDeIngresoEnLaJubilación)}% de ingreso actual</p>
                  </div>
                </div>
                
                <div className="h-80 mb-6">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={proyecciónDeAhorro}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis 
                        dataKey="edad" 
                        label={{ value: 'Edad', position: 'insideBottomRight', offset: -10 }} 
                      />
                      <YAxis 
                        tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
                        label={{ value: 'Cantidad ($)', angle: -90, position: 'insideLeft' }} 
                      />
                      <Tooltip 
                        formatter={(value) => [`$${parseInt(value.toString()).toLocaleString()}`, undefined]}
                        labelFormatter={(label) => `Edad ${label}`}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="ahorro"
                        name="Ahorro total"
                        stroke="#6366f1"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 8 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="contribuciones"
                        name="Tus contribuciones"
                        stroke="#10b981"
                        strokeWidth={2}
                        dot={false}
                      />
                      <Line
                        type="monotone"
                        dataKey="ganancias"
                        name="Ganancias de inversión"
                        stroke="#f59e0b"
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-3">Insights clave</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-sm font-medium text-gray-900">Tu ahorro</h5>
                      <ul className="mt-1 space-y-1 text-sm text-gray-600">
                        <li>• Tu capacidad de ahorro mensual es ${ahorroMensual} ({tasaDeAhorro}% de ingreso)</li>
                        <li>• Esto representa ${ahorroMensual * 12} ahorrado anualmente</li>
                        <li>• Estás ahorrando ${ingresoMensual - gastosMensuales} más que tus gastos</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-sm font-medium text-gray-900">Tu jubilación</h5>
                      <ul className="mt-1 space-y-1 text-sm text-gray-600">
                        <li>• A la edad de {edadDeJubilación}, tendrás aproximadamente ${cantidadFinalDeAhorro.toLocaleString()}</li>
                        <li>• Esto podría proporcionar ${Math.round(ingresoMensualEstimadoEnLaJubilación).toLocaleString()} de ingreso mensual</li>
                        <li>• Esto es {Math.round(porcentajeDeIngresoEnLaJubilación)}% de tu ingreso actual</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h5 className="text-sm font-medium text-gray-900">Recomendaciones</h5>
                    <ul className="mt-1 space-y-1 text-sm text-gray-600">
                      {tasaDeAhorro < 15 && (
                        <li>• Intenta aumentar tu tasa de ahorro a al menos 15% para mejores resultados a largo plazo</li>
                      )}
                      {porcentajeDeIngresoEnLaJubilación < 70 && (
                        <li>• Tu ingreso proyectado en la jubilación es inferior a los niveles recomendados (70-80% del ingreso antes de la jubilación)</li>
                      )}
                      {retornoDeInversión < 5 && (
                        <li>• Considera una estrategia de inversión más orientada al crecimiento para aumentar los rendimientos potenciales</li>
                      )}
                      {retornoDeInversión > 10 && (
                        <li>• Tu retorno esperado puede ser optimista; considera planificar con estimaciones más conservadoras</li>
                      )}
                      {gastosMensuales > ingresoMensual * 0.8 && (
                        <li>• Tus gastos son altos en relación con tu ingreso; encontrar formas de reducir gastos podría mejorar significativamente los resultados</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Nota: Este simulador proporciona estimaciones basadas en la información que proporcionas y asume contribuciones y rendimientos consistentes. 
            Los resultados reales variarán según el rendimiento del mercado, la inflación y los cambios en tu situación financiera.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinancialSimulator;