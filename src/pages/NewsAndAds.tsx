import React from 'react';

const newsData = [
  {
    id: '1',
    title: 'تحديث جديد على قوانين المناقصات',
    content: 'تم تحديث قوانين المناقصات الخاصة بالشركات الخاصة. يرجى الاطلاع على التحديثات الجديدة.',
  },
  {
    id: '2',
    title: 'إعلان مناقصة جديدة لتوريد معدات طبية',
    content: 'تعلن وزارة الصحة عن مناقصة جديدة لتوريد معدات طبية. يمكنكم التقديم من خلال الموقع.',
  },
];

const adsData = [
  {
    id: '1',
    title: 'إعلانات لفرص العمل',
    content: 'يمكنك التقديم للوظائف الشاغرة في شركتنا عبر الرابط.',
  },
  {
    id: '2',
    title: 'عرض خاص على خدمات الشحن',
    content: 'احصل على خصم 20% على خدمات الشحن الدولية لدينا.',
  },
];

const NewsAndAds = () => {
  return (
    <div className="flex gap-8">
      <div className="w-2/3">
        <h2 className="text-2xl font-bold mb-8">الأخبار والتحديثات</h2>
        <div className="space-y-4">
          {newsData.map((news) => (
            <div key={news.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">{news.title}</h3>
              <p>{news.content}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-1/3">
        <h2 className="text-2xl font-bold mb-8">الإعلانات الجانبية</h2>
        <div className="space-y-4">
          {adsData.map((ad) => (
            <div key={ad.id} className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">{ad.title}</h3>
              <p>{ad.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsAndAds;
