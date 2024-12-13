import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Calendar, ArrowRight, ArrowLeft } from 'lucide-react';

interface NewsCardProps {
  news: {
    id: string;
    title: string;
    content: string;
    date: string;
    category: string;
    image: string;
    urgent: boolean;
  };
}

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  const { t, language } = useLanguage();
  const direction = language === 'ar' ? 'rtl' : 'ltr';
  const Arrow = direction === 'rtl' ? ArrowLeft : ArrowRight;

  const categoryColors = {
    laws: 'bg-blue-100 text-blue-800',
    updates: 'bg-green-100 text-green-800',
    awards: 'bg-purple-100 text-purple-800'
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative h-48">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover"
        />
        <span className={`absolute top-2 ${direction === 'rtl' ? 'right-2' : 'left-2'} px-3 py-1 rounded-full text-sm ${categoryColors[news.category as keyof typeof categoryColors]}`}>
          {t(`news.categories.${news.category}`)}
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{news.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{news.content}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-500">
            <Calendar className="w-4 h-4" />
            <span>{new Date(news.date).toLocaleDateString(
              direction === 'rtl' ? 'ar-SA' : 'en-US'
            )}</span>
          </div>
          
          <Link 
            to={`/news/${news.id}`}
            className="flex items-center gap-1 text-primary hover:underline"
          >
            {t('news.readMore')}
            <Arrow className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;