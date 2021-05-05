/* eslint-disable arrow-body-style */
/* eslint-disable no-return-await */
import api from './api';

const placeService = {
  getAll: async () => {
    return await api.get('/places');
  },
  createPlace: async (place) => {
    return await api.post('/places', place);
  }
};

export default placeService;
