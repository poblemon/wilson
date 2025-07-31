import React from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, DollarSign, Clock } from 'lucide-react';

const EmergencyFund: React.FC = () => {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-2 bg-emerald-100 rounded-full text-emerald-600 mb-4">
            <Shield className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Tu red de seguridad financiera</h2>
          <p className="mt-4 text-xl text-gray-600">
            Un fondo de emergencia es tu primera línea de defensa contra sorpresas financieras.
          </p>
        </motion.div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              ¿Qué es un fondo de emergencia?
            </h3>
            <p className="text-gray-600 mb-6">
              Un fondo de emergencia es dinero que apartas específicamente para gastos inesperados o emergencias financieras. 
              Es la base de la seguridad financiera, dándote tranquilidad y protegiéndote de endeudarte cuando surgen costos inesperados.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <motion.div 
                className="bg-amber-50 p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <AlertTriangle className="h-8 w-8 text-amber-600 mb-3" />
                <h4 className="text-lg font-medium text-gray-900 mb-2">Protege contra</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Facturas médicas inesperadas</li>
                  <li>• Reparaciones de automóvil</li>
                  <li>• Reparaciones de hogar</li>
                  <li>• Pérdida de empleo</li>
                  <li>• Reducción de ingresos</li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="bg-emerald-50 p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <DollarSign className="h-8 w-8 text-emerald-600 mb-3" />
                <h4 className="text-lg font-medium text-gray-900 mb-2">¿Cuánto ahorrar?</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Principiantes: $1,000 de fondo inicial</li>
                  <li>• Estándar: 3-6 meses de gastos</li>
                  <li>• Autónomos: 6-12 meses</li>
                  <li>• Dependientes: 6+ meses</li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="bg-blue-50 p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Clock className="h-8 w-8 text-blue-600 mb-3" />
                <h4 className="text-lg font-medium text-gray-900 mb-2">Cronograma de construcción</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Comienza con depósitos pequeños y regulares</li>
                  <li>• Apunta al 10% de cada pago</li>
                  <li>• Construye gradualmente con el tiempo</li>
                  <li>• Celebra pequeños logros</li>
                </ul>
              </motion.div>
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              ¿Dónde mantener tu fondo de emergencia?
            </h3>
            <p className="text-gray-600 mb-6">
              Tu fondo de emergencia debe ser fácilmente accesible pero separado de tu dinero de gastos diarios.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h4 className="font-medium text-gray-900 mb-2">Mejores opciones:</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mt-0.5">✓</div>
                  <p className="ml-3"><strong>Cuenta de ahorro de alto rendimiento:</strong> Gana intereses mientras mantiene los fondos accesibles</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mt-0.5">✓</div>
                  <p className="ml-3"><strong>Cuenta de mercado de dinero:</strong> Puede ofrecer un interés ligeramente mejor con retiradas limitadas</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mt-0.5">✓</div>
                  <p className="ml-3"><strong>Cuenta de gestión de efectivo:</strong> Combina características de cuentas de cheques y ahorros</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Evita estas opciones:</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 mt-0.5">✗</div>
                  <p className="ml-3"><strong>Inversiones:</strong> Demasiado volátiles y pueden perder valor cuando necesitas el dinero</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 mt-0.5">✗</div>
                  <p className="ml-3"><strong>Certificados de depósito:</strong> Penalties por retiro anticipado</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 mt-0.5">✗</div>
                  <p className="ml-3"><strong>Cuenta de cheques regular:</strong> Demasiado fácil de gastar y típicamente no gana intereses</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyFund;