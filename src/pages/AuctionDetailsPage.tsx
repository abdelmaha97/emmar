import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  ArrowLeft, 
  ArrowRight, 
  MapPin, 
  Clock, 
  DollarSign, 
  Building2, 
  Tag, 
  Gavel,
  Info,
  CheckCircle
} from 'lucide-react';
import { AUCTIONS_DATA } from '../data/auctions';
import { calculateTimeRemaining } from '../utils/timeCalculations';
import BidSubmissionModal from '../components/auctions/details/BidSubmissionModal';
import toast from 'react-hot-toast';

const AuctionDetailsPage = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const { t, dir, language } = useLanguage();
  const navigate = useNavigate();
  const BackArrow = dir === 'rtl' ? ArrowRight : ArrowLeft;
  const [showBidModal, setShowBidModal] = useState(false);

  const auction = AUCTIONS_DATA.find(a => a.id === id);

  useEffect(() => {
    // Show bid modal if bid=true in URL
    if (searchParams.get('bid') === 'true') {
      setShowBidModal(true);
    }
  }, [searchParams]);

  // Sample bid data - In a real app, fetch from API
  const bids = [
    { id: 1, bidder: 'Ahmed M.', amount: 52000, time: '2024-03-15T14:30:00' },
    { id: 2, bidder: 'Sara K.', amount: 51000, time: '2024-03-15T14:25:00' },
    { id: 3, bidder: 'Mohammed R.', amount: 50000, time: '2024-03-15T14:20:00' },
  ];

  if (!auction) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{t('auctions.notFound')}</h1>
          <button
            onClick={() => navigate('/auctions')}
            className="text-primary hover:underline"
          >
            {t('auctions.backToList')}
          </button>
        </div>
      </div>
    );
  }

  const { timeLeft, progress } = calculateTimeRemaining(auction.endDate);
  const currentHighestBid = bids[0]?.amount || auction.startingPrice;

  const handleBid = () => {
    if (auction.status !== 'active') {
      toast.error(t('auctions.errors.inactiveAuction'));
      return;
    }
    setShowBidModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12" dir={dir}>
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate('/auctions')}
          className="flex items-center gap-2 text-gray-600 hover:text-primary mb-8"
        >
          <BackArrow className="w-5 h-5" />
          <span>{t('auctions.backToList')}</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Images Grid */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <img
                    src={auction.image}
                    alt={auction.title[language]}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </div>
                {/* Additional sample images */}
                <img
                  src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=800"
                  alt="Additional view 1"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=800"
                  alt="Additional view 2"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Item Details */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6">{t('auctions.itemDetails')}</h2>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="flex items-center gap-2">
                  <Tag className="w-5 h-5 text-primary" />
                  <span>{t('auctions.condition')}: {t('auctions.conditions.used')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>{auction.region[language]}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  <span>{auction.entity[language]}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Info className="w-5 h-5 text-primary" />
                  <span>{auction.number}</span>
                </div>
              </div>

              <div className="prose max-w-none">
                <p>{auction.description[language]}</p>
              </div>
            </div>

            {/* Bid History */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6">{t('auctions.bidHistory')}</h2>
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
                      {bid.amount} SAR
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Current Status */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{t('auctions.currentPrice')}</span>
                  <span className="text-2xl font-bold text-primary">
                    {currentHighestBid} SAR
                  </span>
                </div>
                
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-5 h-5" />
                  <span>{timeLeft}</span>
                </div>

                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>{t('auctions.progress')}</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary rounded-full h-2 transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Bid Button */}
              <button
                onClick={handleBid}
                disabled={auction.status !== 'active'}
                className={`w-full bg-secondary text-white px-4 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 ${
                  auction.status !== 'active' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-secondary-light active:bg-secondary-dark'
                }`}
              >
                <Gavel className="w-5 h-5" />
                {t('auctions.submitBid')}
              </button>
            </div>

            {/* Auction Rules */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="font-bold mb-4">{t('auctions.rules')}</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-sm text-gray-600">{t('auctions.rule1')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-sm text-gray-600">{t('auctions.rule2')}</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <span className="text-sm text-gray-600">{t('auctions.rule3')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bid Submission Modal */}
      {showBidModal && (
        <BidSubmissionModal
          auction={{
            id: auction.id,
            title: auction.title,
            currentBid: currentHighestBid
          }}
          onClose={() => {
            setShowBidModal(false);
            // Remove bid parameter from URL
            const newSearchParams = new URLSearchParams(searchParams);
            newSearchParams.delete('bid');
            navigate({ search: newSearchParams.toString() }, { replace: true });
          }}
        />
      )}
    </div>
  );
};

export default AuctionDetailsPage;