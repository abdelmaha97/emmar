import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FileText } from 'lucide-react';
import { TenderCard, TenderFilters, TenderSearch } from '../components/tenders';
import { TENDERS_DATA } from '../data/tenders';

const TendersPage = () => {
  const { t, dir } = useLanguage();
  const [filters, setFilters] = useState({
    status: 'all',
    type: 'all',
  });
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTenders = TENDERS_DATA.filter(tender => {
    const matchesStatus = filters.status === 'all' || tender.status === filters.status;
    const matchesType = filters.type === 'all' || tender.type === filters.type;
    const matchesSearch = searchQuery === '' || 
      tender.title[dir === 'rtl' ? 'ar' : 'en'].toLowerCase().includes(searchQuery.toLowerCase()) ||
      tender.number.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesStatus && matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12" dir={dir}>
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {t('tenders.title')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('tenders.description')}
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <TenderSearch onSearch={setSearchQuery} />
          <TenderFilters filters={filters} onFilterChange={setFilters} />
        </div>

        {/* Tenders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTenders.map(tender => (
            <TenderCard key={tender.id} tender={tender} />
          ))}
        </div>

        {/* No Results */}
        {filteredTenders.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              {t('tenders.noResults')}
            </h3>
            <p className="text-gray-500">
              {t('tenders.tryAdjustingFilters')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TendersPage;