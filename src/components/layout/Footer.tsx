import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t, dir } = useLanguage();

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
    <footer className="bg-gray-50 pt-16 pb-8" dir={dir}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <img src="/assets/logo.png" alt="Logo" className="h-8 mb-4" />
            <p className="text-gray-600 mb-4">
              {t('footer.platform')}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-400 hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold mb-4">{t('footer.newsletter')}</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder={t('footer.emailPlaceholder')}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button type="submit" className="btn-primary w-full py-2">
                {t('footer.subscribe')}
              </button>
            </form>
          </div>

          {/* Download Apps */}
          <div>
            <h3 className="font-bold mb-4">{t('footer.downloadApp')}</h3>
            <div className="space-y-2">
              <a href="#" className="block">
                <img
                  src="/assets/app-store-icon.png"
                  alt="App Store"
                  className="h-10"
                />
              </a>
              <a href="#" className="block">
                <img
                  src="/assets/google-play-icon.png"
                  alt="Google Play"
                  className="h-10"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600">
            © {new Date().getFullYear()} {t('footer.rights')}
          </p>
          <div className="flex gap-4">
            <Link to="/privacy" className="text-gray-600 hover:text-primary">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="text-gray-600 hover:text-primary">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;