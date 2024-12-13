import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Building2, MapPin, Clock, DollarSign } from 'lucide-react';
import { calculateTimeRemaining } from '../../utils/timeCalculations';
import AuctionActions from './AuctionActions';

interface AuctionCardProps {
  auction: {
    id: string;
    number: string;
    title: { ar: string; en: string };
    entity: { ar: string; en: string };
    region: { ar: string; en: string };
    description: { ar: string; en: string };
    startingPrice: number;
    subscriptionPrice: number;
    status: string;
    endDate: string;
    progress: number;
    image: string;
  };
}

const AuctionCard: React.FC<AuctionCardProps> = ({ auction }) => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const { progress, timeLeft } = calculateTimeRemaining(auction.endDate);

  const getStatusColor = (status: string) => {
    return status === 'active' 
      ? 'bg-green-100 text-green-800'
      : 'bg-blue-100 text-blue-800';
  };

  const handleViewDetails = () => {
    navigate(`/auctions/${auction.id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      {/* Image Section */}
      <div className="relative h-48">
        <img
          src={auction.image}
          alt={auction.title[language]}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(auction.status)}`}>
            {t(`auctions.status.${auction.status}`)}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="mb-4">
          <div className="text-sm text-gray-600 mb-2">{auction.number}</div>
          <h3 className="text-xl font-bold mb-2">{auction.title[language]}</h3>
          
          <div className="flex items-center gap-2 text-gray-600 mb-2">
            <Building2 className="w-4 h-4" />
            <span>{auction.entity[language]}</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600 mb-4">
            <MapPin className="w-4 h-4" />
            <span>{auction.region[language]}</span>
          </div>

          <p className="text-gray-600 mb-4 line-clamp-2">
            {auction.description[language]}
          </p>
        </div>

        {/* Progress Bar for Active Auctions */}
        {auction.status === 'active' && (
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

        {/* Prices */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-gray-600">
            <DollarSign className="w-4 h-4" />
            <span>{t('auctions.startingPrice')}: {auction.startingPrice} SAR</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <DollarSign className="w-4 h-4" />
            <span>{t('auctions.subscriptionPrice')}: {auction.subscriptionPrice} SAR</span>
          </div>
        </div>

        {/* Action Buttons */}
        <AuctionActions
          auction={auction}
          onViewDetails={handleViewDetails}
          variant="list"
        />
      </div>
    </div>
  );
};

export default AuctionCard;