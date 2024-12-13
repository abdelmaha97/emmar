import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Calendar, ArrowLeft, ArrowRight, MessageCircle, Share2 } from 'lucide-react';
import CommentSection from './CommentSection';
import toast from 'react-hot-toast';

interface NewsDetailsProps {
  news: {
    id: string;
    title: string;
    content: string;
    date: string;
    category: string;
    image: string;
    author?: string;
    readTime?: string;
  };
}

const NewsDetails: React.FC<NewsDetailsProps> = ({ news }) => {
  const { t, dir } = useLanguage();
  const navigate = useNavigate();
  const [showComments, setShowComments] = useState(false);
  const BackArrow = dir === 'rtl' ? ArrowRight : ArrowLeft;

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: news.title,
          text: news.content,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success(t('news.linkCopied'));
      }
    } catch (error) {
      toast.error(t('news.shareError'));
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={() => navigate('/news')}
        className="flex items-center gap-2 text-gray-600 hover:text-primary mb-6"
      >
        <BackArrow className="w-5 h-5" />
        {t('news.backToNews')}
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-96 object-cover"
        />

        <div className="p-8">
          <div className="flex items-center gap-4 text-gray-600 mb-4">
            <span className={`px-3 py-1 rounded-full text-sm ${
              news.category === 'laws' ? 'bg-blue-100 text-blue-800' :
              news.category === 'updates' ? 'bg-green-100 text-green-800' :
              'bg-purple-100 text-purple-800'
            }`}>
              {t(`news.categories.${news.category}`)}
            </span>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(news.date).toLocaleDateString(
                dir === 'rtl' ? 'ar-SA' : 'en-US'
              )}</span>
            </div>
            {news.author && (
              <span className="text-gray-600">
                {t('news.by')} {news.author}
              </span>
            )}
            {news.readTime && (
              <span className="text-gray-600">
                {news.readTime} {t('news.readTime')}
              </span>
            )}
          </div>

          <h1 className="text-3xl font-bold mb-6">{news.title}</h1>
          <div className="prose max-w-none mb-8">
            <p className="text-gray-600 leading-relaxed">{news.content}</p>
          </div>

          <div className="flex items-center gap-4 border-t pt-6">
            <button
              onClick={() => setShowComments(!showComments)}
              className="flex items-center gap-2 text-gray-600 hover:text-primary"
            >
              <MessageCircle className="w-5 h-5" />
              {t('news.comments')}
            </button>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 text-gray-600 hover:text-primary"
            >
              <Share2 className="w-5 h-5" />
              {t('news.share')}
            </button>
          </div>

          {showComments && (
            <div className="mt-8 border-t pt-8">
              <CommentSection newsId={news.id} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;