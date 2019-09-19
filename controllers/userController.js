const express = require('express');

const { User, Trip } = require('../model');
const { hashPassword, genToken, checkPassword } = require('../services/auth');
const { restrict } = require('../services/auth');

const userController = express.Router();

const buildAuthResponse = (user) => {
  const { id, username } = user;
  const tokenData = { id, username };
  const token = genToken(tokenData);
  return { user: { id, username }, token };
};
// testing user data
userController.get('/', async (req, res, next) => {
  try {
    const user = await User.findAll();
    res.json(user);
  } catch (e) {
    next(e);
  }
});

userController.post('/register', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    // eslint-disable-next-line
    const password_digest = await hashPassword(password);
    const user = await User.create({ username, password_digest });
    const respData = buildAuthResponse(user);
    res.json(respData);
  } catch (e) {
    next(e);
  }
});

userController.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({
      where: { username },
    });
    if (await checkPassword(password, user.password_digest)) {
      const respData = buildAuthResponse(user);
      res.json({ user: respData });
    } else {
      res.status(401).send('invalid Credentials');
    }
  } catch (e) {
    res.status(500).send(e.message);
  }
});

userController.delete('/login/:id', restrict, async (req, res) => {
  const user = await User.findByPk(req.params.id);
  await user.destroy();
});

userController.put('/:userid/trip/:tripid/', async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: req.params.userid },
      include: [
        Trip,
      ],
    });
    // update here
    res.json(user);
  } catch (e) {
    res.status(500).send(e);
  }
});



module.exports = userController;
