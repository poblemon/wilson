import React from 'react';
import { Helmet } from 'react-helmet-async';
import InvestmentOptions from '../components/inversion/InvestmentOptions';
import BankVsMarket from '../components/inversion/BankVsMarket';
import GrowthCalculator from '../components/inversion/GrowthCalculator';
import NewsletterSignup from '../components/inicio/NewsletterSignup';

const InvestingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Conceptos básicos de inversión inteligente | WealthWise</title>
        <meta name="description" content="Aprende los conceptos básicos de la inversión, entiende las diferentes opciones de inversión y ve cómo tu dinero puede crecer con el tiempo." />
      </Helmet>
      
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Conceptos básicos de inversión</h1>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
            Haz que tu dinero trabaje para ti con estrategias de inversión inteligentes y a largo plazo
          </p>
        </div>
      </div>
      
      <InvestmentOptions />
      <BankVsMarket />
      <GrowthCalculator />
      <NewsletterSignup />
    </>
  );
};

export default InvestingPage;
