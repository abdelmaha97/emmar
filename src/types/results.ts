export type ResultType = 'all' | 'auctions' | 'bids' | 'jobs';

export interface Result {
  id: string;
  type: Exclude<ResultType, 'all'>;
  title: {
    ar: string;
    en: string;
  };
  entity: {
    ar: string;
    en: string;
  };
  date: string;
  description: {
    ar: string;
    en: string;
  };
  notes: {
    ar: string;
    en: string;
  };
  amount?: number;
  winner?: {
    ar: string;
    en: string;
  };
  technicalPoints?: number;
  financialPoints?: number;
  location?: {
    ar: string;
    en: string;
  };
  salary?: {
    min: number;
    max: number;
    currency: string;
  };
  selectedCandidates?: Array<{
    name: string;
    applicationNumber: string;
  }>;
}