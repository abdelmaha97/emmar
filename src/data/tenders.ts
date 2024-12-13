export const TENDERS_DATA = [
  {
    id: '1',
    number: 'T-2024-001',
    title: {
      ar: 'مشروع تطوير البنية التحتية للمنطقة الصناعية',
      en: 'Industrial Zone Infrastructure Development Project'
    },
    entity: {
      ar: 'وزارة الصناعة',
      en: 'Ministry of Industry'
    },
    region: {
      ar: 'الخرطوم',
      en: 'Khartoum'
    },
    description: {
      ar: 'تطوير وتحديث البنية التحتية للمنطقة الصناعية بما في ذلك الطرق والكهرباء والمياه',
      en: 'Development and modernization of infrastructure in the industrial zone including roads, electricity, and water'
    },
    documentCost: 5000,
    status: 'active',
    type: 'government',
    endDate: '2024-05-01',
    progress: 65,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: '2',
    number: 'T-2024-002',
    title: {
      ar: 'توريد معدات طبية للمستشفيات',
      en: 'Medical Equipment Supply for Hospitals'
    },
    entity: {
      ar: 'شركة المعدات الطبية المتقدمة',
      en: 'Advanced Medical Equipment Co.'
    },
    region: {
      ar: 'أم درمان',
      en: 'Omdurman'
    },
    description: {
      ar: 'توريد وتركيب معدات طبية متطورة لخمسة مستشفيات رئيسية',
      en: 'Supply and installation of advanced medical equipment for five major hospitals'
    },
    documentCost: 3000,
    status: 'active',
    type: 'private',
    endDate: '2024-04-15',
    progress: 35,
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: '3',
    number: 'T-2024-003',
    title: {
      ar: 'مشروع بناء مجمع سكني',
      en: 'Residential Complex Construction Project'
    },
    entity: {
      ar: 'شركة الإعمار للتطوير العقاري',
      en: 'Al-Emar Real Estate Development'
    },
    region: {
      ar: 'بحري',
      en: 'Bahri'
    },
    description: {
      ar: 'إنشاء مجمع سكني متكامل يضم 200 وحدة سكنية مع كافة الخدمات',
      en: 'Construction of an integrated residential complex with 200 housing units and all services'
    },
    documentCost: 7500,
    status: 'closed',
    type: 'private',
    endDate: '2024-03-01',
    progress: 100,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000'
  }
] as const;