/* eslint-disable arrow-body-style */
/* eslint-disable no-return-await */
import api from './api';

const placeService = {
  getAll: async () => api.get('/places'),
  getUnavailables: async (checkIn, checkOut) => api.get(`/places/?check_in=${checkIn}&check_out=${checkOut}`),
  createPlace: async (place) => api.post('/places', place),
  getMyPlaces: async () => api.get('/myPlaces'),
  deletePlace: async (id) => api.delete(`/places/${id}`),
  getOnePlace: async (id) => api.get(`/places/${id}`),
  getPlacesByCity: async (city) => api.get(`/places/?city=${city}`)
};

export default placeService;
