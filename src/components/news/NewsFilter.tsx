import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Filter, Bell } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface NewsFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const NewsFilter: React.FC<NewsFilterProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  const { t } = useLanguage();

  const categories = [
    { id: 'all', label: t('news.filters.all') },
    { id: 'laws', label: t('news.filters.laws') },
    { id: 'updates', label: t('news.filters.updates') },
    { id: 'awards', label: t('news.filters.awards') },
  ];

  const handleNotificationToggle = (category: string) => {
    toast.success(t('news.notificationEnabled'));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="w-5 h-5" />
        <h2 className="text-xl font-bold">{t('news.filters.title')}</h2>
      </div>

      <div className="space-y-4">
        {categories.map(category => (
          <div key={category.id} className="flex items-center justify-between">
            <button
              onClick={() => onCategoryChange(category.id)}
              className={`flex-1 text-start px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary text-white'
                  : 'hover:bg-gray-100'
              }`}
            >
              {category.label}
            </button>
            <button
              onClick={() => handleNotificationToggle(category.id)}
              className="ml-2 p-2 text-gray-500 hover:text-primary"
            >
              <Bell className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFilter;