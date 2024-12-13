import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Building2, Users, DollarSign, TrendingUp } from 'lucide-react';
import CountUp from 'react-countup';

const AboutStats: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Building2,
      value: 500,
      label: t('about.stats.companies'),
      suffix: '+'
    },
    {
      icon: Users,
      value: 10000,
      label: t('about.stats.users'),
      suffix: '+'
    },
    {
      icon: DollarSign,
      value: 50,
      label: t('about.stats.transactions'),
      suffix: 'M'
    },
    {
      icon: TrendingUp,
      value: 95,
      label: t('about.stats.satisfaction'),
      suffix: '%'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">
                  <CountUp end={stat.value} duration={2.5} />
                  {stat.suffix}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;