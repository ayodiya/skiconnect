const mongoose = require('mongoose');
const Joi = require('@hapi/joi');
const jwt = require('jsonwebtoken');
const config = require('config');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, email: this.email },
    config.get('jwtPrivateKey')
  );
  return token;
};

// const schema = Joi.object({
//   name: Joi.string().min(5).max(50).required().messages({
//     'string.min': `"username" should  have a minimum of 5 characters`,
//   }),
//   username: Joi.string().alphanum().min(4).max(10).required(),
//   email: Joi.string()
//     .email({
//       minDomainSegments: 2,
//       tlds: { allow: ['com', 'net'] },
//     })
//     .required(),
//   password: Joi.string().alphanum().min(7).max(12).required(),
// });

exports.User = mongoose.model('users', UserSchema);
// exports.validateUser = schema;
