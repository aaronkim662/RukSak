const axios = require('axios');

const BASE_URL = 'http://localhost:3001/';

const api = axios.create({ baseUrl: BASE_URL });

export const oneLocation = async (location) => {
  const loc = await api.get(`/location/${location}`);
  return loc.data;
}

export const allGear = async () => {
  const gear = await api.get(`/gear`);
  return gear.data;
}

export const oneGear = async (gearId) => {
  const gear = await axios.get(`/gear/${gearId}`);
  return gear.data;
}

export const putGear = async (item,gearId) => {
  const gear = await api.put(`/gear/${gearId}`, item, { headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } }, item);
  return gear.data;
};

export const createGear = async (item) => {
  let gear = await api.post(`/gear`, item, { headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } }, item);
  return gear.data;
};

export const deleteGear = async (gearId) => {
  try {
    const gear = await api.delete(`/gear/${gearId}`, null, { headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } });
    return gear.data;
    } catch (e) {
      console.log(e.message);
    };
};

export const loginUser = async (loginData) => {
  const resp = await api.post(`/auth/login`, loginData);
  return resp.data
}

export const registerUser = async (resgisterData) => {
  const resp = await api.post(`/auth/register`, resgisterData);
  return resp.data;
}
