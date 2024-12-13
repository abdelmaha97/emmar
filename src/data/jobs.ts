import { Job } from '../types/job';

export const SAMPLE_JOBS: Job[] = [
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
    requirements: [
      'خبرة 3 سنوات',
      'بكالوريوس هندسة برمجيات',
      'إجادة اللغة الإنجليزية',
      'خبرة في تطوير تطبيقات الويب',
      'معرفة بـ React و Node.js'
    ],
    benefits: [
      'تأمين صحي شامل',
      'مواصلات',
      'عمل مرن',
      'إجازة سنوية 30 يوم',
      'تدريب وتطوير مستمر'
    ],
    workingHours: '8:00 AM - 4:00 PM',
    workDays: 'الأحد - الخميس',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=400',
    additionalNotes: 'يفضل من لديه خبرة في مجال التطبيقات المالية'
  },
  // Add more sample jobs here...
];
