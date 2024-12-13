import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { NavLink } from '../ui/NavLink';

export const NavigationMenu: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();

  const mainNavLinks = [
    { key: 'header.home', href: '/' },
    { key: 'header.about', href: '/about' },
    { key: 'header.tenders', href: '/tenders' },
    { key: 'header.auctions', href: '/auctions' },
    { key: 'header.jobs', href: '/jobs' },
    { key: 'header.results', href: '/results' },
    { key: 'header.news', href: '/news' },
    { key: 'header.contact', href: '/contact' },
  ];

  return (
    <nav className="flex items-center gap-6">
      {mainNavLinks.map((link) => (
        <NavLink
          key={link.key}
          href={link.href}
          isActive={location.pathname === link.href}
        >
          {t(link.key)}
        </NavLink>
      ))}
    </nav>
  );
};