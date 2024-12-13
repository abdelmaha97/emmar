
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t, language } = useLanguage();
  const direction = language === 'ar' ? 'rtl' : 'ltr';

  const quickLinks = [
    { key: 'header.about', href: '/about' },
    { key: 'header.tenders', href: '/tenders' },
    { key: 'header.results', href: '/results' },
    { key: 'header.news', href: '/news' },
    { key: 'header.contact', href: '/contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Instagram, href: '#' },
    { icon: Youtube, href: '#' },
  ];

  return (
    <footer className="bg-gray-50 pt-16 pb-8" dir={direction}>
      {/* Footer content */}
      {/* ... rest of your existing footer code ... */}
    </footer>
  );
};

export default Footer;
