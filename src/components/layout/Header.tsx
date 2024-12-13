import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogIn, UserPlus, Menu, X } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, dir } = useLanguage();
  const { user } = useAuth();
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
    <header className="bg-white shadow-md" dir={dir}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/assets/logo.png" alt="Logo" className="h-8" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-gray-600 hover:text-primary transition-colors ${
                  location.pathname === link.href ? 'text-primary font-medium' : ''
                }`}
              >
                {t(link.key)}
              </Link>
            ))}
          </nav>

          {/* Auth & Language */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            
            {user ? (
              <Link to="/dashboard" className="btn-primary py-2 px-4">
                {t('header.dashboard')}
              </Link>
            ) : (
              <div className="hidden md:flex items-center gap-2">
                <Link to="/login" className="flex items-center gap-1 text-gray-600 hover:text-primary">
                  <LogIn className="w-4 h-4" />
                  {t('header.login')}
                </Link>
                <Link to="/signup" className="btn-primary py-2 px-4 flex items-center gap-1">
                  <UserPlus className="w-4 h-4" />
                  {t('header.createAccount')}
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-primary"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t">
            <nav className="py-4">
              {mainNavLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block py-2 text-gray-600 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(link.key)}
                </Link>
              ))}
              {!user && (
                <>
                  <Link
                    to="/login"
                    className="block py-2 text-gray-600 hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('header.login')}
                  </Link>
                  <Link
                    to="/signup"
                    className="block py-2 text-gray-600 hover:text-primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('header.createAccount')}
                  </Link>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;