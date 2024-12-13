import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const PartnersSection = () => {
  const { t } = useLanguage();

  const partners = [
    {
      name: 'وزارة المالية',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=300',
    },
    {
      name: 'غرفة التجارة',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=300',
    },
    {
      name: 'البنك الوطني',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=300',
    },
    {
      name: 'مركز الابتكار التكنولوجي',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=300',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('about.partners.title')}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-[150px] h-auto grayscale hover:grayscale-0 transition-all"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
