const axios = require('axios');

const BASE_URL = 'http://localhost:3001';

export const tripType = async () => {
  try {
    const tripType = await axios.get(`${BASE_URL}/tripType`);
    return tripType.data;
  } catch (e) {
    console.log(e.message);
  }
};
