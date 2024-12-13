import React from 'react';
import { useParams } from 'react-router-dom';
import NewsDetails from '../components/news/NewsDetails';

// In a real app, this would be fetched from an API
const NEWS_DATA = {
  '1': {
    id: '1',
    title: 'تحديث قوانين المناقصات الحكومية',
    content: `تم تحديث القوانين المتعلقة بالمناقصات الحكومية لتسهيل عملية التقديم وزيادة الشفافية في العملية. 
    
    تشمل التحديثات الرئيسية:
    
    1. تبسيط إجراءات التقديم للمناقصات
    2. تحسين معايير التقييم والاختيار
    3. إضافة متطلبات جديدة للشفافية والحوكمة
    4. تحديث آليات الدفع والضمانات
    
    تهدف هذه التغييرات إلى تحسين كفاءة عملية المناقصات وضمان المنافسة العادلة بين جميع المشاركين.`,
    date: '2024-03-01',
    category: 'laws',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000',
    author: 'محمد أحمد',
    readTime: '5 min',
  },
  '2': {
    id: '2',
    title: 'شركة التقنية تفوز بمناقصة التحول الرقمي',
    content: 'أعلنت وزارة التقنية عن فوز شركة التقنية المتقدمة بمناقصة مشروع التحول الرقمي',
    date: '2024-03-02',
    category: 'awards',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=2000',
    author: 'سارة محمد',
    readTime: '3 min',
  },
};

const NewsDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const news = id ? NEWS_DATA[id as keyof typeof NEWS_DATA] : null;

  if (!news) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">News not found</h1>
          <p className="text-gray-600">The news article you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <NewsDetails news={news} />
    </div>
  );
};

export default NewsDetailsPage;