import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Filter } from 'lucide-react';

interface ProjectFiltersProps {
  filters: {
    status: string;
    type: string;
  };
  onFilterChange: (filters: any) => void;
}

const ProjectFilters: React.FC<ProjectFiltersProps> = ({ filters, onFilterChange }) => {
  const { t } = useLanguage();

  const handleFilterChange = (key: string, value: string) => {
    onFilterChange({ ...filters, [key]: value });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {t('projects.filters.status')}
        </label>
        <select
          value={filters.status}
          onChange={(e) => handleFilterChange('status', e.target.value)}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="all">{t('projects.filters.allStatus')}</option>
          <option value="active">{t('projects.filters.active')}</option>
          <option value="ongoing">{t('projects.filters.ongoing')}</option>
          <option value="completed">{t('projects.filters.completed')}</option>
        </select>
      </div>

      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {t('projects.filters.type')}
        </label>
        <select
          value={filters.type}
          onChange={(e) => handleFilterChange('type', e.target.value)}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="all">{t('projects.filters.allTypes')}</option>
          <option value="infrastructure">{t('projects.filters.infrastructure')}</option>
          <option value="residential">{t('projects.filters.residential')}</option>
          <option value="commercial">{t('projects.filters.commercial')}</option>
        </select>
      </div>
    </div>
  );
};

export default ProjectFilters;