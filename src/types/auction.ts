export interface Auction {
  id: string;
  number: string;
  title: {
    ar: string;
    en: string;
  };
  entity: {
    ar: string;
    en: string;
  };
  region: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  startingPrice: number;
  subscriptionPrice: number;
  status: 'active' | 'closed' | 'upcoming';
  endDate: string;
  progress: number;
  image: string;
}