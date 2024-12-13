import { Result } from '../types/results';

export const SAMPLE_RESULTS: Result[] = [
  {
    id: '1',
    type: 'auctions',
    title: {
      ar: 'مزاد معدات بناء',
      en: 'Construction Equipment Auction'
    },
    entity: {
      ar: 'شركة المعدات الثقيلة',
      en: 'Heavy Equipment Company'
    },
    date: '2024-03-15',
    description: {
      ar: 'نتائج مزاد المعدات الثقيلة',
      en: 'Results of heavy equipment auction'
    },
    notes: {
      ar: 'تم اختيار العرض بناءً على التقييم الفني والمالي',
      en: 'The offer was chosen based on technical and financial evaluation'
    },
    amount: 500000,
    winner: {
      ar: 'شركة البناء المتقدمة',
      en: 'Advanced Construction Co.'
    },
    technicalPoints: 85,
    financialPoints: 90
  },
  {
    id: '2',
    type: 'bids',
    title: {
      ar: 'مناقصة توريد أجهزة طبية',
      en: 'Medical Equipment Supply Tender'
    },
    entity: {
      ar: 'وزارة الصحة',
      en: 'Ministry of Health'
    },
    date: '2024-03-10',
    description: {
      ar: 'نتائج مناقصة توريد الأجهزة الطبية',
      en: 'Results of medical equipment supply tender'
    },
    notes: {
      ar: 'تم البيع بناءً على أعلى عرض مالي',
      en: 'The item was sold based on the highest financial offer'
    },
    amount: 750000,
    winner: {
      ar: 'شركة المعدات الطبية الحديثة',
      en: 'Modern Medical Equipment Co.'
    }
  },
  {
    id: '3',
    type: 'jobs',
    title: {
      ar: 'مهندس برمجيات',
      en: 'Software Engineer'
    },
    entity: {
      ar: 'شركة التقنية المتقدمة',
      en: 'Advanced Technology Co.'
    },
    date: '2024-03-05',
    description: {
      ar: 'نتائج التوظيف لوظيفة مهندس برمجيات',
      en: 'Hiring results for Software Engineer position'
    },
    notes: {
      ar: 'تم اختيار المرشحين بناءً على خبراتهم ومهاراتهم واجتياز الاختبارات',
      en: 'Candidates were selected based on their experience, skills, and passing the tests'
    },
    location: {
      ar: 'الخرطوم',
      en: 'Khartoum'
    },
    salary: {
      min: 5000,
      max: 8000,
      currency: 'USD'
    },
    selectedCandidates: [
      { name: 'أحمد محمد', applicationNumber: 'APP001' },
      { name: 'سارة أحمد', applicationNumber: 'APP002' }
    ]
  }
];