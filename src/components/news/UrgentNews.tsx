import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { AlertCircle, X } from 'lucide-react';

interface UrgentNewsProps {
  news: Array<{
    id: string;
    title: string;
    content: string;
  }>;
  onClose: () => void;
}

const UrgentNews: React.FC<UrgentNewsProps> = ({ news, onClose }) => {
  const { t } = useLanguage();

  return (
    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 rounded-lg relative">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <AlertCircle className="h-5 w-5 text-red-500" />
        </div>
        <div className="ml-3">
          <h3 className="text-lg font-medium text-red-800">
            {t('news.urgentUpdates')}
          </h3>
          <div className="mt-2 text-red-700">
            {news.map((item) => (
              <div key={item.id} className="mb-2">
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-sm">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-500 hover:text-red-700"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default UrgentNews;