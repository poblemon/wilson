import React from 'react';
import { Helmet } from 'react-helmet-async';
import CommunityIntro from '../components/comunidad/CommunityIntro';
import Testimonials from '../components/comunidad/Testimonials';
import NewsletterForm from '../components/comunidad/NewsletterForm';

const CommunityPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Únase a nuestra comunidad financiera| WealthWise</title>
        <meta name="description" content="Connect with others on the journey to financial freedom. Join our community, get exclusive content, and accelerate your financial growth." />
      </Helmet>
      
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white">Únete a Nuestra Comunidad</h1>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
            Conéctate con otros en el camino hacia la libertad financiera
          </p>
        </div>
      </div>
      
      <CommunityIntro />
      <Testimonials />
      <NewsletterForm />
    </>
  );
};

export default CommunityPage;
