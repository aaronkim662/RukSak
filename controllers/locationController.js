const { Router } = require('express');
const { Location } = require('../model');
// check above if it doesn't work

const locationController = Router();

locationController.get('/location', async (req, res, next) => {
  try {
    const locations = await Location.findAll();
    res.json(locations);
  } catch(e) {
    next(e);
  }
});

module.exports = locationController;
