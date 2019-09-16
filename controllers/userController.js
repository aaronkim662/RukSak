const express = require('express');
const { User } = require('../models');
const { hashPassword, genToken, checkPassword } = require('../services/auth');

const userController = express.Router();

const buildAuthResponse = (user) => {
  const { id, username } = user;
  const tokenData = { id, username };
  const token = genToken(tokenData);
  return { user: { id, username }, token };
};

userController.post('/register', async (req, res, next) => {
  try {
    const { username, password } = req.body;
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
      res.json(respData);
    } else {
      res.status(401).send('invalid Credentials');
    }
  } catch (e) {
    next(e);
  }
});

module.exports = userController;
