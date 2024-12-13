import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  User, Package, Gavel, Bell, Clock, Settings, LogOut 
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const DashboardSidebar = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const { logout } = useAuth();

  const menuItems = [
    { icon: User, label: t('dashboard.profile'), path: '/dashboard/profile' },
    { icon: Package, label: t('dashboard.bids'), path: '/dashboard/bids' },
    { icon: Gavel, label: t('dashboard.auctions'), path: '/dashboard/auctions' },
    { icon: Bell, label: t('dashboard.notifications'), path: '/dashboard/notifications' },
    { icon: Clock, label: t('dashboard.activities'), path: '/dashboard/activities' },
    { icon: Settings, label: t('dashboard.settings'), path: '/dashboard/settings' },
  ];

  return (
    <aside className="w-64 bg-white shadow-lg h-screen sticky top-0">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                    location.pathname === item.path
                      ? 'bg-primary text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
          <li>
            <button
              onClick={logout}
              className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>{t('dashboard.logout')}</span>
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;