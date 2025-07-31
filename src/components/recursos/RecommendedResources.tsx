import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Youtube } from 'lucide-react';

const RecommendedResources: React.FC = () => {
  const libros = [
    {
      title: "La psicología del dinero",
      author: "Morgan Housel",
      year: 2020,
      description: "Explora cómo nuestra relación con el dinero está influenciada por la psicología más que por la pura finanza, con lecciones atemporales sobre la riqueza, la codicia y la felicidad.",
      bestFor: "Entender los aspectos emocionales y psicológicos de la gestión del dinero",
      difficulty: "Principiante a Intermedio",
      keyTakeaways: [
        "Las decisiones financieras no son solo sobre matemáticas, sino sobre comportamiento y psicología",
        "Construir riqueza es sobre tomar decisiones buenas de manera consistente con el tiempo, no sobre tener suerte una vez",
        "Cada persona tiene objetivos y tolerancias al riesgo diferentes, por lo que no hay una 'forma correcta' única de gestionar el dinero"
      ]
    },
    {
      title: "Te enseñaré a ser rico",
      author: "Ramit Sethi",
      year: 2019,
      description: "Un programa práctico de 6 semanas para jóvenes adultos para tomar el control de sus finanzas con consejos sin rodeos sobre banca, ahorro e inversión.",
      bestFor: "Jóvenes de 20-30 años que buscan un plan financiero accionable",
      difficulty: "Principiante",
      keyTakeaways: [
        "Automatiza tus finanzas para asegurar un ahorro y una inversión consistentes",
        "Enfoca tu energía en 'grandes victorias' en lugar de pequeños gastos como el café",
        "Utiliza tarjetas de crédito de manera responsable para obtener beneficios y construir historial crediticio"
      ]
    },
    {
      title: "El camino simple hacia la riqueza",
      author: "J.L. Collins",
      year: 2016,
      description: "Una guía directa hacia la independencia financiera a través de la inversión en fondos de índice de bajo costo, basada en las cartas del autor a su hija.",
      bestFor: "Personas que buscan una estrategia de inversión sencilla",
      difficulty: "Principiante a Intermedio",
      keyTakeaways: [
        "Invierte en fondos de índice de bajo costo que siguen el mercado total de acciones",
        "Evita la deuda y mantén una alta tasa de ahorro",
        "La simplicidad supera la complejidad en la mayoría de las estrategias de inversión"
      ]
    },
    {
      title: "Tu dinero o tu vida",
      author: "Vicki Robin & Joe Dominguez",
      year: 2018,
      description: "Un enfoque holístico para la gestión del dinero que conecta las decisiones financieras con la energía vital y los valores, con un programa de 9 pasos para transformar tu relación con el dinero.",
      bestFor: "Aquellos que buscan alinear sus decisiones financieras con sus valores personales",
      difficulty: "Intermedio",
      keyTakeaways: [
        "El dinero representa la energía vital intercambiada por horas trabajadas",
        "Seguir cada centavo ayuda a traer conciencia sobre los hábitos de gasto",
        "La independencia financiera proviene de reducir gastos e invertir la diferencia"
      ]
    },
    {
      title: "El millonario de la puerta de al lado",
      author: "Thomas J. Stanley & William D. Danko",
      year: 1996,
      description: "Insights basados en la investigación sobre los hábitos y características de los ricos en Estados Unidos, revelando que la mayoría de los millonarios viven de manera frugal y construyen riqueza lentamente.",
      bestFor: "Entender la mentalidad y los hábitos que llevan a la riqueza",
      difficulty: "Principiante",
      keyTakeaways: [
        "La mayoría de los millonarios son frugales y viven por debajo de sus posibilidades",
        "Construir riqueza requiere disciplina sobre el gasto ostentoso",
        "La independencia financiera es más importante que mostrar un alto estatus social"
      ]
    },
    {
      title: "La guía de Bogleheads para invertir",
      author: "Taylor Larimore, Mel Lindauer, & Michael LeBoeuf",
      year: 2014,
      description: "Una guía detallada para crear un plan de inversión simple y efectivo basado en los principios del fundador de Vanguard, John Bogle.",
      bestFor: "Aquellos que están listos para aprender conceptos de inversión más avanzados",
      difficulty: "Intermedio",
      keyTakeaways: [
        "Enfócate en fondos de índice de bajo costo y diversificados ampliamente",
        "La asignación de activos es la decisión de inversión más importante",
        "La inversión eficiente en impuestos puede aumentar significativamente los rendimientos"
      ]
    }
  ];

  const canalesDeYoutube = [
    {
      name: "Two Cents",
      creator: "PBS Digital Studios",
      subscribers: "400K+",
      description: "Videos educativos que desglosan temas financieros complejos de manera accesible y entretenida con alta calidad de producción.",
      bestFor: "Aprendices visuales que buscan explicaciones claras de conceptos financieros",
      recommendedVideo: "¿Por qué el interés compuesto es tan poderoso?",
      url: "https://www.youtube.com/c/TwoCentsPBS"
    },
    {
      name: "The Plain Bagel",
      creator: "Richard Coffin",
      subscribers: "600K+",
      description: "Un profesional de las finanzas explica conceptos de inversión con profundidad y sutileza, enfocándose en la educación más que en la publicidad.",
      bestFor: "Entender conceptos de inversión más allá de los básicos",
      recommendedVideo: "Cómo construir una cartera simple",
      url: "https://www.youtube.com/channel/UCFCEuCsyWP0YkP3CZ3Mr01Q"
    },
    {
      name: "Graham Stephan",
      creator: "Graham Stephan",
      subscribers: "4M+",
      description: "Un inversor en bienes raíces y entusiasta de las finanzas compartiendo consejos de finanzas personales, temas de dinero para millennials y su propio viaje financiero.",
      bestFor: "Jóvenes adultos que buscan contenido financiero relatable",
      recommendedVideo: "Cómo gestiono mi dinero",
      url: "https://www.youtube.com/c/GrahamStephan"
    },
    {
      name: "The Financial Diet",
      creator: "Chelsea Fagan",
      subscribers: "1M+",
      description: "Un enfoque holístico para las finanzas personales que aborda los aspectos emocionales y de estilo de vida de la gestión del dinero.",
      bestFor: "Mujeres y principiantes que buscan contenido financiero inclusivo y enfocado en el estilo de vida",
      recommendedVideo: "8 hábitos financieros que cambiaron mi vida",
      url: "https://www.youtube.com/c/thefinancialdiet"
    },
    {
      name: "Money Guy Show",
      creator: "Brian Preston & Bo Hanson",
      subscribers: "700K+",
      description: "Planificadores financieros certificados que brindan consejos de grado profesional en un formato accesible, con un enfoque en estrategias de construcción de riqueza probadas.",
      bestFor: "Espectadores más avanzados que buscan insights de planificación financiera detallados",
      recommendedVideo: "Orden de operaciones financieras",
      url: "https://www.youtube.com/c/MoneyGuyShow"
    },
    {
      name: "Nate O'Brien",
      creator: "Nate O'Brien",
      subscribers: "1M+",
      description: "Contenido enfocado en el gasto consciente, el ahorro, la inversión y la generación de ingresos pasivos con una perspectiva minimalista.",
      bestFor: "Aquellos interesados en la conexión entre el minimalismo y la libertad financiera",
      recommendedVideo: "Cómo invertir como principiante",
      url: "https://www.youtube.com/c/NateOBrien"
    }
  ];

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
            <BookOpen className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Recursos recomendados para la educación financiera</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Continúa tu educación financiera con estos recursos de alta calidad seleccionados para diferentes estilos de aprendizaje y niveles de experiencia.
          </p>
        </motion.div>

        {/* Sección de libros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center mb-8">
            <BookOpen className="h-7 w-7 text-purple-600 mr-3" />
            <h3 className="text-2xl font-semibold text-gray-900">Libros financieros recomendados</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {libros.map((libro, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                <div className="p-6">
                  <h4 className="font-semibold text-lg text-gray-900 mb-1">{libro.title}</h4>
                  <p className="text-gray-600 text-sm mb-3">por {libro.author} ({libro.year})</p>
                  
                  <p className="text-gray-600 mb-4 text-sm">{libro.description}</p>
                  
                  <div className="flex space-x-2 mb-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      {libro.difficulty}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {libro.bestFor.includes("Beginner") ? "Amigable para principiantes" : "Conceptos avanzados"}
                    </span>
                  </div>
                  
                  <div className="mt-4">
                    <h5 className="text-sm font-medium text-gray-900 mb-2">Puntos clave:</h5>
                    <ul className="space-y-1 text-xs text-gray-600">
                      {libro.keyTakeaways.map((takeaway, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-purple-500 mr-1.5 flex-shrink-0">•</span>
                          <span>{takeaway}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Sección de canales de YouTube */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center mb-8">
            <Youtube className="h-7 w-7 text-red-600 mr-3" />
            <h3 className="text-2xl font-semibold text-gray-900">Canales de YouTube recomendados para la educación financiera</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {canalesDeYoutube.map((canal, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                <div className="p-6">
                  <h4 className="font-semibold text-lg text-gray-900 mb-1">{canal.name}</h4>
                  <p className="text-gray-600 text-sm mb-3">por {canal.creator} • {canal.subscribers} suscriptores</p>
                  
                  <p className="text-gray-600 mb-4 text-sm">{canal.description}</p>
                  
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex items-start">
                      <span className="text-gray-500 mr-2 flex-shrink-0">Mejor para:</span>
                      <span className="text-gray-700">{canal.bestFor}</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-gray-500 mr-2 flex-shrink-0">Prueba primero:</span>
                      <span className="text-gray-700">"{canal.recommendedVideo}"</span>
                    </div>
                  </div>
                  
                  <a 
                    href={canal.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-600 hover:text-red-800 text-sm"
                  >
                    Visita el canal <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Sección de consejos de lectura */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Cómo obtener el máximo provecho de la educación financiera</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Estrategias de lectura activa</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mt-0.5">1</div>
                  <p className="ml-3"><strong>Toma notas</strong> sobre conceptos clave para mejorar la retención</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mt-0.5">2</div>
                  <p className="ml-3"><strong>Aplica conceptos</strong> a tu propia situación financiera mientras aprendes</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mt-0.5">3</div>
                  <p className="ml-3"><strong>Únete a grupos de discusión</strong> para profundizar en la comprensión a través del diálogo</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mt-0.5">4</div>
                  <p className="ml-3"><strong>Lee perspectivas diversas</strong> para desarrollar una visión integral</p>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Consejos de implementación</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">1</div>
                  <p className="ml-3"><strong>Comienza pequeño</strong> con una idea accionable de cada recurso</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">2</div>
                  <p className="ml-3"><strong>Construye lentamente</strong> en lugar de intentar cambios de sistema completos</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">3</div>
                  <p className="ml-3"><strong>Seguimiento de resultados</strong> para ver qué estrategias funcionan mejor para ti</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">4</div>
                  <p className="ml-3"><strong>Sé paciente</strong> - la educación financiera es un viaje de por vida</p>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RecommendedResources;