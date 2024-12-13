import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import AboutHero from '../components/about/AboutHero';
import AboutValues from '../components/about/AboutValues';
import AboutStats from '../components/about/AboutStats';
import PartnersSection from '../components/about/PartnersSection';
import ProjectsSection from '../components/about/ProjectsSection';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <AboutHero />
      <AboutValues />
      <AboutStats />
      <ProjectsSection />
      <PartnersSection />
    </div>
  );
};

export default AboutPage;