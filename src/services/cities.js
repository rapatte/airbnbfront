import api from './api';

const CitiesService = {
  getAll: async () => api.get('/cities')
};

export default CitiesService;
