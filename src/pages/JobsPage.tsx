import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import JobSearch from '../components/jobs/JobSearch';
import JobFilters from '../components/jobs/JobFilters';
import JobList from '../components/jobs/JobList';

const JobsPage = () => {
  const { t } = useLanguage();
  const [filters, setFilters] = useState({
    entity: 'all',
    employmentType: 'all',
  });
  const [searchQuery, setSearchQuery] = useState('');

  const handleFilterChange = (key: string, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">{t('jobs.title')}</h1>

      {/* Search */}
      <JobSearch onSearch={setSearchQuery} />

      {/* Filters */}
      <JobFilters 
        filters={filters}
        onFilterChange={handleFilterChange}
      />

      {/* Job List */}
      <JobList 
        filters={filters}
        searchQuery={searchQuery} 
      />
    </div>
  );
};

export default JobsPage;