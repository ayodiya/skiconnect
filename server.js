const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);
const winston = require('winston');
const expressWinston = require('express-winston');
const path = require('path');

const express = require('express');
const app = express();

require('./startup/logging');
require('./startup/routes')(app);
require('/startup/prod')(app);
// serve static files
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();

const port = process.env.PORT || 5000;
app.listen(port, () => winston.info(`Listening on port ${port}...`));
