const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');
const Joi = require('@hapi/joi');
const { User, validateUser } = require('../models/User');
const { check, validationResult } = require('express-validator');
const _ = require('lodash');

//@route   get api/users/me
//@desc    get User
//@access private

router.get('/', auth, async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  res.send(user);
});

//@route   POST api/users
//@desc    Register User
//@access public

router.post(
  '/login',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // const { error } = authValidate.validate(req.body);
    // if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (!user)
      return res
        .status(400)
        .json({ errors: [{ msg: 'Invalid user or password' }] });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return res
        .status(400)
        .json({ errors: [{ msg: 'Invalid user or password' }] });

    const token = user.generateAuthToken();

    res.send(token);
  }
);

//@route   POST api/users
//@desc    Register User
//@access public

router.post(
  '/register',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // const { error } = validateUser.validate(req.body);
    // if (error) return res.status(400).send(error.details[0].message);

    try {
      if (await User.findOne({ email: req.body.email }))
        return res
          .status(400)
          .json({ errors: [{ msg: 'User is already Registered' }] });
      if (await User.findOne({ username: req.body.username }))
        return res
          .status(400)
          .json({ errors: [{ msg: 'username is already taken' }] });
      user = new User(req.body);
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
      await user.save();

      const token = user.generateAuthToken();
      res.json({ token });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
