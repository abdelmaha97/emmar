export const AUCTIONS_DATA = [
  {
    id: '1',
    number: 'A-2024-001',
    title: {
      ar: 'مزاد معدات بناء مستعملة',
      en: 'Used Construction Equipment Auction'
    },
    entity: {
      ar: 'شركة المعدات الثقيلة',
      en: 'Heavy Equipment Company'
    },
    region: {
      ar: 'الخرطوم',
      en: 'Khartoum'
    },
    description: {
      ar: 'مزاد على معدات بناء مستعملة تشمل رافعات وحفارات وشاحنات نقل',
      en: 'Auction for used construction equipment including cranes, excavators, and trucks'
    },
    startingPrice: 500000,
    subscriptionPrice: 1000,
    status: 'active',
    type: 'private',
    endDate: '2024-05-01',
    progress: 65,
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: '2',
    number: 'A-2024-002',
    title: {
      ar: 'مزاد سيارات حكومية',
      en: 'Government Vehicles Auction'
    },
    entity: {
      ar: 'وزارة المالية',
      en: 'Ministry of Finance'
    },
    region: {
      ar: 'أم درمان',
      en: 'Omdurman'
    },
    description: {
      ar: 'مزاد علني لبيع سيارات حكومية متنوعة في حالة جيدة',
      en: 'Public auction for various government vehicles in good condition'
    },
    startingPrice: 200000,
    subscriptionPrice: 500,
    status: 'active',
    type: 'government',
    endDate: '2024-04-15',
    progress: 35,
    image: 'https://images.unsplash.com/photo-1518987048-93e29699e79a?auto=format&fit=crop&q=80&w=2000'
  },
  {
    id: '3',
    number: 'A-2024-003',
    title: {
      ar: 'مزاد أثاث مكتبي',
      en: 'Office Furniture Auction'
    },
    entity: {
      ar: 'شركة الأثاث المكتبي',
      en: 'Office Furniture Co.'
    },
    region: {
      ar: 'بحري',
      en: 'Bahri'
    },
    description: {
      ar: 'مزاد على أثاث مكتبي متنوع يشمل مكاتب وكراسي وخزائن',
      en: 'Auction for various office furniture including desks, chairs, and cabinets'
    },
    startingPrice: 100000,
    subscriptionPrice: 200,
    status: 'closed',
    type: 'private',
    endDate: '2024-03-01',
    progress: 100,
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=2000'
  }
] as const;