import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Building2, Briefcase } from 'lucide-react';

interface JobFiltersProps {
  filters: {
    entity: string;
    employmentType: string;
  };
  onFilterChange: (key: string, value: string) => void;
}

const JobFilters: React.FC<JobFiltersProps> = ({ filters, onFilterChange }) => {
  const { t } = useLanguage();

  const entities = [
    { id: 'all', label: t('jobs.filters.allEntities') },
    { id: 'government', label: t('jobs.filters.government') },
    { id: 'companies', label: t('jobs.filters.companies') }
  ];

  const employmentTypes = [
    { id: 'all', label: t('jobs.filters.allTypes') },
    { id: 'employees', label: t('jobs.types.employees') },
    { id: 'technical', label: t('jobs.types.technicians') },
    { id: 'workers', label: t('jobs.types.workers') }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Entity Filter */}
        <div>
          <label className="block text-sm font-medium mb-2">
            <Building2 className="inline-block w-4 h-4 mr-2" />
            {t('jobs.filters.entity')}
          </label>
          <select
            value={filters.entity}
            onChange={(e) => onFilterChange('entity', e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {entities.map(entity => (
              <option key={entity.id} value={entity.id}>{entity.label}</option>
            ))}
          </select>
        </div>

        {/* Employment Type Filter */}
        <div>
          <label className="block text-sm font-medium mb-2">
            <Briefcase className="inline-block w-4 h-4 mr-2" />
            {t('jobs.filters.employmentType')}
          </label>
          <select
            value={filters.employmentType}
            onChange={(e) => onFilterChange('employmentType', e.target.value)}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {employmentTypes.map(type => (
              <option key={type.id} value={type.id}>{type.label}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default JobFilters;