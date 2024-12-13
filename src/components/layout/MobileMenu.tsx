import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

interface MobileMenuProps {
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ onClose }) => {
  const { t } = useLanguage();

  const menuLinks = [
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
    <div className="md:hidden bg-white border-t">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex flex-col gap-4">
          {menuLinks.map((link) => (
            <Link
              key={link.key}
              to={link.href}
              className="text-gray-600 hover:text-primary py-2"
              onClick={onClose}
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};