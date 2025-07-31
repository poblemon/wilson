import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y lema */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <DollarSign className="h-8 w-8 text-emerald-500" />
              <span className="text-xl font-bold text-white">$$$</span>
            </Link>
            <p className="mt-4 text-sm">
              Empoderando a los jóvenes adultos para construir la libertad financiera desde cero.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Aprende
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/savings" className="text-gray-400 hover:text-white">
                  Ahorros
                </Link>
              </li>
              <li>
                <Link to="/investing" className="text-gray-400 hover:text-white">
                  Inversiones
                </Link>
              </li>
              <li>
                <Link to="/future-plans" className="text-gray-400 hover:text-white">
                  Planificación futura
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-white">
                  Recursos
                </Link>
              </li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Recursos
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Calculadoras
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Glosario financiero
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">
              Contáctanos
            </h3>
            <p className="mt-4 text-gray-400">
              ¿Tienes preguntas sobre tu viaje financiero?
            </p>
            <p className="mt-2 text-gray-400">
              Envíanos un correo electrónico a: <a href="mailto:hello@$$$.com" className="text-emerald-400 hover:text-emerald-300">hello@$$$.com</a>
            </p>  
            <Link to="/community" className="mt-4 inline-block px-4 py-2 border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white rounded transition duration-300">
              Únete a nuestra comunidad
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} $$$. Todos los derechos reservados.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Términos de servicio
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Política de cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;