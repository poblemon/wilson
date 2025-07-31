import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, User, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Jamie Chen",
    role: "Diseñador de productos",
    age: 28,
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "Unirme a esta comunidad fue la mejor decisión financiera que he tomado. En solo 6 meses, he pagado $8,000 en deudas de tarjetas de crédito y he creado un fondo de emergencia por primera vez. La guía paso a paso hizo que fuera muy fácil empezar.",
    stars: 5
  },
  {
    name: "Marcus Johnson",
    role: "Desarrollador de software",
    age: 32,
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "Me intimidaba invertir hasta que encontré esta comunidad. Los foros me ayudaron a entender los fondos indexados, y finalmente abrí mi primera cuenta de inversión. Las preguntas y respuestas de expertos mensuales son increíblemente valiosas y responden preguntas que ni siquiera sabía que debía hacer.",
    stars: 5
  },
  {
    name: "Olivia Rodriguez",
    role: "Especialista en marketing",
    age: 26,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "Como alguien con ingresos irregulares de freelance, luché con los métodos de presupuesto tradicionales. La comunidad me introdujo a herramientas específicas para ingresos variables, y ahora me siento en control de mis finanzas por primera vez en mi carrera.",
    stars: 5
  },
  {
    name: "David Okafor",
    role: "Profesional de la salud",
    age: 35,
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "La función de socios de responsabilidad cambió todo para mí. Tener a alguien con quien hablar semanalmente sobre mis objetivos de ahorro me mantuvo motivado. He ahorrado $12,000 para un pago inicial de una casa en solo un año – algo que nunca pensé que fuera posible.",
    stars: 4
  },
  {
    name: "Sarah Patel",
    role: "Maestra de primaria",
    age: 29,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "Estaba gastando $300+ al mes en comida para llevar sin darme cuenta. El desafío de seguimiento de gastos en esta comunidad me abrió los ojos. He reducido eso a menos de $100 y he redirigido el ahorro a mis préstamos estudiantiles. Estaré libre de deudas 3 años antes de lo que pensaba.",
    stars: 5
  },
  {
    name: "Ryan Kowalski",
    role: "Gerente de construcción",
    age: 41,
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    quote: "Después de posponer la planificación de la jubilación durante años, la calculadora de jubilación y la guía aquí me ayudaron a entender exactamente cuánto necesito ahorrar. La comunidad me dio la confianza para hablar con RRHH sobre la coincidencia de 401(k) de mi empresa que no estaba utilizando.",
    stars: 5
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(0);
  
  // Get window width for responsive behavior
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Number of testimonials to show at once
  const getItemsToShow = () => {
    if (width < 640) return 1;
    if (width < 1024) return 2;
    return 3;
  };
  
  const itemsToShow = getItemsToShow();
  const totalSlides = testimonials.length - itemsToShow + 1;
  
  const nextTestimonial = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };
  
  return (
    <section className="py-16 bg-gray-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center p-2 bg-yellow-100 rounded-full text-yellow-600 mb-4">
            <Star className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Lo que dicen nuestros miembros de la comunidad</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Historias reales de personas que han transformado sus vidas financieras a través de nuestra comunidad.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`px-4 flex-none w-full sm:w-1/2 lg:w-1/3`}
                >
                  <div className="bg-white rounded-xl shadow-md p-6 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                        {testimonial.image ? (
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="h-full w-full bg-blue-100 flex items-center justify-center">
                            <User  className="h-6 w-6 text-blue-600" />
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.role}, {testimonial.age}</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${
                            i < testimonial.stars ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    
                    <blockquote className="text-gray-600 italic flex-grow">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 -ml-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 -mr-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Testimonio siguiente"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        
        {/* Pagination indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {[...Array(totalSlides)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                currentIndex === index ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300'
              }`}
              aria-label={`Ir a la diapositiva ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;