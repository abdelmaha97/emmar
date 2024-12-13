import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { ResultType } from '../../types/results';
import ResultCard from './ResultCard';
import { SAMPLE_RESULTS } from '../../data/results';

interface ResultsListProps {
  type: ResultType;
  searchQuery: string;
}

const ResultsList: React.FC<ResultsListProps> = ({ type, searchQuery }) => {
  const { t, language } = useLanguage();

  const filteredResults = SAMPLE_RESULTS.filter(result => {
    const matchesType = type === 'all' || result.type === type;
    const matchesSearch = searchQuery === '' || 
      result.entity[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.title[language].toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesType && matchesSearch;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredResults.map(result => (
        <ResultCard key={result.id} result={result} />
      ))}
      
      {filteredResults.length === 0 && (
        <div className="col-span-full text-center py-12">
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            {t('results.noResults')}
          </h3>
          <p className="text-gray-500">
            {t('results.tryAdjustingFilters')}
          </p>
        </div>
      )}
    </div>
  );
};

export default ResultsList;