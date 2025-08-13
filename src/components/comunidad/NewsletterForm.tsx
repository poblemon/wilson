import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, X } from 'lucide-react';

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [interests, setInterests] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{email?: string; name?: string}>({});

  const interestOptions = [
    { id: 'saving', label: 'Estrategias de ahorro' },
    { id: 'investing', label: 'Inversión básica' },
    { id: 'retirement', label: 'Planificación de la jubilación' },
    { id: 'debt', label: 'Reembolso de deudas' },
    { id: 'budgeting', label: 'Consejos de presupuesto' },
    { id: 'credit', label: 'Mejora del crédito' },
  ];

  const handleInterestChange = (id: string) => {
    if (interests.includes(id)) {
      setInterests(interests.filter(interest => interest !== id));
    } else {
      setInterests([...interests, id]);
    }
  };

  const validateForm = () => {
    const newErrors: {email?: string; name?: string} = {};
    
    if (!email) {
      newErrors.email = 'El correo electrónico es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Por favor, ingresa una dirección de correo electrónico válida';
    }
    
    if (!name) {
      newErrors.name = 'El nombre es obligatorio';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        const response = await fetch('/api/newsletter', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, interests }),
        });
        if (response.ok) {
          setIsSubmitted(true);
        } else {
          const data = await response.json();
          alert(data.error || 'Error al suscribirse. Inténtalo de nuevo.');
        }
      } catch (error) {
        alert('Error de red. Inténtalo de nuevo.');
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700" id="newsletter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center p-2 bg-white rounded-full text-blue-600 mb-4">
              <Mail className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold text-white">Únete a nuestro boletín de libertad financiera</h2>
            <p className="mt-4 text-xl text-blue-100">
              Recibe consejos semanales, recursos exclusivos y únete a una comunidad de personas que trabajan hacia la independencia financiera.
            </p>
          </motion.div>

          {!isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Suscríbete para recibir consejos financieros semanales</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Tu nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`block w-full rounded-md shadow-sm ${
                        errors.name 
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                          : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Dirección de correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`block w-full rounded-md shadow-sm ${
                        errors.email 
                          ? 'border-red-300 focus:border-red-500 focus:ring-red-500' 
                          : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>
                  
                  <div>
                    <span className="block text-sm font-medium text-gray-700 mb-2">
                      Estoy interesado en (selecciona todos los que apliquen):
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {interestOptions.map((option) => (
                        <div key={option.id} className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id={option.id}
                              type="checkbox"
                              checked={interests.includes(option.id)}
                              onChange={() => handleInterestChange(option.id)}
                              className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor={option.id} className="text-gray-700">
                              {option.label}
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Suscríbete al boletín
                    </button>
                  </div>
                </div>
              </form>
              
              <p className="mt-4 text-sm text-gray-500 text-center">
                Respetamos tu privacidad. Cancela la suscripción en cualquier momento.
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-8 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-2 bg-green-100 rounded-full">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">¡Gracias por suscribirte!</h3>
              <p className="text-gray-600 mb-6">
                Te hemos enviado un correo electrónico de confirmación a <span className="font-medium">{email}</span>. 
                Revisa tu bandeja de entrada para completar el proceso de suscripción.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">¿Qué sigue?</h4>
                <ul className="text-left space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">✓</div>
                    <p className="ml-3">Revisa tu correo electrónico para un mensaje de bienvenida</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">✓</div>
                    <p className="ml-3">Agrega nuestro correo electrónico a tus contactos para evitar filtros de spam</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">✓</div>
                    <p className="ml-3">Busca tu correo electrónico en tu bandeja de entrada y haz clic en el enlace de confirmación</p>
                  </li>
                </ul>
              </div>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                <X className="h-4 w-4 mr-1" />
                Cerrar este mensaje
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default NewsletterForm;