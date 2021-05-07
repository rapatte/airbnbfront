/* eslint-disable arrow-body-style */
/* eslint-disable no-return-await */
import api from './api';

const placeService = {
  getAll: async () => {
    return await api.get('/places');
  },
  getUnavailables: async (checkIn, checkOut) => {
    return await api.get(`/places/?check_in=${checkIn}&check_out=${checkOut}`);
  },
  getPlacesByCity: async (city) => {
    return await api.get(`/places/?city=${city}`);
  },
  createPlace: async (place) => {
    return await api.post('/places', place);
  },
  getMyPlaces: async () => {
    return await api.get('/myPlaces');
  }
};

export default placeService;
