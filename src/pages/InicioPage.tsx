import React from 'react';
import Hero from '../components/inicio/Hero';
import Features from '../components/inicio/Features';
import SavingsPreview from '../components/inicio/SavingsPreview';
import InvestingPreview from '../components/inicio/InvestingPreview';
import NewsletterSignup from '../components/inicio/NewsletterSignup';
import { Helmet } from 'react-helmet-async';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>$$$- Educación financiera para jóvenes adultos</title>
        <meta name="description" content="Empoderar a los jóvenes adultos para construir libertad financiera a través del ahorro, la inversión y la planificación financiera." />
      </Helmet>
      
      <Hero />
      <Features />
      <SavingsPreview />
      <InvestingPreview />
      <NewsletterSignup />
    </>
  );
};

export default HomePage;
