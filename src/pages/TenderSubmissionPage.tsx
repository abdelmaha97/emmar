import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft, ArrowRight, Upload, FileText, FileSpreadsheet, Building2, Check } from 'lucide-react';
import { toast } from 'react-hot-toast';
import FileUpload from '../components/tenders/FileUpload';
import CommitmentModal from '../components/tenders/CommitmentModal';

const TenderSubmissionPage = () => {
  const { t, dir } = useLanguage();
  const navigate = useNavigate();
  const { id } = useParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCommitment, setShowCommitment] = useState(false);
  const [files, setFiles] = useState({
    executionPlan: null,
    priceTable: null,
    bankGuarantee: null
  });
  const [hasAgreed, setHasAgreed] = useState(false);

  const BackArrow = dir === 'rtl' ? ArrowRight : ArrowLeft;

  const handleFileChange = (type: string, file: File | null) => {
    setFiles(prev => ({ ...prev, [type]: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!hasAgreed) {
      toast.error(t('tenders.submission.agreementRequired'));
      return;
    }

    if (!files.executionPlan || !files.priceTable || !files.bankGuarantee) {
      toast.error(t('tenders.submission.allFilesRequired'));
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success(t('tenders.submission.success'));
      navigate('/tenders');
    } catch (error) {
      toast.error(t('tenders.submission.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12" dir={dir}>
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate('/tenders')}
          className="flex items-center gap-2 text-gray-600 hover:text-primary mb-8"
        >
          <BackArrow className="w-5 h-5" />
          <span>{t('tenders.submission.back')}</span>
        </button>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-2xl font-bold mb-8">{t('tenders.submission.title')}</h1>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Execution Plan Upload */}
              <FileUpload
                label={t('tenders.submission.executionPlan')}
                accept=".pdf"
                icon={FileText}
                onChange={(file) => handleFileChange('executionPlan', file)}
                value={files.executionPlan}
              />

              {/* Price Table Upload */}
              <FileUpload
                label={t('tenders.submission.priceTable')}
                accept=".pdf,.xlsx,.xls"
                icon={FileSpreadsheet}
                onChange={(file) => handleFileChange('priceTable', file)}
                value={files.priceTable}
              />

              {/* Bank Guarantee Upload */}
              <FileUpload
                label={t('tenders.submission.bankGuarantee')}
                accept=".pdf"
                icon={Building2}
                onChange={(file) => handleFileChange('bankGuarantee', file)}
                value={files.bankGuarantee}
              />

              {/* Terms Agreement */}
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <button
                  type="button"
                  onClick={() => setShowCommitment(true)}
                  className="btn-primary py-2 px-4"
                >
                  {t('tenders.submission.viewTerms')}
                </button>
                <div className="flex-1">
                  <p className="text-sm text-gray-600">
                    {t('tenders.submission.termsDescription')}
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
                <Upload className="w-5 h-5" />
                {isSubmitting ? t('tenders.submission.submitting') : t('tenders.submission.submit')}
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
            toast.success(t('tenders.submission.agreementConfirmed'));
          }}
        />
      </div>
    </div>
  );
};

export default TenderSubmissionPage;