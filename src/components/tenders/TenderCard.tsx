import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Building2, MapPin, Clock, DollarSign, Download, Send, ArrowRight, ArrowLeft } from 'lucide-react';
import { calculateTimeRemaining } from '../../utils/timeCalculations';

interface TenderCardProps {
  tender: {
    id: string;
    number: string;
    title: { ar: string; en: string };
    entity: { ar: string; en: string };
    region: { ar: string; en: string };
    description: { ar: string; en: string };
    documentCost: number;
    status: string;
    endDate: string;
    progress: number;
    image: string;
  };
}

const TenderCard: React.FC<TenderCardProps> = ({ tender }) => {
  const { t, dir, language } = useLanguage();
  const navigate = useNavigate();
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight;
  const { progress, timeLeft } = calculateTimeRemaining(tender.endDate);

  const getStatusColor = (status: string) => {
    return status === 'active' 
      ? 'bg-green-100 text-green-800'
      : 'bg-blue-100 text-blue-800';
  };

  const handleApply = () => {
    navigate(`/tenders/${tender.id}/submit`);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {/* Image Section */}
      <div className="relative h-48">
        <img
          src={tender.image}
          alt={tender.title[language]}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(tender.status)}`}>
            {t(`tenders.status.${tender.status}`)}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="mb-4">
          <div className="text-sm text-gray-600 mb-2">{tender.number}</div>
          <h3 className="text-xl font-bold mb-2">{tender.title[language]}</h3>
          
          <div className="flex items-center gap-2 text-gray-600 mb-2">
            <Building2 className="w-4 h-4" />
            <span>{tender.entity[language]}</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <MapPin className="w-4 h-4" />
            <span>{tender.region[language]}</span>
          </div>

          <p className="text-gray-600 mb-4 line-clamp-2">
            {tender.description[language]}
          </p>
        </div>

        {/* Progress Bar for Active Tenders */}
        {tender.status === 'active' && (
          <div className="mb-4">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{timeLeft}</span>
              </div>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-primary rounded-full h-2 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Document Cost */}
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <DollarSign className="w-4 h-4" />
          <span>{t('tenders.documentCost')}: {tender.documentCost} SAR</span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 btn-primary py-2 flex items-center justify-center gap-2">
            <Download className="w-4 h-4" />
            {t('tenders.downloadDoc')}
          </button>
          <button 
            onClick={handleApply}
            disabled={tender.status !== 'active'}
            className={`flex-1 bg-secondary text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2 ${
              tender.status !== 'active' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-secondary-light'
            }`}
          >
            <Send className="w-4 h-4" />
            {t('tenders.apply')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TenderCard;