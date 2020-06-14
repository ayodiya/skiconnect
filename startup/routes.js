const express = require('express');
const users = require('../routes/users');
const auth = require('../routes/auth');
const profile = require('../routes/profile');
const posts = require('../routes/posts');
module.exports = function (app) {
  app.use(express.json());
  app.use('/api/user', users);
  app.use('/api/auth', auth);
  app.use('/api/profile', profile);
  app.use('/api/posts', posts);
};
