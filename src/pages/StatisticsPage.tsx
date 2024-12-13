import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell, ResponsiveContainer,
  LineChart, Line
} from 'recharts';
import { Building2, Users, FileText, TrendingUp, DollarSign } from 'lucide-react';
import CountUp from 'react-countup';

const StatisticsPage = () => {
  const { t, language } = useLanguage();
  const direction = language === 'ar' ? 'rtl' : 'ltr';

  // Sample data - In a real app, fetch from API
  const tenderData = [
    { name: 'Jan', active: 65, completed: 45 },
    { name: 'Feb', active: 75, completed: 55 },
    { name: 'Mar', active: 85, completed: 65 },
    { name: 'Apr', active: 95, completed: 75 },
  ];

  const projectStatusData = [
    { name: 'Completed', value: 45 },
    { name: 'In Progress', value: 35 },
    { name: 'Upcoming', value: 20 },
  ];

  const COLORS = ['#06557a', '#0873a3', '#044461'];

  const registrationData = [
    { name: 'Jan', companies: 40, individuals: 80 },
    { name: 'Feb', companies: 55, individuals: 90 },
    { name: 'Mar', companies: 70, individuals: 110 },
    { name: 'Apr', companies: 85, individuals: 130 },
  ];

  const financialData = [
    { month: 'Jan', revenue: 1200000, expenses: 800000 },
    { month: 'Feb', revenue: 1500000, expenses: 900000 },
    { month: 'Mar', revenue: 1800000, expenses: 1100000 },
    { month: 'Apr', revenue: 2000000, expenses: 1300000 },
  ];

  const overallStats = [
    {
      icon: FileText,
      value: 1234,
      label: t('stats.totalTenders'),
      change: '+12%'
    },
    {
      icon: Building2,
      value: 567,
      label: t('stats.activeProjects'),
      change: '+8%'
    },
    {
      icon: Users,
      value: 890,
      label: t('stats.registeredUsers'),
      change: '+15%'
    },
    {
      icon: TrendingUp,
      value: 95,
      label: t('stats.successRate'),
      suffix: '%',
      change: '+5%'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12" dir={direction}>
      <h1 className="text-3xl font-bold mb-8">{t('stats.pageTitle')}</h1>

      {/* Overall Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {overallStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className={`text-sm font-medium ${
                  stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'
                }`}>
                  {stat.change}
                </span>
              </div>
              <div className="text-2xl font-bold mb-1">
                <CountUp end={stat.value} duration={2} />
                {stat.suffix}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          );
        })}
      </div>

      {/* Tenders Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-6">{t('stats.tenderOverview')}</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={tenderData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="active" fill="#06557a" name={t('stats.activeTenders')} />
              <Bar dataKey="completed" fill="#0873a3" name={t('stats.completedTenders')} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-6">{t('stats.projectStatus')}</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={projectStatusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {projectStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Registration Trends */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-12">
        <h2 className="text-xl font-bold mb-6">{t('stats.registrationTrends')}</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={registrationData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="companies" 
              stroke="#06557a" 
              name={t('stats.companies')}
            />
            <Line 
              type="monotone" 
              dataKey="individuals" 
              stroke="#0873a3" 
              name={t('stats.individuals')}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Financial Overview */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">{t('stats.financialOverview')}</h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-sm text-gray-600">{t('stats.revenue')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <span className="text-sm text-gray-600">{t('stats.expenses')}</span>
            </div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={financialData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip 
              formatter={(value) => 
                new Intl.NumberFormat(direction === 'rtl' ? 'ar-SA' : 'en-US', {
                  style: 'currency',
                  currency: 'SAR'
                }).format(value as number)
              }
            />
            <Bar dataKey="revenue" fill="#06557a" />
            <Bar dataKey="expenses" fill="#ef4444" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatisticsPage;