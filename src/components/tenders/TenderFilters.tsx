import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Filter } from 'lucide-react';

interface TenderFiltersProps {
  filters: {
    status: string;
    type: string;
  };
  onFilterChange: (filters: any) => void;
}

const TenderFilters: React.FC<TenderFiltersProps> = ({ filters, onFilterChange }) => {
  const { t } = useLanguage();

  const handleFilterChange = (key: string, value: string) => {
    onFilterChange({ ...filters, [key]: value });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {t('tenders.filters.status')}
        </label>
        <select
          value={filters.status}
          onChange={(e) => handleFilterChange('status', e.target.value)}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="all">{t('tenders.filters.allStatus')}</option>
          <option value="active">{t('tenders.filters.active')}</option>
          <option value="closed">{t('tenders.filters.closed')}</option>
        </select>
      </div>

      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {t('tenders.filters.type')}
        </label>
        <select
          value={filters.type}
          onChange={(e) => handleFilterChange('type', e.target.value)}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="all">{t('tenders.filters.allTypes')}</option>
          <option value="government">{t('tenders.filters.government')}</option>
          <option value="private">{t('tenders.filters.private')}</option>
          <option value="individual">{t('tenders.filters.individual')}</option>
        </select>
      </div>
    </div>
  );
};

export default TenderFilters;