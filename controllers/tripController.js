const express = require('express');

const { Trip, Gear, User } = require('../model');

const tripController = express.Router();

tripController.put('/:tripid/gears/:gearid/', async (req, res) => {
  try {
    const tripGear = await Trip.findOne({
      where: { id: req.params.tripid },
      include: [
        User, Gear,
      ],
    });
    // update here
    res.json(tripGear);
    // const tripGear = await Trip.findByPk(req.params.tripid);
    // const prevGear = await tripGear.getGears();
    // const newGear = await Gear.findByPk(req.params.gearid);
    // await tripGear.setGears([...prevGear, newGear]);
    // res.json({ ...tripGear, gears: [...prevGear, newGear] });
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = tripController;
