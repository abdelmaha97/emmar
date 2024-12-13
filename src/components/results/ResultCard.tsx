import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Building2, Calendar, Share2, Star, DollarSign, Award, Users } from 'lucide-react';
import { Result } from '../../types/results';
import { formatCurrency } from '../../utils/formatters';
import toast from 'react-hot-toast';

interface ResultCardProps {
  result: Result;
}

const ResultCard: React.FC<ResultCardProps> = ({ result }) => {
  const { t, language } = useLanguage();
  const [rating, setRating] = useState<number | null>(null);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'auctions':
        return 'bg-green-100 text-green-800';
      case 'bids':
        return 'bg-blue-100 text-blue-800';
      case 'jobs':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: result.title[language],
        text: result.description[language],
        url: window.location.href,
      });
    } catch (error) {
      await navigator.clipboard.writeText(window.location.href);
      toast.success(t('results.linkCopied'));
    }
  };

  const handleRate = (value: number) => {
    setRating(value);
    toast.success(t('results.ratingSubmitted'));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className={`px-3 py-1 rounded-full text-sm ${getTypeColor(result.type)}`}>
              {t(`results.types.${result.type}`)}
            </span>
            <h3 className="text-xl font-bold mt-2">{result.title[language]}</h3>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2 text-gray-600">
            <Building2 className="w-4 h-4" />
            <span>{result.entity[language]}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>{new Date(result.date).toLocaleDateString(
              language === 'ar' ? 'ar-SA' : 'en-US'
            )}</span>
          </div>
          {result.amount && (
            <div className="flex items-center gap-2 text-gray-600">
              <DollarSign className="w-4 h-4" />
              <span>{formatCurrency(result.amount, language === 'ar' ? 'rtl' : 'ltr')}</span>
            </div>
          )}
          {result.winner && (
            <div className="flex items-center gap-2 text-gray-600">
              <Award className="w-4 h-4" />
              <span>{result.winner[language]}</span>
            </div>
          )}
        </div>

        {/* Selected Candidates for Jobs */}
        {result.type === 'jobs' && result.selectedCandidates && result.selectedCandidates.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center gap-2 text-gray-700 mb-2">
              <Users className="w-4 h-4" />
              <h4 className="font-semibold">{t('results.selectedCandidates')}</h4>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              {result.selectedCandidates.map((candidate, index) => (
                <div key={index} className="flex justify-between items-center py-1">
                  <span className="text-gray-700">{candidate.name}</span>
                  <span className="text-gray-500 text-sm">{candidate.applicationNumber}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Notes */}
        <p className="text-gray-600 mb-6">{result.notes[language]}</p>

        {/* Actions */}
        <div className="flex items-center justify-between">
          {/* Rating */}
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                onClick={() => handleRate(value)}
                className={`p-1 hover:scale-110 transition-transform ${
                  rating && value <= rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
              >
                <Star className="w-5 h-5 fill-current" />
              </button>
            ))}
          </div>

          {/* Share Button */}
          <button
            onClick={handleShare}
            className="text-gray-600 hover:text-primary transition-colors"
          >
            <Share2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;