import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { TrendingUp, FileText, Building2, Users } from 'lucide-react';
import CountUp from 'react-countup';

const ActivityStats = () => {
  const { t, language } = useLanguage();
  const direction = language === 'ar' ? 'rtl' : 'ltr';

  const stats = [
    {
      icon: FileText,
      value: 1234,
      label: t('home.stats.activeTenders'),
      prefix: '',
      suffix: ''
    },
    {
      icon: Building2,
      value: 567,
      label: t('home.stats.ongoingProjects'),
      prefix: '',
      suffix: ''
    },
    {
      icon: Users,
      value: 890,
      label: t('home.stats.registeredCompanies'),
      prefix: '',
      suffix: ''
    },
    {
      icon: TrendingUp,
      value: 95,
      label: t('home.stats.successRate'),
      prefix: '',
      suffix: '%'
    }
  ];

  return (
    <section className="py-16 bg-white" dir={direction}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {t('home.stats.title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('home.stats.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">
                  {stat.prefix}
                  <CountUp end={stat.value} duration={2.5} />
                  {stat.suffix}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link 
            to="/results"
            className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all"
          >
            {t('common.viewAll')}
            {direction === 'rtl' ? '←' : '→'}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ActivityStats;