import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle } from 'lucide-react';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Por favor, ingresa un correo electrónico válido');
      return;
    }
    
    setIsSubmitted(true);
    setError('');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="mx-auto h-12 w-12 text-emerald-200" />
          <motion.h2 
            className="mt-4 text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Únete a Nuestra Comunidad de Libertad Financiera
          </motion.h2>
          <motion.p 
            className="mt-4 text-xl text-emerald-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Recibe consejos financieros exclusivos, herramientas y actualizaciones directamente en tu bandeja de entrada.
            Sin spam, solo consejos prácticos para mejorar tu vida financiera.
          </motion.p>
          
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="sm:flex justify-center">
                <div className="min-w-0 flex-1">
                  <label htmlFor="email" className="sr-only">
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Tu correo electrónico"
                    className="block w-full px-4 py-3 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {error && <p className="mt-2 text-left text-sm text-red-300">{error}</p>}
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <button
                    type="submit"
                    className="block w-full rounded-md bg-white px-4 py-3 font-medium text-emerald-700 shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600"
                  >
                    Suscribirse
                  </button>
                </div>
              </form>
            ) : (
              <div className="bg-emerald-500/20 p-6 rounded-md inline-flex items-center">
                <CheckCircle className="h-6 w-6 mr-2 text-emerald-200" />
                <span>¡Gracias por suscribirte! Revisa tu correo para confirmar.</span>
              </div>
            )}
          </motion.div>
          
          <p className="mt-6 text-sm text-emerald-100">
            Respetamos tu privacidad. Cancela tu suscripción cuando quieras.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;