import { Project } from '../types/project';

export const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    number: 'P-2024-001',
    title: {
      ar: 'مشروع تطوير البنية التحتية للمنطقة الصناعية',
      en: 'Industrial Zone Infrastructure Development Project'
    },
    owner: {
      ar: 'وزارة الصناعة',
      en: 'Ministry of Industry'
    },
    contractor: {
      ar: 'شركة البناء المتقدمة',
      en: 'Advanced Construction Co.'
    },
    location: {
      ar: 'الخرطوم',
      en: 'Khartoum'
    },
    description: {
      ar: 'تطوير وتحديث البنية التحتية للمنطقة الصناعية بما في ذلك الطرق والكهرباء والمياه',
      en: 'Development and modernization of infrastructure in the industrial zone including roads, electricity, and water'
    },
    budget: 5000000,
    status: 'active',
    type: 'infrastructure',
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    progress: 25,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: '2',
    number: 'P-2024-002',
    title: {
      ar: 'مجمع سكني الواحة',
      en: 'Al-Waha Residential Complex'
    },
    owner: {
      ar: 'شركة التطوير العقاري',
      en: 'Real Estate Development Co.'
    },
    contractor: {
      ar: 'شركة المقاولون العرب',
      en: 'Arab Contractors Co.'
    },
    location: {
      ar: 'أم درمان',
      en: 'Omdurman'
    },
    description: {
      ar: 'إنشاء مجمع سكني متكامل يضم 200 وحدة سكنية مع كافة الخدمات',
      en: 'Construction of an integrated residential complex with 200 housing units and all services'
    },
    budget: 10000000,
    status: 'ongoing',
    type: 'residential',
    startDate: '2023-07-01',
    endDate: '2025-06-30',
    progress: 45,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: '3',
    number: 'P-2024-003',
    title: {
      ar: 'المركز التجاري الجديد',
      en: 'New Commercial Center'
    },
    owner: {
      ar: 'شركة الاستثمار العقاري',
      en: 'Real Estate Investment Co.'
    },
    contractor: {
      ar: 'شركة البناء الحديثة',
      en: 'Modern Construction Co.'
    },
    location: {
      ar: 'بحري',
      en: 'Bahri'
    },
    description: {
      ar: 'بناء مركز تجاري حديث يضم محلات تجارية ومكاتب ومطاعم',
      en: 'Construction of a modern commercial center including shops, offices, and restaurants'
    },
    budget: 8000000,
    status: 'completed',
    type: 'commercial',
    startDate: '2023-01-01',
    endDate: '2023-12-31',
    progress: 100,
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=2000'
  }
];