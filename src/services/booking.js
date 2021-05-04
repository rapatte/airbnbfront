import api from './api';

const bookingService = {
  getAll: async () => api.get('/bookings')
};

export default bookingService;
