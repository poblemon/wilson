import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calculator, 
  DollarSign, 
  BarChart3, 
  CreditCard, 
  TrendingUp, 
  Smartphone,
  BookOpen
} from 'lucide-react';

const FinancialTools: React.FC = () => {
  const categoríasDeHerramientas = [
    {
      title: "Aplicaciones de presupuesto",
      icon: <DollarSign className="h-6 w-6" />,
      herramientas: [
        {
          name: "Mint",
          description: "Aplicación gratuita que conecta tus cuentas para rastrear gastos, crear presupuestos y monitorear objetivos.",
          website: "https://mint.intuit.com/",
          plataforma: "Web, iOS, Android",
          precio: "Gratis",
          mejorPara: "Seguimiento de presupuesto visual y categorización de gastos"
        },
        {
          name: "YNAB (You Need A Budget)",
          description: "Aplicación de presupuesto basada en el enfoque de presupuesto cero que te ayuda a asignar cada dólar a un trabajo y planificar para el futuro.",
          website: "https://www.youneedabudget.com/",
          plataforma: "Web, iOS, Android",
          precio: "Suscripción ($14.99/mes o $98.99/año)",
          mejorPara: "Presupuesto proactivo y salir de deudas"
        },
        {
          name: "EveryDollar",
          description: "Herramienta de presupuesto simple basada en el enfoque de presupuesto cero.",
          website: "https://www.ramseysolutions.com/ramseyplus/everydollar",
          plataforma: "Web, iOS, Android",
          precio: "Versión básica gratuita, versión premium de pago",
          mejorPara: "Simplicidad y facilidad de uso"
        }
      ]
    },
    {
      title: "Plataformas de inversión",
      icon: <TrendingUp className="h-6 w-6" />,
      herramientas: [
        {
          name: "Vanguard",
          description: "Plataforma de inversión conocida por fondos de índice de bajo costo y ETFs.",
          website: "https://investor.vanguard.com/",
          plataforma: "Web, iOS, Android",
          precio: "No hay tarifas de cuenta; ratios de gastos bajos en fondos",
          mejorPara: "Inversión a largo plazo en fondos de índice de bajo costo"
        },
        {
          name: "Fidelity",
          description: "Plataforma de inversión integral con herramientas de investigación excelentes y fondos de índice sin tarifas.",
          website: "https://www.fidelity.com/",
          plataforma: "Web, iOS, Android",
          precio: "No hay tarifas de cuenta; ratios de gastos bajos o cero en muchos fondos",
          mejorPara: "Opciones de inversión integral y investigación"
        },
        {
          name: "Robinhood",
          description: "Plataforma de trading sin comisiones enfocada en acciones, ETFs y criptomonedas.",
          website: "https://robinhood.com/",
          plataforma: "iOS, Android",
          precio: "Gratis",
          mejorPara: "Principiantes que buscan una interfaz simple y operaciones sin comisiones"
        }
      ]
    },
    {
      title: "Calculadoras financieras",
      icon: <Calculator className="h-6 w-6" />,
      herramientas: [
        {
          name: "Calculadoras de Bankrate",
          description: "Colección de calculadoras para hipotecas, préstamos, jubilación y más.",
          website: "https://www.bankrate.com/calculators/",
          plataforma: "Web",
          precio: "Gratis",
          mejorPara: "Comparar diferentes escenarios financieros"
        },
        {
          name: "Calculadoras de Investor.gov",
          description: "Herramientas oficiales de la SEC para interés compuesto, jubilación y objetivos de ahorro.",
          website: "https://www.investor.gov/financial-tools-calculators",
          plataforma: "Web",
          precio: "Gratis",
          mejorPara: "Cálculos confiables proporcionados por el gobierno"
        },
        {
          name: "Calculadoras de NerdWallet",
          description: "Calculadoras fáciles de usar para diversas decisiones financieras con contenido educativo.",
          website: "https://www.nerdwallet.com/calculators",
          plataforma: "Web",
          precio: "Gratis",
          mejorPara: "Interfaz fácil de usar con contenido educativo"
        }
      ]
    },
    {
      title: "Monitoreo de crédito",
      icon: <CreditCard className="h-6 w-6" />,
      herramientas: [
        {
          name: "Credit Karma",
          description: "Monitoreo de crédito gratuito con recomendaciones personalizadas.",
          website: "https://www.creditkarma.com/",
          plataforma: "Web, iOS, Android",
          precio: "Gratis",
          mejorPara: "Monitoreo regular de crédito y consejos de mejora"
        },
        {
          name: "Annual Credit Report",
          description: "El único sitio web oficial para informes de crédito gratuitos autorizados por la ley federal.",
          website: "https://www.annualcreditreport.com/",
          plataforma: "Web",
          precio: "Informes de crédito gratuitos anuales de cada buró",
          mejorPara: "Informes de crédito oficiales detallados una vez al año"
        },
        {
          name: "Experian",
          description: "Monitoreo de crédito de una de las tres principales agencias de crédito.",
          website: "https://www.experian.com/",
          plataforma: "Web, iOS, Android",
          precio: "Servicio básico gratuito, opciones premium de pago",
          mejorPara: "Acceso a la puntuación FICO y monitoreo de crédito"
        }
      ]
    },
    {
      title: "Educación financiera",
      icon: <BookOpen className="h-6 w-6" />,
      herramientas: [
        {
          name: "Khan Academy Personal Finance",
          description: "Videos y artículos educativos gratuitos sobre diversos temas financieros.",
          website: "https://www.khanacademy.org/college-careers-more/personal-finance",
          plataforma: "Web, iOS, Android",
          precio: "Gratis",
          mejorPara: "Enfoque educativo estructurado para conceptos financieros"
        },
        {
          name: "Investopedia",
          description: "Recursos integral para términos financieros, conceptos y estrategias.",
          website: "https://www.investopedia.com/",
          plataforma: "Web",
          precio: "Contenido gratuito, cursos de pago disponibles",
          mejorPara: "Terminología financiera y conceptos en profundidad"
        },
        {
          name: "Cursos financieros de Coursera",
          description: "Cursos en línea de universidades de primer nivel sobre finanzas personales y inversión.",
          website: "https://www.coursera.org/courses?query=personal%20finance",
          plataforma: "Web, iOS, Android",
          precio: "Gratis para auditar, certificados de pago",
          mejorPara: "Aprendizaje estructurado de profesores universitarios"
        }
      ]
    },
    {
      title: "Aplicaciones financieras integral",
      icon: <Smartphone className="h-6 w-6" />,
      herramientas: [
        {
          name: "Personal Capital",
          description: "Combina seguimiento de inversiones, cálculo de patrimonio neto y planificación de jubilación.",
          website: "https://www.personalcapital.com/",
          plataforma: "Web, iOS, Android",
          precio: "Herramientas gratuitas, gestión de patrimonio de pago",
          mejorPara: "Panel de control financiero integral y planificación de jubilación"
        },
        {
          name: "Empower",
          description: "Plataforma de planificación financiera con presupuesto, seguimiento de inversiones y objetivos financieros.",
          website: "https://www.empower.com/",
          plataforma: "Web, iOS, Android",
          precio: "Herramientas básicas gratuitas",
          mejorPara: "Planificación financiera basada en objetivos"
        },
        {
          name: "Simplifi by Quicken",
          description: "Seguimiento financiero simplificado enfocado en gastos, ahorro y objetivos financieros.",
          website: "https://www.quicken.com/simplifi/",
          plataforma: "Web, iOS, Android",
          precio: "Suscripción ($3.99/mes)",
          mejorPara: "Visión simplificada de tu situación financiera integral"
        }
      ]
    }
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
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full text-blue-600 mb-4">
            <BarChart3 className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Herramientas digitales gratuitas para gestionar tus finanzas</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            La tecnología ha hecho que gestionar el dinero sea más fácil que nunca. Aquí te presentamos algunas de las mejores herramientas digitales para ayudarte a presupuestar, invertir y planificar.
          </p>
        </motion.div>

        <div className="space-y-12">
          {categoríasDeHerramientas.map((categoría, índiceCategoría) => (
            <motion.div
              key={índiceCategoría}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: índiceCategoría * 0.1 }}
            >
              <div className="flex items-center mb-6">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mr-3">
                  {categoría.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">{categoría.title}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoría.herramientas.map((herramienta, índiceHerramienta) => (
                  <div 
                    key={índiceHerramienta} 
                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                  >
                    <div className="p-6">
                      <h4 className="font-semibold text-lg text-gray-900 mb-2">{herramienta.name}</h4>
                      <p className="text-gray-600 mb-4">{herramienta.description}</p>
                      
                      <div className="space-y-2 text-sm mb-4">
                        <div className="flex justify-between">
                          <span className="text-gray-500">Plataforma:</span>
                          <span className="text-gray-700">{herramienta.plataforma}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Precio:</span>
                          <span className="text-gray-700">{herramienta.precio}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">Mejor para:</span>
                          <span className="text-gray-700">{herramienta.mejorPara}</span>
                        </div>
                      </div>
                      
                      <a 
                        href={herramienta.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800"
                      >
                        Visita el sitio web <span className="ml-1">→</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Consejos para elegir herramientas financieras</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">✓</div>
              <p className="ml-3"><strong>Seguridad:</strong> Prioriza herramientas con medidas de seguridad sólidas como autenticación de dos factores y cifrado.</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">✓</div>
              <p className="ml-3"><strong>Privacidad:</strong> Revisa la política de privacidad para entender cómo se utilizarán o compartirán tus datos.</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">✓</div>
              <p className="ml-3"><strong>Costo vs. Valor:</strong> Las herramientas gratuitas pueden ser excelentes, pero las opciones de pago pueden ofrecer características que te ahorran tiempo o dinero.</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5   w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">✓</div>
              <p className="ml-3"><strong>Experiencia del usuario:</strong> Elige herramientas que encuentres intuitivas y agradables de usar; es más probable que te mantengas con ellas.</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">✓</div>
              <p className="ml-3"><strong>Integración:</strong> Las herramientas que funcionan juntas pueden proporcionar una visión más completa de tus finanzas.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FinancialTools;