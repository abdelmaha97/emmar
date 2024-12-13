import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const AboutHero = () => {
  const { t, dir } = useLanguage();

  return (
    <div className="relative bg-primary text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
          alt="Hero background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-3xl" dir={dir}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t('about.hero.title')}
          </h1>
          <p className="text-xl mb-8 text-gray-100">
            {t('about.hero.description')}
          </p>
          <p className="text-lg mb-8 text-gray-100">
            "منصة إعمار هي منصة رقمية مبتكرة تهدف لدعم عمليات إعادة الإعمار والتنمية في السودان والمنطقة."
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              {t('about.hero.learnMore')}
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              {t('about.hero.contactUs')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
