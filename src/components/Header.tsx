
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogIn, UserPlus, Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const direction = language === 'ar' ? 'rtl' : 'ltr';

  const mainNavLinks = [
    { key: 'header.home', href: '/' },
    {
      key: 'header.aboutUs',
      href: '#',
      dropdown: true,
      items: [
        { key: 'header.about', href: '/about', icon: 'ℹ️' },
        { key: 'header.news', href: '/news', icon: '📰' },
        { key: 'header.contact', href: '/contact', icon: '📞' },
      ],
    },
    {
      key: 'header.services',
      href: '#',
      dropdown: true,
      items: [
        { key: 'header.tenders', href: '/tenders', icon: '📋' },
        { key: 'header.auctions', href: '/auctions', icon: '🔨' },
        { key: 'header.jobs', href: '/jobs', icon: '💼' },
      ],
    },
    { key: 'header.results', href: '/results' },
    {
      key: 'header.reports',
      href: '#',
      dropdown: true,
      items: [
        { key: 'header.projects', href: '/projects', icon: '🏗️' },
        { key: 'header.statistics', href: '/statistics', icon: '📊' },
      ],
    },
  ];

  const handleLanguageChange = (lang: 'ar' | 'en') => {
    setLanguage(lang);
  };

  const isActive = (href: string) => location.pathname === href;

  const toggleDropdown = (key: string) => {
    setOpenDropdown(prevKey => prevKey === key ? null : key);
  };

  return (
    <header className="bg-white shadow-md" dir={direction}>
      {/* Header content */}
      {/* ... rest of your existing header code ... */}
    </header>
  );
};

export default Header;
