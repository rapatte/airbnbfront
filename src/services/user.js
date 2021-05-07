/* eslint-disable camelcase */
/* eslint-disable no-return-await */
import api from './api';

const userService = {
  login: async (email, password) => {
    const user = { email, password };

    return await api.post('/login', user);
  },
  signup: async (email, password, first_name, last_name, role) => {
    const user = {
      email, password, first_name, last_name, role
    };

    return await api.post('/signup', user);
  }

};

export default userService;
