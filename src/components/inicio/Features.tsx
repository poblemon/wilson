import React from 'react';
import { motion } from 'framer-motion';
import { 
  Wallet, 
  TrendingUp, 
  Target, 
  BookOpen, 
  Users, 
  Calculator 
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, link, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="h-12 w-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link to={link} className="text-emerald-600 font-medium hover:text-emerald-700 inline-flex items-center">
        Saber más <span className="ml-1">→</span>
      </Link>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Wallet className="h-6 w-6" />,
      title: "Ahorro Inteligente",
      description: "Aprende estrategias de ahorro efectivas adaptadas a tu etapa de vida y nivel de ingresos.",
      link: "/savings",
      delay: 1
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Fundamentos de Inversión",
      description: "Comprende diferentes opciones de inversión y cómo empezar con pequeñas cantidades.",
      link: "/investing",
      delay: 2
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Planificación Futura",
      description: "Establece metas financieras y crea planes de acción para lograr estabilidad a largo plazo.",
      link: "/future-plans",
      delay: 3
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Biblioteca de Recursos",
      description: "Accede a nuestra colección seleccionada de artículos, herramientas y recomendaciones.",
      link: "/resources",
      delay: 4
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Apoyo Comunitario",
      description: "Conéctate con personas que comparten tu mismo viaje financiero.",
      link: "/community",
      delay: 5
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Herramientas Financieras",
      description: "Utiliza nuestras calculadoras y simuladores para visualizar tu crecimiento financiero.",
      link: "/future-plans",
      delay: 6
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Tu Centro de Educación Financiera</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Todo lo que necesitas para construir confianza y seguridad financiera, en un solo lugar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Feature 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              link={feature.link}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;