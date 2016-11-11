const Sequelize = require('sequelize');
const db = require('APP/db');

const Group = db.define('groups', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Group;
