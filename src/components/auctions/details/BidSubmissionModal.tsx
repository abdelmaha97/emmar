import React, { useState } from 'react';
import { useLanguage } from '../../../contexts/LanguageContext';
import { X, DollarSign, Upload, FileText, Building2 } from 'lucide-react';
import FileUpload from './FileUpload';
import CommitmentModal from './CommitmentModal';
import toast from 'react-hot-toast';

interface BidSubmissionModalProps {
  auction: {
    id: string;
    title: { [key: string]: string };
    currentBid: number;
  };
  onClose: () => void;
}

const BidSubmissionModal: React.FC<BidSubmissionModalProps> = ({ auction, onClose }) => {
  const { t, language } = useLanguage();
  const [bidAmount, setBidAmount] = useState('');
  const [files, setFiles] = useState({
    priceList: null as File | null,
    bankGuarantee: null as File | null
  });
  const [showCommitment, setShowCommitment] = useState(false);
  const [hasAgreed, setHasAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!hasAgreed) {
      toast.error(t('auctions.bid.agreementRequired'));
      return;
    }

    if (!files.priceList || !files.bankGuarantee) {
      toast.error(t('auctions.bid.allFilesRequired'));
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success(t('auctions.bid.success'));
      onClose();
    } catch (error) {
      toast.error(t('auctions.bid.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">{t('auctions.bid.title')}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Bid Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('auctions.bid.amount')} *
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  value={bidAmount}
                  onChange={(e) => setBidAmount(e.target.value)}
                  min={auction.currentBid + 1}
                  step="1"
                  required
                  className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder={t('auctions.bid.amountPlaceholder')}
                />
              </div>
            </div>

            {/* File Uploads */}
            <FileUpload
              label={t('auctions.bid.priceList')}
              accept=".pdf"
              icon={FileText}
              onChange={(file) => setFiles(prev => ({ ...prev, priceList: file }))}
              value={files.priceList}
            />

            <FileUpload
              label={t('auctions.bid.bankGuarantee')}
              accept=".pdf"
              icon={Building2}
              onChange={(file) => setFiles(prev => ({ ...prev, bankGuarantee: file }))}
              value={files.bankGuarantee}
            />

            {/* Terms Agreement */}
            <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
              <button
                type="button"
                onClick={() => setShowCommitment(true)}
                className="btn-primary py-2 px-4"
              >
                {t('auctions.bid.viewTerms')}
              </button>
              <div className="flex-1">
                <p className="text-sm text-gray-600">
                  {t('auctions.bid.termsDescription')}
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !hasAgreed}
              className={`w-full btn-primary py-3 flex items-center justify-center gap-2 ${
                (isSubmitting || !hasAgreed) ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? t('auctions.bid.submitting') : t('auctions.bid.submit')}
            </button>
          </form>
        </div>
      </div>

      {/* Commitment Modal */}
      <CommitmentModal
        isOpen={showCommitment}
        onClose={() => setShowCommitment(false)}
        onAgree={() => {
          setHasAgreed(true);
          setShowCommitment(false);
          toast.success(t('auctions.bid.agreementConfirmed'));
        }}
      />
    </div>
  );
};

export default BidSubmissionModal;