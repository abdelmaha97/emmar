import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Target, Users, Award, Building2 } from 'lucide-react';
import ValueCard from './ValueCard';

const AboutValues: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: t('about.values.transparency.title'),
      description: t('about.values.transparency.description')
    },
    {
      icon: Users,
      title: t('about.values.collaboration.title'),
      description: t('about.values.collaboration.description')
    },
    {
      icon: Award,
      title: t('about.values.efficiency.title'),
      description: t('about.values.efficiency.description')
    },
    {
      icon: Building2,
      title: t('about.values.integrity.title'),
      description: t('about.values.integrity.description')
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('about.values.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;