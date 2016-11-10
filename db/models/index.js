'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const Question = require('APP/db/models/question');
const User = require('APP/db/models/user');

module.exports = { Question, User }
