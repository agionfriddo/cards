const Sequelize = require('sequelize');
const db = require('APP/db');

const Game = db.define('games', {
  pointsOfWinner: {
    type: Sequelize.INTEGER
  },
  pointsOfLoser: {
    type: Sequelize.INTEGER
  }
});

module.exports = Game;
