import React from 'react';
import { motion } from 'framer-motion';
import { Target, Award, Goal, AlertTriangle } from 'lucide-react';

const FinancialPlanSteps: React.FC = () => {
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
            <Target className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Cómo crear tu plan financiero en 5 pasos</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Un plan financiero sólido crea un mapa para tu dinero y te ayuda a alcanzar tus objetivos.
          </p>
        </motion.div>

        <div className="space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="md:flex">
              <div className="bg-blue-600 md:flex md:w-24 md:justify-center md:items-center">
                <span className="hidden md:block text-4xl font-bold text-white">1</span>
              </div>
              <div className="p-8">
                <div className="flex items-center md:hidden mb-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                    1
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Evalúa tu situación financiera actual</h3>
                </div>
                <div className="hidden md:block mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900">Evalúa tu situación financiera actual</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Antes de que puedas planificar hacia dónde vas, necesitas saber dónde estás. Este paso crea una imagen clara de tu salud financiera.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Toma estas acciones:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Calcula tu patrimonio neto (activos menos pasivos)
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Registra tus ingresos y gastos durante al menos un mes
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Enumera todas tus deudas con tasas de interés y pagos mínimos
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Analiza tus patrones de gasto e identifica áreas para mejorar
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Verifica tu puntaje de crédito y reporte
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Herramientas para ayudarte:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Aplicaciones de presupuesto (Mint, YNAB, Personal Capital)
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Estados de cuenta bancaria y tarjeta de crédito
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Informes de crédito anuales gratuitos
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        Calculadoras de patrimonio neto
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="md:flex">
              <div className="bg-emerald-600 md:flex md:w-24 md:justify-center md:items-center">
                <span className="hidden md:block text-4xl font-bold text-white">2</span>
              </div>
              <div className="p-8">
                <div className="flex items-center md:hidden mb-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mr-4">
                    2
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Define tus objetivos financieros</h3>
                </div>
                <div className="hidden md:block mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900">Define tus objetivos financieros</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Los objetivos claros proporcionan dirección y motivación para tu plan financiero. Deben ser específicos, medibles, alcanzables, relevantes y limitados en el tiempo (SMART).
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Objetivos a corto plazo (0-2 años)</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        Crear un fondo de emergencia
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        Pagar deudas de alta tasa de interés
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        Ahorrar para una vacación
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        Comprar electrodomésticos nuevos
                      </li>
                    </ul>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Objetivos a mediano plazo (2-5 años)</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        Ahorrar para un pago inicial de una casa
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        Pagar préstamos estudiantiles
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        Ahorrar para una boda
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        Iniciar un negocio
                      </li>
                    </ul>
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Objetivos a largo plazo (5+ años)</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        Planificación de la jubilación
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        Pagar una hipoteca
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        Financiar la educación de tus hijos
                      </li>
                      <li className="flex items-start">
                        <span className="text-emerald-500 mr-2">•</span>
                        Lograr la independencia financiera
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="md:flex">
              <div className="bg-purple-600 md:flex md:w-24 md:justify-center md:items-center">
                <span className="hidden md:block text-4xl font-bold text-white">3</span>
              </div>
              <div className="p-8">
                <div className="flex items-center md:hidden mb-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-4">
                    3
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Crea un presupuesto y un plan de ahorro</h3>
                </div>
                <div className="hidden md:block mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900">Crea un presupuesto y un plan de ahorro</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Un presupuesto es la base de tu plan financiero, ayudándote a asignar recursos y seguir el progreso hacia tus objetivos.
                </p>
                
                <div className="mt-6">
                  <h4 className="font-medium text-gray-900 mb-3">Componentes clave de tu presupuesto deben incluir:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mt-0.5">1</div>
                          <p className="ml-3"><strong>Seguimiento de ingresos:</strong> Enumera todas las fuentes de ingresos después de impuestos</p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mt-0.5">2</div>
                          <p className="ml-3"><strong>Gastos fijos:</strong> Alquiler/hipoteca, servicios públicos, seguros, pagos de deudas</p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mt-0.5">3</div>
                          <p className="ml-3"><strong>Gastos variables:</strong> Comestibles, comida fuera de casa, entretenimiento, compras</p>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mt-0.5">4</div>
                          <p className="ml-3"><strong>Asignaciones de ahorro:</strong> Fondo de emergencia, jubilación, objetivos específicos</p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mt-0.5">5</div>
                          <p className="ml-3"><strong>Estrategia de reembolso de deudas:</strong> Prioriza deudas de alta tasa de interés</p>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mt-0.5">6</div>
                          <p className="ml-3"><strong>Transferencias automáticas:</strong> Configura pagos automáticos a cuentas de ahorro</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Consejo profesional: La regla del 50/30/20</h4>
                  <p className="text-gray-600">
                    Un marco simple para presupuestar: asigna el 50% de tus ingresos a necesidades, el 30% a deseos y el 20% a ahorro y reembolso de deudas. Ajusta estos porcentajes según tu situación personal y objetivos.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="md:flex">
              <div className="bg-amber-600 md:flex md:w-24 md:justify-center md:items-center">
                <span className="hidden md:block text-4xl font-bold text-white">4</span>
              </div>
              <div className="p-8">
                <div className="flex items-center md:hidden mb-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mr-4">
                    4
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Implementa una estrategia de inversión</h3>
                </div>
                <div className="hidden md:block mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900">Implementa una estrategia de inversión</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  La inversión ayuda a que tu dinero crezca con el tiempo y es esencial para alcanzar objetivos financieros a largo plazo como la jubilación.
                </p>
                
                <div className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3">Consideraciones clave de inversión:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span>
                          Tu tolerancia al riesgo y horizonte de tiempo
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span>
                          Asignación de activos (acciones, bonos, efectivo, alternativas)
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span>
                          Cuentas con ventajas fiscales (401(k), IRA, HSA)
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span>
                          Diversificación en diferentes clases de activos
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span>
                          Costos y comisiones de inversión
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-500 mr-2">•</span>
                          Estrategia de reequilibrio regular
                        </li>
                      </ul>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-3">Enfoque de inversión por edad:</h4>
                      <div className="space-y-3">
                        <div>
                          <p className="font-medium">En tus 30 (horizonte de tiempo más largo):</p>
                          <div className="mt-1 flex items-center">
                            <span className="text-sm text-gray-600 w-20">Acciones:</span>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div className="bg-amber-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                            </div>
                            <span className="ml-2 text-sm text-gray-600">80%</span>
                          </div>
                          <div className="mt-1 flex items-center">
                            <span className="text-sm text-gray-600 w-20">Bonos:</span>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '15%' }}></div>
                            </div>
                            <span className="ml-2 text-sm text-gray-600">15%</span>
                          </div>
                          <div className="mt-1 flex items-center">
                            <span className="text-sm text-gray-600 w-20">Efectivo:</span>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div className="bg-green-600 h-2 rounded-full" style={{ width: '5%' }}></div>
                            </div>
                            <span className="ml-2 text-sm text-gray-600">5%</span>
                          </div>
                        </div>
                        <div>
                          <p className="font-medium">En tus 40 (horizonte de tiempo moderado):</p>
                          <div className="mt-1 flex items-center">
                            <span className="text-sm text-gray-600 w-20">Acciones:</span>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div className="bg-amber-600 h-2 rounded-full" style={{ width: '70%' }}></div>
                            </div>
                            <span className="ml-2 text-sm text-gray-600">70%</span>
                          </div>
                          <div className="mt-1 flex items-center">
                            <span className="text-sm text-gray-600 w-20">Bonos:</span>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                            </div>
                            <span className="ml-2 text-sm text-gray-600">25%</span>
                          </div>
                          <div className="mt-1 flex items-center">
                            <span className="text-sm text-gray-600 w-20">Efectivo:</span>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div className="bg-green-600 h-2 rounded-full" style={{ width: '5%' }}></div>
                            </div>
                            <span className="ml-2 text-sm text-gray-600">5%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <div className="md:flex">
              <div className="bg-red-600 md:flex md:w-24 md:justify-center md:items-center">
                <span className="hidden md:block text-4xl font-bold text-white">5</span>
              </div>
              <div className="p-8">
                <div className="flex items-center md:hidden mb-4">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 mr-4">
                    5
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Revisa y ajusta regularmente</h3>
                </div>
                <div className="hidden md:block mb-4">
                  <h3 className="text-2xl font-semibold text-gray-900">Revisa y ajusta regularmente</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  La planificación financiera es un proceso continuo. Las revisiones regulares ayudan a asegurarte de que tu plan se mantenga relevante para tus circunstancias y objetivos cambiantes.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Programa revisiones regulares:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <div>
                          <strong>Mensual:</strong> Sigue el rendimiento del presupuesto y los hábitos de gasto
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <div>
                          <strong>Trimestral:</strong> Revisa el rendimiento de la inversión y haz ajustes menores
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <div>
                          <strong>Anual:</strong> Revisa completa del plan financiero, objetivos y progreso
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <div>
                          <strong>Cambios en la vida:</strong> Matrimonio, hijos, cambios de trabajo, herencia
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <AlertTriangle className="h-6 w-6 text-red-600" />
                      </div>
                      <div className="ml-3">
                        <h4 className="font-medium text-gray-900 mb-2">Señales de advertencia de que tu plan necesita ajustes</h4>
                        <ul className="space-y-1 text-gray-600">
                          <li>• Gastar consistentemente más de lo que ganas</li>
                          <li>• Incapacidad de alcanzar objetivos de ahorro</li>
                          <li>• Cambios significativos en la vida (matrimonio, hijos, pérdida de empleo)</li>
                          <li>• Cambios significativos en el mercado que afectan las inversiones</li>
                          <li>• Nuevos objetivos o prioridades financieras</li>
                          <li>• Cambios en las leyes o regulaciones fiscales</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-gray-100 p-4 rounded-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Award className="h-8 w-8 text-gray-700" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">Cuándo considerar ayuda profesional</h4>
                      <p className="text-gray-600 mt-1">
                        Aunque muchos aspectos de la planificación financiera se pueden hacer de manera independiente, considera consultar a un planificador financiero para situaciones complejas como la planificación fiscal, la planificación de la herencia, la gestión de inversiones para carteras más grandes, o cuando ocurran transiciones importantes en la vida.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg"
        >
          <div className="flex items-center mb-6">
            <Goal className="h-8 w-8 text-blue-600 mr-4" />
            <h3 className="text-2xl font-bold text-gray-900">Recuerda: Comienza desde donde estás</h3>
          </div>
          <p className="text-gray-700">
            El paso más importante en la planificación financiera es simplemente comenzar. No te sientas intimidado por el proceso o preocupado por empezar demasiado tarde. El mejor plan financiero es aquel que puedes mantener consistentemente, así que comienza con pasos pequeños y construye desde allí.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Descarga nuestra hoja de planificación
            </a>
            <a 
              href="#" 
              className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Ver video tutorial
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinancialPlanSteps;