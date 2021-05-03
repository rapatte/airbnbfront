import api from './api';

const places = {
  // eslint-disable-next-line arrow-body-style
  getAll: async () => {
    // eslint-disable-next-line no-return-await
    return await api.get('/places');
  }
};

export default places;
