import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import BackButton from '../components/signup/BackButton';
import AccountTypeSelection from '../components/signup/AccountTypeSelection';
import CompanyRegistration from '../components/signup/CompanyRegistration';
import IndividualRegistration from '../components/signup/IndividualRegistration';

type AccountType = 'company' | 'individual';

const SignupPage = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const { dir } = useLanguage();
  const [accountType, setAccountType] = useState<AccountType | null>(null);

  const handleBack = () => {
    if (accountType) {
      setAccountType(null);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4" dir={dir()}>
      <div className="container mx-auto">
        <BackButton onBack={handleBack} />
        {!accountType ? (
          <AccountTypeSelection onSelect={setAccountType} />
        ) : (
          accountType === 'company' ? (
            <CompanyRegistration />
          ) : (
            <IndividualRegistration />
          )
        )}
      </div>
    </div>
  );
};

export default SignupPage;