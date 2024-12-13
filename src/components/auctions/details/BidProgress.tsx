import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';

interface BidProgressProps {
  progress: number;
}

const BidProgress: React.FC<BidProgressProps> = ({ progress }) => {
  const { t } = useLanguage();

  return (
    <div>
      <div className="flex justify-between text-sm text-gray-600 mb-1">
        <span>{t('auctions.timeProgress')}</span>
        <span>{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-primary rounded-full h-2 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default BidProgress;