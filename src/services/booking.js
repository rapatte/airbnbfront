import api from './api';

const bookingService = {
  getAll: async () => api.get('/bookings'),
  showmyplaces: async (placeId) => api.get(`/bookings?place_id=${placeId}`)
};

export default bookingService;
