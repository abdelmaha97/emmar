import api from './api';
import { Tender } from '../types';

export const tenderService = {
  async getAllTenders() {
    const { data } = await api.get('/tenders');
    return data;
  },

  async getTenderById(id: string) {
    const { data } = await api.get(`/tenders/${id}`);
    return data;
  },

  async createTender(tenderData: Partial<Tender>) {
    const { data } = await api.post('/tenders', tenderData);
    return data;
  },

  async updateTender(id: string, tenderData: Partial<Tender>) {
    const { data } = await api.put(`/tenders/${id}`, tenderData);
    return data;
  },

  async deleteTender(id: string) {
    const { data } = await api.delete(`/tenders/${id}`);
    return data;
  },

  async getUserTenders() {
    const { data } = await api.get('/tenders/user');
    return data;
  }
};