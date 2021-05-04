/* eslint-disable no-return-await */
import api from './api';

const userService = {
  login: async (email, password) => {
    const user = { email, password };

    return await api.post('/login', user);
  }

};

export default userService;
