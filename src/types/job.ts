export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'employees' | 'technical' | 'workers';
  entity: 'government' | 'companies';
  contractType: 'full-time' | 'part-time' | 'temporary';
  salary: string;
  requiredNumber: number;
  description: string;
  requirements: string[];
  benefits: string[];
  workingHours: string;
  workDays: string;
  image: string;
  additionalNotes?: string;
}