const Sequelize = require('sequelize');
const db = require('APP/db');

const Question = db.define('questions', {
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  answer: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  points: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Question;
