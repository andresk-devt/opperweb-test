import api from "./clients/axios";

const resource = "/v1/categoria";

export default {
  async createCategorie(payload) {
    const response = await api.post(`${resource}/create`, payload, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    });
    return response.data;
  },
  async getCategoriesList(payload) {
    const response = await api.get(`${resource}`, {
      params: payload,
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    });
    return response.data;
  },
  async updateCategorie(payload) {
    const response = await api.put(`${resource}/update/${payload.id}`, payload.body, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    });
    return response.data;
  }
}