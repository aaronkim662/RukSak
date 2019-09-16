const axios = require('axios');

const BASE_URL = 'http://localhost:3001/';

export const oneLocation = async (location) => {
  let res = await axios.get(`${BASE_URL}/${location}`);
  return res.data;
}

export const allGear = async () => {
  let res = await axios.get(`${BASE_URL}/gear`);
  return res.data;
}

export const oneGear = async (gearId) => {
  let res = await axios.get(`${BASE_URL}/gear/${gearId}`);
  return res.data;
}

export const deleteGear = async (gearId) => {
  try {
    const gear = await axios.delete(`${BASE_URL}/gear/${gearId}`);
    return gear.data;
    } catch (e) {
      console.log(e.message);
    };
};

export const updateGear = async (data,gearId) => {
  const gear = await axios.put(`${BASE_URL}/gear/${gearId}`, data);
  return gear.data;
};

export const createGear = async (data) => {
  let res = await axios.post(`${BASE_URL}/gear`, data);
  return res.data;
}
