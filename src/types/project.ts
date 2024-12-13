export interface Project {
  id: string;
  number: string;
  title: {
    ar: string;
    en: string;
  };
  owner: {
    ar: string;
    en: string;
  };
  contractor: {
    ar: string;
    en: string;
  };
  location: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  budget: number;
  status: 'active' | 'ongoing' | 'completed';
  type: 'infrastructure' | 'residential' | 'commercial';
  startDate: string;
  endDate: string;
  progress: number;
  image: string;
}