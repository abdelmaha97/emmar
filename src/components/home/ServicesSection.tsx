import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Megaphone, FileSearch, TrendingUp } from 'lucide-react';

const ServicesSection = () => {
  const { language, t } = useLanguage();
  const isRTL = language === 'ar';

  const services = [
    {
      id: 1,
      icon: Megaphone,
      title: {
        ar: 'خدمات الإعلان الرقمي',
        en: 'Digital Advertising Services'
      },
      description: {
        ar: 'نساعدك في الوصول إلى جمهورك المستهدف بفعالية',
        en: 'We help you reach your target audience effectively'
      },
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=2000'
    },
    {
      id: 2,
      icon: FileSearch,
      title: {
        ar: 'استشارات المناقصات',
        en: 'Tender Consultation'
      },
      description: {
        ar: 'خبراء متخصصون لمساعدتك في عملية تقديم المناقصات',
        en: 'Expert guidance for your tender submissions'
      },
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=2000'
    },
    {
      id: 3,
      icon: TrendingUp,
      title: {
        ar: 'فرص تسويق المشاريع',
        en: 'Project Marketing Opportunities'
      },
      description: {
        ar: 'حلول تسويقية مبتكرة لمشروعك',
        en: 'Innovative marketing solutions for your project'
      },
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <img
                  src={service.image}
                  alt={service.title[language]}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-6 h-6" />
                    <h3 className="text-xl font-bold">{service.title[language]}</h3>
                  </div>
                  <p className="text-sm text-gray-200">{service.description[language]}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesSection;
