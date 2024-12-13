import React from 'react';
import { Eye, Share2, Gavel } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { type Auction } from '../../types';
import toast from 'react-hot-toast';

interface AuctionActionsProps {
  auction: Auction;
  onViewDetails: () => void;
  variant: 'list' | 'details';
}

const AuctionActions: React.FC<AuctionActionsProps> = ({
  auction,
  onViewDetails,
  variant
}) => {
  const { t } = useLanguage();

  const handleShare = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    try {
      if (navigator.share) {
        await navigator.share({
          title: auction.title.en,
          text: auction.description.en,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success(t('auctions.linkCopied'));
      }
    } catch (error) {
      console.error('Share error:', error);
      toast.error(t('auctions.shareError'));
    }
  };

  if (variant === 'list') {
    return (
      <div className="flex gap-3">
        <button 
          onClick={onViewDetails}
          className="flex-1 btn-primary py-2 flex items-center justify-center gap-2"
        >
          <Eye className="w-4 h-4" />
          {t('auctions.viewDetails')}
        </button>
        <button 
          onClick={handleShare}
          className="flex-1 bg-secondary text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2 hover:bg-secondary-light active:bg-secondary-dark"
        >
          <Share2 className="w-4 h-4" />
          {t('auctions.share')}
        </button>
      </div>
    );
  }

  return (
    <button 
      onClick={onViewDetails}
      disabled={auction.status !== 'active'}
      className={`w-full bg-secondary text-white px-4 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 ${
        auction.status !== 'active' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-secondary-light active:bg-secondary-dark'
      }`}
    >
      <Gavel className="w-5 h-5" />
      {t('auctions.submitBid')}
    </button>
  );
};

export default AuctionActions;