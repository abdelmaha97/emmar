import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Bell, Play } from 'lucide-react';
import NewsCard from '../components/news/NewsCard';
import UrgentNews from '../components/news/UrgentNews';
import VideoContent from '../components/news/VideoContent';

const NEWS_DATA = [
  {
    id: '1',
    title: 'تحديث قوانين المناقصات الحكومية',
    content: 'تم تحديث القوانين المتعلقة بالمناقصات الحكومية لتسهيل عملية التقديم',
    date: '2024-03-01',
    category: 'laws',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000',
    urgent: true,
  },
  {
    id: '2',
    title: 'شركة التقنية تفوز بمناقصة التحول الرقمي',
    content: 'أعلنت وزارة التقنية عن فوز شركة التقنية المتقدمة بمناقصة مشروع التحول الرقمي',
    date: '2024-03-02',
    category: 'awards',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=2000',
    urgent: false,
  },
  {
    id: '3',
    title: 'تحديثات جديدة في نظام التقديم الإلكتروني',
    content: 'تم إطلاق تحديثات جديدة لتحسين تجربة المستخدم في نظام التقديم الإلكتروني',
    date: '2024-03-03',
    category: 'updates',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000',
    urgent: false,
  },
];

const VIDEOS_DATA = [
  {
    id: '1',
    title: 'كيفية التقديم على المناقصات',
    thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000',
    url: 'https://www.youtube.com/embed/example1',
    duration: '5:30',
  },
  {
    id: '2',
    title: 'شرح القوانين الجديدة',
    thumbnail: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=2000',
    url: 'https://www.youtube.com/embed/example2',
    duration: '8:45',
  },
];

const COMPANIES_DATA = [
  {
    id: '1',
    name: 'شركة البناء الحديثة',
    description:
      'نقدم أحدث الخدمات في مجال البناء والتشييد مع ضمان الجودة والالتزام بالمواعيد.',
    logo: 'https://via.placeholder.com/100',
  },
  {
    id: '2',
    name: 'شركة التقنية المتقدمة',
    description:
      'متخصصون في الحلول التقنية للمؤسسات الكبيرة والمتوسطة مع فريق دعم محترف.',
    logo: 'https://via.placeholder.com/100',
  },
  {
    id: '3',
    name: 'شركة المعدات الثقيلة',
    description:
      'نقدم تأجير المعدات الثقيلة مع خدمات الصيانة والدعم الفني.',
    logo: 'https://via.placeholder.com/100',
  },
];

const NewsPage = () => {
  const { t, dir } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showUrgent, setShowUrgent] = useState(true);

  const filteredNews = NEWS_DATA.filter(
    (news) => selectedCategory === 'all' || news.category === selectedCategory
  );

  const urgentNews = NEWS_DATA.filter((news) => news.urgent);

  return (
    <div className="container mx-auto px-4 py-12" dir={dir}>
      {/* Urgent News Banner */}
      {showUrgent && urgentNews.length > 0 && (
        <UrgentNews news={urgentNews} onClose={() => setShowUrgent(false)} />
      )}

      <div className="flex flex-col gap-8">
        {/* Main Content */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">{t('news.title')}</h1>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-primary">
                <Bell className="w-5 h-5" />
                {t('news.notifications')}
              </button>
            </div>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {filteredNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>

          {/* Interactive Content Section */}
          <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Play className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">{t('news.interactiveContent')}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {VIDEOS_DATA.map((video) => (
                <VideoContent key={video.id} video={video} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;