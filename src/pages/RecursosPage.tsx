import React from 'react';
import { Helmet } from 'react-helmet-async';
import CommonMistakes from '../components/recursos/CommonMistakes';
import FinancialTools from '../components/recursos/FinancialTools';
import RecommendedResources from '../components/recursos/RecommendedResources';
import NewsletterSignup from '../components/inicio/NewsletterSignup';

const ResourcesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Recursos financieros y materiales de aprendizaje | WealthWise</title>
        <meta name="description" content="Amplía tus conocimientos financieros con nuestra colección curada de recursos, herramientas y materiales educativos." />
      </Helmet>
      
      <div className="bg-gradient-to-r from-amber-600 to-orange-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Recursos financieros</h1>
          <p className="mt-4 text-xl text-amber-100 max-w-3xl mx-auto">
            Amplía tus conocimientos financieros con nuestra colección curada de herramientas y materiales educativos
          </p>
        </div>
      </div>
      
      <CommonMistakes />
      <FinancialTools />
      <RecommendedResources />
      <NewsletterSignup />
    </>
  );
};

export default ResourcesPage;