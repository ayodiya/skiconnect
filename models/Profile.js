const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  name: {
    type: mongoose.Schema.Types.String,
    ref: 'users',
  },

  email: {
    type: mongoose.Schema.Types.String,
    ref: 'users',
  },
  company: {
    type: String,
  },
  postion: {
    type: String,
  },
  website: {
    type: String,
  },
  location: {
    type: String,
  },
  skills: {
    type: [String],
  },
  aboutme: {
    type: String,
  },

  education: [
    {
      school: {
        type: String,
      },
      degree: {
        type: String,
      },
      fieldofstudy: {
        type: String,
      },
    },
  ],
  social: {
    twitter: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    github: {
      type: String,
    },
    facebook: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const schema = Joi.object({
  name: Joi.string().min(5).max(50).required(),
  username: Joi.string().alphanum().min(4).max(10).required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    })
    .required(),
  company: Joi.string(),
  website: Joi.string(),
  location: Joi.string(),
  status: Joi.string(),
  skills: Joi.string(),
  bio: Joi.string(),
  education: Joi.string(),
});

exports.Profile = mongoose.model('profile', ProfileSchema);
exports.validateProfile = schema;
