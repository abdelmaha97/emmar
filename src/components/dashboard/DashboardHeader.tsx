import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import { Bell, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import NotificationBadge from './NotificationBadge';
import UserMenu from './UserMenu';

const DashboardHeader: React.FC = () => {
  const { t } = useLanguage();
  const { user } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/dashboard" className="text-xl font-bold text-primary">
            {t('dashboard.title')}
          </Link>

          <div className="flex items-center gap-4">
            <NotificationBadge />
            <UserMenu user={user} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;