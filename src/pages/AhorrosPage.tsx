import React from 'react';
import { Helmet } from 'react-helmet-async';
import EmergencyFund from '../components/ahorros/EmergencyFund';
import SavingsMethodsTable from '../components/ahorros/SavingsMethodsTable';
import SavingOnLowIncome from '../components/ahorros/SavingOnLowIncome';
import NewsletterSignup from '../components/inicio/NewsletterSignup';

const SavingsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Estrategias de ahorro inteligentes | WealthWise</title>
        <meta name="description" content="Aprende estrategias de ahorro efectivas, crea un fondo de emergencia y entiende diferentes métodos de ahorro para todos los niveles de ingresos." />
      </Helmet>
      
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Estrategias de ahorro</h1>
          <p className="mt-4 text-xl text-emerald-100 max-w-3xl mx-auto">
            La base de la libertad financiera comienza con hábitos de ahorro inteligentes
          </p>
        </div>
      </div>
      
      <EmergencyFund />
      <SavingsMethodsTable />
      <SavingOnLowIncome />
      <NewsletterSignup />
    </>
  );
};

export default SavingsPage;