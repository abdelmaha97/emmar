import React from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { formatCurrency } from '../../../utils/formatters';

interface BidHistoryProps {
  auctionId: string;
}

const BidHistory: React.FC<BidHistoryProps> = ({ auctionId }) => {
  const { t, dir } = useLanguage();

  // Sample bid data - In a real app, fetch from API
  const bids = [
    { id: 1, bidder: 'Ahmed M.', amount: 52000, time: '2024-03-15T14:30:00' },
    { id: 2, bidder: 'Sara K.', amount: 51000, time: '2024-03-15T14:25:00' },
    { id: 3, bidder: 'Mohammed R.', amount: 50000, time: '2024-03-15T14:20:00' },
  ];

  return (
    <div className="space-y-4">
      {bids.map((bid) => (
        <div
          key={bid.id}
          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
        >
          <div>
            <p className="font-semibold">{bid.bidder}</p>
            <p className="text-sm text-gray-600">
              {new Date(bid.time).toLocaleString(dir === 'rtl' ? 'ar-SA' : 'en-US')}
            </p>
          </div>
          <div className="text-lg font-bold text-primary">
            {formatCurrency(bid.amount, dir)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BidHistory;