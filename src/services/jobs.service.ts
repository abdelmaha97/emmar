import api from './api';
import { Job, JobApplication } from '../types';

export const jobsService = {
  async getAllJobs(filters?: any) {
    const { data } = await api.get('/jobs', { params: filters });
    return data;
  },

  async getJobById(id: string) {
    const { data } = await api.get(`/jobs/${id}`);
    return data;
  },

  async applyForJob(jobId: string, application: JobApplication) {
    const { data } = await api.post(`/jobs/${jobId}/apply`, application);
    return data;
  }
};