const express = require('express');
const { Gear } = require('../model');

const { Router } = express();

const gearController = Router();

gearController.get('/', async (req, res) => {
  try {
    const gear = await Gear.findAll();
    res.json(gear);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

gearController.get('/:id', async (req, res) => {
  try {
    const gear = await Gear.findByPk(req.params.id);
    res.json(gear);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

gearController.post('/', async (req, res) => {
  try {
    const gear = await Gear.create(req.body);

    res.json(gear);
  } catch (e) {
    res.status(500).send(e.message);
  }
})
