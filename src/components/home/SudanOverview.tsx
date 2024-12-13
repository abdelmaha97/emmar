import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Landmark, TreePine, Mountain, Building2 } from 'lucide-react';

const SudanOverview = () => {
  const { t, language } = useLanguage();
  const direction = language === 'ar' ? 'rtl' : 'ltr';

  const features = [
    {
      icon: Landmark,
      title: t('home.sudan.infrastructure.title'),
      description: t('home.sudan.infrastructure.description'),
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000'
    },
    {
      icon: TreePine,
      title: t('home.sudan.resources.title'),
      description: t('home.sudan.resources.description'),
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=2000'
    },
    {
      icon: Mountain,
      title: t('home.sudan.tourism.title'),
      description: t('home.sudan.tourism.description'),
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000'
    },
    {
      icon: Building2,
      title: t('home.sudan.development.title'),
      description: t('home.sudan.development.description'),
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000'
    }
  ];

  return (
    <section className="py-16 bg-gray-50" dir={direction}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('home.sudan.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg h-80"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-6 h-6" />
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-200">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SudanOverview;