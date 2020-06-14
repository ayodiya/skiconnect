const mongoose = require('mongoose');
const Joi = require('@hapi/joi');

const PostSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  username: {
    type: mongoose.Schema.Types.String,
    ref: 'users',
  },
  text: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  likes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
      },
    },
  ],
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
      },
      text: {
        type: String,
        required: true,
      },
      name: {
        type: String,
      },

      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

const schema = Joi.object({
  text: Joi.string().min(5).max(450).required(),
  username: Joi.string().alphanum().min(4).max(10).required(),
});

exports.Post = mongoose.model('posts', PostSchema);
exports.validatePost = schema;
