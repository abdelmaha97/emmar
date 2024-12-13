import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Gavel } from 'lucide-react';
import { AuctionCard, AuctionFilters, AuctionSearch } from '../components/auctions';
import { AUCTIONS_DATA } from '../data/auctions';

const AuctionsPage = () => {
  const { t, dir } = useLanguage();
  const [filters, setFilters] = useState({
    status: 'all',
    type: 'all',
  });
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAuctions = AUCTIONS_DATA.filter(auction => {
    const matchesStatus = filters.status === 'all' || auction.status === filters.status;
    const matchesType = filters.type === 'all' || auction.type === filters.type;
    const matchesSearch = searchQuery === '' || 
      auction.title[dir === 'rtl' ? 'ar' : 'en'].toLowerCase().includes(searchQuery.toLowerCase()) ||
      auction.number.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesStatus && matchesType && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12" dir={dir}>
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            {t('auctions.title')}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('auctions.description')}
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <AuctionSearch onSearch={setSearchQuery} />
          <AuctionFilters filters={filters} onFilterChange={setFilters} />
        </div>

        {/* Auctions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAuctions.map(auction => (
            <AuctionCard key={auction.id} auction={auction} />
          ))}
        </div>

        {/* No Results */}
        {filteredAuctions.length === 0 && (
          <div className="text-center py-12">
            <Gavel className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              {t('auctions.noResults')}
            </h3>
            <p className="text-gray-500">
              {t('auctions.tryAdjustingFilters')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuctionsPage;