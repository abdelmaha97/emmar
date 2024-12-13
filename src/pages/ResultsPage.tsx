import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ResultsSearch from '../components/results/ResultsSearch';
import ResultsFilters from '../components/results/ResultsFilters';
import ResultsList from '../components/results/ResultsList';
import { ResultType } from '../types/results';

const ResultsPage = () => {
  const { t, dir } = useLanguage();
  const [selectedType, setSelectedType] = useState<ResultType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 py-12" dir={dir}>
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {t('results.title')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('results.description')}
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <ResultsSearch onSearch={setSearchQuery} />
          <ResultsFilters 
            selectedType={selectedType} 
            onTypeChange={setSelectedType} 
          />
        </div>

        {/* Results List */}
        <ResultsList 
          type={selectedType} 
          searchQuery={searchQuery} 
        />
      </div>
    </div>
  );
};

export default ResultsPage;