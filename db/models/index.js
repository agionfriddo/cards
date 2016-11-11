'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const Question = require('APP/db/models/question');
const User = require('APP/db/models/user');
const Group = require('APP/db/models/group');
const Game = require('APP/db/models/game');

Question.belongsTo(Group);
Group.belongsTo(User);
Game.belongsTo(Group);
Game.belongsTo(User, { as: 'winner' })
Game.belongsTo(User, { as: 'loser' })

module.exports = { Question, User, Group, Game }
