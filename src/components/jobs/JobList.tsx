import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import JobCard from './JobCard';

// Sample job data with new fields
const SAMPLE_JOBS = [
  {
    id: '1',
    title: 'مهندس برمجيات',
    company: 'شركة التقنية المتقدمة',
    location: 'الخرطوم',
    type: 'employees',
    entity: 'companies',
    contractType: 'full-time',
    salary: '2000-3000',
    requiredNumber: 3,
    description: 'نبحث عن مهندس برمجيات ذو خبرة للعمل على مشاريع تقنية متقدمة',
    requirements: ['خبرة 3 سنوات', 'بكالوريوس هندسة برمجيات', 'إجادة اللغة الإنجليزية'],
    benefits: ['تأمين صحي', 'مواصلات', 'عمل مرن'],
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=400',
    additionalNotes: 'يفضل من لديه خبرة في مجال التطبيقات المالية'
  },
  {
    id: '2',
    title: 'فني كهرباء',
    company: 'وزارة الكهرباء',
    location: 'أم درمان',
    type: 'technical',
    entity: 'government',
    contractType: 'full-time',
    salary: '1500-2000',
    requiredNumber: 5,
    description: 'مطلوب فني كهرباء للعمل في مشاريع الصيانة والتركيبات الكهربائية',
    requirements: ['خبرة 2 سنة', 'دبلوم كهرباء', 'رخصة قيادة'],
    benefits: ['تأمين صحي', 'بدل مواصلات', 'سكن'],
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=400',
    additionalNotes: 'العمل بنظام الورديات'
  },
  {
    id: '3',
    title: 'عامل بناء',
    company: 'شركة الإعمار للمقاولات',
    location: 'بحري',
    type: 'workers',
    entity: 'companies',
    contractType: 'temporary',
    salary: '800-1000',
    requiredNumber: 20,
    description: 'مطلوب عمال بناء للعمل في مشروع سكني كبير',
    requirements: ['خبرة سنة', 'لياقة بدنية عالية'],
    benefits: ['سكن', 'وجبات', 'مواصلات'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=400',
    additionalNotes: 'مدة المشروع 6 أشهر قابلة للتجديد'
  },
  {
    id: '4',
    title: 'مدير مشروع',
    company: 'شركة التطوير العقاري',
    location: 'الخرطوم',
    type: 'employees',
    entity: 'companies',
    contractType: 'full-time',
    salary: '3000-4000',
    requiredNumber: 1,
    description: 'مطلوب مدير مشروع لإدارة مشاريع التطوير العقاري',
    requirements: ['خبرة 5 سنوات', 'بكالوريوس هندسة', 'مهارات قيادية'],
    benefits: ['تأمين صحي شامل', 'سيارة', 'مكافآت سنوية'],
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400',
    additionalNotes: 'يشترط خبرة في إدارة المشاريع العقارية'
  }
];

interface JobListProps {
  filters: {
    entity: string;
    employmentType: string;
  };
  searchQuery: string;
}

const JobList: React.FC<JobListProps> = ({ filters, searchQuery }) => {
  const { t } = useLanguage();

  const filteredJobs = SAMPLE_JOBS.filter(job => {
    const matchesEntity = filters.entity === 'all' || job.entity === filters.entity;
    const matchesType = filters.employmentType === 'all' || job.type === filters.employmentType;
    const matchesSearch = searchQuery === '' || 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesEntity && matchesType && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {filteredJobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
      {filteredJobs.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-600">{t('jobs.noResults')}</p>
        </div>
      )}
    </div>
  );
};

export default JobList;