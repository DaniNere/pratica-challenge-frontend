// services/TechnicianService.ts

import api from '../api/api';
import type { Technician, CreateTechnicianPayload, UpdateTechnicianPayload } from '../types/technician';

export const TechnicianService = {
  async listAllTechnicians(): Promise<Technician[]> {
    const response = await api.get<Technician[]>('api/technicians');
    return response.data;
  },

  async createTechnician(technicianData: CreateTechnicianPayload): Promise<Technician> {
    const response = await api.post<Technician>('api/technicians', technicianData);
    return response.data;
  },

  async updateTechnician(id: number, technicianData: UpdateTechnicianPayload): Promise<Technician> {
    const response = await api.put<Technician>(`api/technicians/${id}`, technicianData);
    return response.data;
  },

  async deleteTechnician(id: number): Promise<void> {
    await api.delete(`api/technicians/${id}`);
  },

  async getTechnicianById(id: number): Promise<Technician> {
    const response = await api.get<Technician>(`api/technicians/${id}`);
    return response.data;
  },
};