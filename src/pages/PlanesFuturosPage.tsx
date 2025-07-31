import React from 'react';
import { Helmet } from 'react-helmet-async';
import RetirementChecklist from '../components/planesFuturos/RetirementChecklist';
import FinancialPlanSteps from '../components/planesFuturos/FinancialPlanSteps';
import FinancialSimulator from '../components/planesFuturos/FinancialSimulator';
import NewsletterSignup from '../components/inicio/NewsletterSignup';

const FuturePlansPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Planificación financiera futura| WealthWise</title>
        <meta name="description" content="Create your financial plan, prepare for retirement, and visualize your financial future with our interactive tools." />
      </Helmet>
      
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Planificación Financiera Futura</h1>
          <p className="mt-4 text-xl text-purple-100 max-w-3xl mx-auto">
            Convierte tus sueños financieros en planes alcanzables con pasos accionables
          </p>
        </div>
      </div>
      
      <RetirementChecklist />
      <FinancialPlanSteps />
      <FinancialSimulator />
      <NewsletterSignup />
    </>
  );
};

export default FuturePlansPage;
